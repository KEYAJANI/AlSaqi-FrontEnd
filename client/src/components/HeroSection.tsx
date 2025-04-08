import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { motion, useAnimation } from "framer-motion";
import { LockIcon, ShieldIcon, CoinIcon, LightningIcon } from "@/lib/icons";
import PhonePos from "@/assets/PhonePos";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";
import DownloadAppModal from "./DownloadAppModal";

export default function HeroSection() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const { language, isRTL } = useLanguage();

  const statsData = [
    {
      value: "1.2M",
      label: translations[language].activeClients,
      icon: <CoinIcon />,
    },
    {
      value: "50K",
      label: translations[language].registeredMerchants,
      icon: <LightningIcon />,
    },
    {
      value: "99.9%",
      label: translations[language].uptime,
      icon: <ShieldIcon />,
    },
    {
      value: "24/7",
      label: translations[language].support,
      icon: <LockIcon />,
    },
  ];

  const handleOpenDownloadModal = () => {
    setIsDownloadModalOpen(true);
  };

  useEffect(() => {
    setIsVisible(true);
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    });
  }, [controls]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-primary/90"
      dir={isRTL ? "rtl" : "ltr"}
      id="hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24 xl:py-32">
        <div className="grid md:grid-cols-2 gap-x-4 lg:gap-x-12 items-center mx-auto max-w-7xl">
          {/* Hero Content */}
          <div className="order-2 md:order-1 md:mt-0 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="2xl:pr-8 max-w-lg mx-auto md:mx-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {translations[language].heroTitle}
                <span className="block text-white/90 mt-2">
                  {translations[language].heroSubtitle}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {translations[language].heroDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-12 md:mb-16">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg bg-white text-primary hover:bg-white/90 font-semibold"
                  onClick={handleOpenDownloadModal}
                >
                  {translations[language].downloadApp}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 bg-white/5 py-6 text-lg text-white hover:text-white border-white/50 hover:bg-white/10 font-semibold"
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {translations[language].learnMore}
                </Button>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-lg mx-auto md:max-w-none md:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center flex flex-col items-center hover:bg-white/20 transition-colors"
                >
                  <div className="bg-white/20 p-2 rounded-lg mb-3 text-white">
                    {stat.icon}
                  </div>
                  <span className="text-white text-2xl font-bold">
                    {stat.value}
                  </span>
                  <span className="text-white/80 text-sm mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Phone & POS SVG Illustration */}
          <motion.div
            className="order-1 md:order-2 flex justify-center items-center relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-full max-w-lg relative flex justify-center items-center">
              {/* Main Image */}
              <PhonePos />

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-white/5 blur-2xl" />

              {/* Floating circles decoration */}
              <div className="absolute top-10 left-0 w-8 h-8 bg-white/10 rounded-full animate-pulse-slow" />
              <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-full animate-pulse-slow" />
              <div className="absolute top-1/3 right-0 w-6 h-6 bg-white/20 rounded-full animate-pulse-slow" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Straight divider */}
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-white"></div>

      {/* Download app modal */}
      <DownloadAppModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </section>
  );
}
