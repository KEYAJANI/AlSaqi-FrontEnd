import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AlSaqiLogo from '@/assets/AlSaqiLogo';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          <div className="mb-8 flex justify-center">
            <AlSaqiLogo className="w-24 h-24" />
          </div>
          
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-900 mb-2">الصفحة غير موجودة</p>
          <p className="text-gray-600 mb-8">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
          </p>
          
          <Link href="/">
            <Button size="lg" className="rounded-full px-8">
              العودة للصفحة الرئيسية
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}