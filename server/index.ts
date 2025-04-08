import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";

const app = express();

// Middleware for parsing incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware to capture response time and log API calls
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Register routes dynamically
(async () => {
  try {
    const server = await registerRoutes(app);

    // Error handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      const logMessage = `Error: ${message}, Status: ${status}`;

      log(logMessage); // Log the error

      res.status(status).json({ message });
    });

    // Development environment handling (for Vite)
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // Always serve the app on port 5000 in a containerized environment
    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen(port, "0.0.0.0", () => {
      log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error while starting the server:", error);
    process.exit(1); // Exit with failure code if server setup fails
  }
})();

// To handle static files correctly when in production
function serveStatic(app: express.Express) {
  const staticPath = path.resolve(__dirname, "dist"); // Path to your build directory
  app.use(express.static(staticPath));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(staticPath, "index.html"));
  });
}

