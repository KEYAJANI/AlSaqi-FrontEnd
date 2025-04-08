import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import AlSaqiLogo from '@/assets/AlSaqiLogo';
import { useLanguage, translations } from '@/contexts/LanguageContext';
import DownloadAppModal from './DownloadAppModal';

export default function Footer() {
  const { language, isRTL } = useLanguage();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  
  useEffect(() => {
    const handleOpenDownloadModal = () => {
      setIsDownloadModalOpen(true);
    };
    
    window.addEventListener('open-download-modal', handleOpenDownloadModal);
    
    return () => {
      window.removeEventListener('open-download-modal', handleOpenDownloadModal);
    };
  }, []);
  
  return (
    <footer className="bg-gray-900 text-white py-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <AlSaqiLogo className="w-12 h-12" />
              <span className="text-2xl font-bold">{translations[language].companyName}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {language === 'ar' 
                ? 'شركة رائدة في مجال المدفوعات الإلكترونية وحلول الدفع الرقمي في العراق. نقدم خدمات متكاملة للأفراد والشركات لتسهيل المعاملات المالية بطريقة آمنة وسريعة.'
                : 'A leading company in electronic payments and digital payment solutions in Iraq. We provide integrated services for individuals and companies to facilitate financial transactions in a secure and fast manner.'
              }
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="https://www.facebook.com/profile.php?id=100093546525798" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/alsaqi.iq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/%D8%A7%D9%84%D8%B3%D8%A7%D9%82%D9%8A-%D9%84%D9%84%D8%AF%D9%81%D8%B9-%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A-saqi-payment-services/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">
                  {translations[language].home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {translations[language].about}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  {translations[language].features}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {translations[language].contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'ar' ? 'المنتجات' : 'Products'}</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#cards" className="hover:text-primary transition-colors">
                  {translations[language].cards}
                </a>
              </li>
              <li>
                <a href="#pos" className="hover:text-primary transition-colors">
                  {translations[language].pos}
                </a>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-download-modal'))}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'تطبيق الساقي' : 'Al-Saqi App'}
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {language === 'ar' ? 'بوابة الدفع' : 'Payment Gateway'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'ar' ? 'الدعم' : 'Support'}</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  {translations[language].faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {language === 'ar' ? 'الدعم الفني' : 'Technical Support'}
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(language === 'ar' ? 'سياسة الخصوصية غير متوفرة حاليًا' : 'Privacy Policy not available at this time');
                  }}
                  className="hover:text-primary transition-colors"
                >
                  {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(language === 'ar' ? 'الشروط والأحكام غير متوفرة حاليًا' : 'Terms & Conditions not available at this time');
                  }}
                  className="hover:text-primary transition-colors"
                >
                  {language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {language === 'ar' 
              ? 'شركة الساقي. جميع الحقوق محفوظة.' 
              : 'Al-Saqi Company. All rights reserved.'}
          </p>
        </div>
      </div>
      
      {/* Download App Modal */}
      <DownloadAppModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </footer>
  );
}