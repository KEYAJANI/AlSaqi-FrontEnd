import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import AlSaqiLogo from "../assets/AlSaqiLogo";
import AlSaqiWhiteLogo from "../assets/AlSaqiWhiteLogo";
import { Button } from "./ui/button";
import useMobileMenu from "@/hooks/useMobileMenu";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";
import DownloadAppModal from "./DownloadAppModal";

const Navbar: React.FC = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const { language, setLanguage, isRTL } = useLanguage();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Function to scroll to element by ID
  const scrollToSection = (elementId: string, e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL with hash without page reload
      window.history.pushState(null, "", `/#${elementId}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 py-3 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } `}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={`container mx-auto px-4 `}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-2 space-x-reverse cursor-pointer">
                <AlSaqiLogo
                  className={`w-12 h-12 ${isScrolled ? "block" : "hidden"}`}
                />
                <AlSaqiWhiteLogo
                  className={`w-12 h-12 ${isScrolled ? "hidden" : "block"}`}
                />
                <span
                  className={`text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}
                >
                  {translations[language].companyName}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center space-x-6 ${isRTL ? "space-x-reverse" : ""}`}
          >
            <a
              href="#features"
              onClick={(e) => scrollToSection("features", e)}
              className={`text-base font-medium  transition-colors cursor-pointer ${isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"}`}
            >
              {translations[language].features}
            </a>
            <a
              href="#cards"
              onClick={(e) => scrollToSection("cards", e)}
              className={`text-base font-medium  transition-colors cursor-pointer ${isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"}`}
            >
              {translations[language].cards}
            </a>
            <a
              href="#pos"
              onClick={(e) => scrollToSection("pos", e)}
              className={`text-base font-medium  transition-colors cursor-pointer ${isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"}`}
            >
              {translations[language].pos}
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection("about", e)}
              className={`text-base font-medium  transition-colors cursor-pointer ${isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"}`}
            >
              {translations[language].about}
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection("faq", e)}
              className={`text-base font-medium  transition-colors cursor-pointer ${isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"}`}
            >
              {translations[language].faq}
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className={`text-base font-medium  transition-colors cursor-pointer ${isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"}`}
            >
              {translations[language].contact}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="default"
              size="lg"
              className={`rounded-full  px-8 ${isScrolled ? "text-white hover:text-white/80" : "text-black bg-white hover:bg-white hover:text-black/60"}`}
              onClick={() => setIsDownloadModalOpen(true)}
            >
              {translations[language].download}
            </Button>

            <div className="relative">
              <button
                className={`text-base font-medium  transition-colors cursor-pointer ${isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"}`}
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              >
                <span>{language === "ar" ? "English" : "عربي"}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden text-primary ${isScrolled ? "text-gray-700" : "text-white"}`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-lg rounded-b-lg mt-2 py-4 animate-in fade-in slide-in-from-top duration-300`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a
            href="#features"
            onClick={(e) => scrollToSection("features", e)}
            className="text-gray-700 hover:text-primary py-2 transition-colors cursor-pointer"
          >
            {translations[language].features}
          </a>
          <a
            href="#cards"
            onClick={(e) => scrollToSection("cards", e)}
            className="text-gray-700 hover:text-primary py-2 transition-colors cursor-pointer"
          >
            {translations[language].cards}
          </a>
          <a
            href="#pos"
            onClick={(e) => scrollToSection("pos", e)}
            className="text-gray-700 hover:text-primary py-2 transition-colors cursor-pointer"
          >
            {translations[language].pos}
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection("about", e)}
            className="text-gray-700 hover:text-primary py-2 transition-colors cursor-pointer"
          >
            {translations[language].about}
          </a>
          <a
            href="#faq"
            onClick={(e) => scrollToSection("faq", e)}
            className="text-gray-700 hover:text-primary py-2 transition-colors cursor-pointer"
          >
            {translations[language].faq}
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection("contact", e)}
            className="text-gray-700 hover:text-primary py-2 transition-colors cursor-pointer"
          >
            {translations[language].contact}
          </a>
          <Button
            variant="default"
            size="lg"
            className="rounded-full mt-4"
            onClick={() => setIsDownloadModalOpen(true)}
          >
            {translations[language].download}
          </Button>

          <button
            className={`text-gray-700 hover:text-primary text-base font-medium  transition-colors cursor-pointer `}
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
          >
            <span>{language === "ar" ? "عربي" : "English"}</span>
          </button>
        </div>
      </div>

      {/* Download App Modal */}
      <DownloadAppModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
