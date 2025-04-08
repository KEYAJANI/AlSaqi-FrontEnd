import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import CardSection from '@/components/CardSection';
import POSSection from '@/components/POSSection';
import About from '@/components/About';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900" dir="rtl">
      <Navbar />
      <HeroSection />
      <Features />
      <CardSection />
      <POSSection />
      <About />
      <FAQSection />
      <Contact />
      <Footer />
    </div>
  );
}