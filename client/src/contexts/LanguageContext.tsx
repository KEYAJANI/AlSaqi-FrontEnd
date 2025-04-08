import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    features: 'المميزات',
    cards: 'البطاقات',
    pos: 'نقاط البيع',
    about: 'عن الشركة',
    faq: 'الأسئلة الشائعة',
    contact: 'اتصل بنا',
    download: 'حمّل تطبيقنا',
    companyName: 'الساقي',
    
    // Hero section
    heroTitle: 'حلول دفع إلكتروني',
    heroSubtitle: 'موثوقة وسريعة',
    heroDescription: 'انضم إلى آلاف التجار والعملاء الذين يثقون بنا في إدارة معاملاتهم المالية بسلاسة وأمان تام.',
    downloadApp: 'حمّل تطبيقنا',
    learnMore: 'تعلم المزيد',
    
    // Stats
    activeClients: 'عميل نشط',
    registeredMerchants: 'تاجر مسجل',
    uptime: 'وقت تشغيل',
    support: 'دعم فني',
    
    // Features section
    featuresTitle: 'مميزاتنا',
    featuresSubtitle: 'خدمات مالية متكاملة لاحتياجاتك',
    securePayments: 'مدفوعات آمنة',
    securePaymentsDesc: 'حماية عالية المستوى لجميع المعاملات والبيانات الشخصية',
    instantTransactions: 'معاملات فورية',
    instantTransactionsDesc: 'تنفيذ المدفوعات في ثوانٍ معدودة بدون أي تأخير',
    lowFees: 'رسوم منخفضة',
    lowFeesDesc: 'أسعار تنافسية ورسوم معاملات منخفضة لكل العمليات',
    support24: 'دعم 24/7',
    support24Desc: 'فريق دعم متاح على مدار الساعة لمساعدتك عند الحاجة',
    
    // Card section
    cardTitle: 'بطاقات الدفع',
    cardSubtitle: 'حلول مالية مبتكرة',
    cardFeatures: 'مميزات البطاقة',
    secureChip: 'شريحة آمنة',
    worldwideAcceptance: 'قبول عالمي',
    internetPurchases: 'مشتريات عبر الإنترنت',
    instantNotifications: 'إشعارات فورية',
    
    // POS section
    posTitle: 'أجهزة نقاط البيع',
    posSubtitle: 'تقنية متطورة لمعاملات سلسة',
    fastPayment: 'دفع سريع',
    portableDevices: 'أجهزة محمولة',
    easyIntegration: 'تكامل سهل',
    detailedReports: 'تقارير مفصلة',
    
    // About section
    aboutTitle: 'عن الساقي',
    aboutContent: 'الساقي هي شركة رائدة في مجال الحلول المالية الإلكترونية في المملكة العربية السعودية، تأسست عام 2018 بهدف تسهيل المعاملات المالية للأفراد والشركات. نقدم خدمات متكاملة تشمل بطاقات الدفع الإلكترونية، وأجهزة نقاط البيع، وحلول الدفع عبر الإنترنت، مع التركيز على الأمان والسرعة وسهولة الاستخدام.',
    
    // FAQ section
    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'إجابات لأكثر الأسئلة شيوعاً',
    
    // Contact form
    contactTitle: 'اتصل بنا',
    contactSubtitle: 'نحن هنا للإجابة على استفساراتك',
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    message: 'الرسالة',
    send: 'إرسال',
    
    // Footer
    rights: 'جميع الحقوق محفوظة',
    privacyPolicy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
  },
  en: {
    // Navigation
    home: 'Home',
    features: 'Features',
    cards: 'Cards',
    pos: 'POS',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    download: 'Download App',
    companyName: 'Al-Saqi',
    
    // Hero section
    heroTitle: 'Electronic Payment Solutions',
    heroSubtitle: 'Reliable and Fast',
    heroDescription: 'Join thousands of merchants and customers who trust us to manage their financial transactions smoothly and securely.',
    downloadApp: 'Download App',
    learnMore: 'Learn More',
    
    // Stats
    activeClients: 'Active Clients',
    registeredMerchants: 'Registered Merchants',
    uptime: 'Uptime',
    support: 'Support',
    
    // Features section
    featuresTitle: 'Our Features',
    featuresSubtitle: 'Comprehensive financial services for your needs',
    securePayments: 'Secure Payments',
    securePaymentsDesc: 'High-level protection for all transactions and personal data',
    instantTransactions: 'Instant Transactions',
    instantTransactionsDesc: 'Execute payments in seconds without any delay',
    lowFees: 'Low Fees',
    lowFeesDesc: 'Competitive prices and low transaction fees for all operations',
    support24: '24/7 Support',
    support24Desc: 'Support team available around the clock to help when needed',
    
    // Card section
    cardTitle: 'Payment Cards',
    cardSubtitle: 'Innovative Financial Solutions',
    cardFeatures: 'Card Features',
    secureChip: 'Secure Chip',
    worldwideAcceptance: 'Worldwide Acceptance',
    internetPurchases: 'Internet Purchases',
    instantNotifications: 'Instant Notifications',
    
    // POS section
    posTitle: 'POS Devices',
    posSubtitle: 'Advanced technology for smooth transactions',
    fastPayment: 'Fast Payment',
    portableDevices: 'Portable Devices',
    easyIntegration: 'Easy Integration',
    detailedReports: 'Detailed Reports',
    
    // About section
    aboutTitle: 'About Al Saqi',
    aboutContent: 'Al Saqi is a leading company in the field of electronic financial solutions in Saudi Arabia, established in 2018 with the aim of facilitating financial transactions for individuals and companies. We provide integrated services including electronic payment cards, point of sale devices, and online payment solutions, with a focus on security, speed, and ease of use.',
    
    // FAQ section
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Answers to the most common questions',
    
    // Contact form
    contactTitle: 'Contact Us',
    contactSubtitle: 'We are here to answer your inquiries',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send',
    
    // Footer
    rights: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('ar');
  const isRTL = language === 'ar';

  // Update document direction and language attribute
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', language);
    html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    
    // You can also add class for specific language-based styling if needed
    if (isRTL) {
      html.classList.add('rtl');
      html.classList.remove('ltr');
    } else {
      html.classList.add('ltr');
      html.classList.remove('rtl');
    }
  }, [language, isRTL]);

  const value = {
    language,
    setLanguage,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}