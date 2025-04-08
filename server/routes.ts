import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, message } = req.body as ContactFormData;
      
      // Simple validation
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Email validation using a simple regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      
      // Here we would typically save to a database, but for demo purposes we'll just log it
      console.log('Contact form submission:', { name, email, phone, message });
      
      // Return success response
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
