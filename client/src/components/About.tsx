import React from 'react';
import { motion } from 'framer-motion';
import AlSaqiLogo from '@/assets/AlSaqiLogo';
import { CircleCheckIcon, ClockIcon } from '@/lib/icons';
import { useLanguage, translations } from '@/contexts/LanguageContext';

interface Achievements {
  ar: Array<{ number: string; label: string }>;
  en: Array<{ number: string; label: string }>;
}

const achievements: Achievements = {
  ar: [
    { number: '10+', label: 'سنوات خبرة' },
    { number: '500K+', label: 'معاملة شهرية' },
    { number: '200+', label: 'تاجر شريك' },
    { number: '3', label: 'فروع رئيسية' },
  ],
  en: [
    { number: '10+', label: 'Years of Experience' },
    { number: '500K+', label: 'Monthly Transactions' },
    { number: '200+', label: 'Partner Merchants' },
    { number: '3', label: 'Main Branches' },
  ]
};

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface Timeline {
  ar: Array<TimelineItem>;
  en: Array<TimelineItem>;
}

const timeline: Timeline = {
  ar: [
    { 
      year: '2014', 
      title: 'تأسيس الساقي', 
      description: 'بدأت شركة الساقي كمشروع صغير لتقديم خدمات الدفع الإلكتروني في العراق' 
    },
    { 
      year: '2016', 
      title: 'إطلاق أول بطاقة', 
      description: 'أطلقنا أول بطاقة دفع إلكتروني متوافقة مع المعايير العالمية للسوق العراقي' 
    },
    { 
      year: '2018', 
      title: 'توسيع الخدمات', 
      description: 'توسعنا في تقديم خدمات نقاط البيع للتجار والمؤسسات المالية' 
    },
    { 
      year: '2020', 
      title: 'التحول الرقمي', 
      description: 'أطلقنا تطبيق الساقي للهواتف الذكية وخدمات الدفع الإلكتروني عبر الإنترنت' 
    },
    { 
      year: '2023', 
      title: 'شراكات عالمية', 
      description: 'أبرمنا شراكات استراتيجية مع شركات عالمية لتعزيز خدماتنا وتوسيع نطاق أعمالنا' 
    },
  ],
  en: [
    { 
      year: '2014', 
      title: 'Al-Saqi Founded', 
      description: 'Al-Saqi started as a small project providing electronic payment services in Iraq' 
    },
    { 
      year: '2016', 
      title: 'First Card Launch', 
      description: 'We launched our first electronic payment card compliant with global standards for the Iraqi market' 
    },
    { 
      year: '2018', 
      title: 'Service Expansion', 
      description: 'We expanded to provide POS services to merchants and financial institutions' 
    },
    { 
      year: '2020', 
      title: 'Digital Transformation', 
      description: 'We launched the Al-Saqi mobile app and online electronic payment services' 
    },
    { 
      year: '2023', 
      title: 'Global Partnerships', 
      description: 'We formed strategic partnerships with global companies to enhance our services and expand our business' 
    },
  ]
};

export default function About() {
  const { language, isRTL } = useLanguage();
  
  return (
    <section 
      className="py-24 bg-gray-50" 
      dir={isRTL ? "rtl" : "ltr"} 
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{translations[language].aboutTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'شركة رائدة في مجال المدفوعات الإلكترونية وحلول الدفع الرقمي في العراق'
              : 'A leading company in electronic payments and digital payment solutions in Iraq'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Vision and mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <AlSaqiLogo className="w-16 h-16" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{translations[language].companyName}</h3>
                <p className="text-primary">
                  {language === 'ar' 
                    ? 'حلول دفع إلكتروني موثوقة'
                    : 'Reliable electronic payment solutions'
                  }
                </p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
            </h4>
            <p className="text-gray-700 mb-6">
              {language === 'ar'
                ? 'نسعى لأن نكون الشركة الرائدة في مجال المدفوعات الإلكترونية في المنطقة، وتوفير حلول مالية مبتكرة تساهم في تحقيق التحول الرقمي في العراق والشرق الأوسط.'
                : 'We strive to be the leading company in electronic payments in the region, providing innovative financial solutions that contribute to achieving digital transformation in Iraq and the Middle East.'
              }
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
            </h4>
            <p className="text-gray-700 mb-6">
              {language === 'ar'
                ? 'تقديم خدمات دفع إلكتروني آمنة وموثوقة وسهلة الاستخدام لعملائنا، والمساهمة في بناء اقتصاد رقمي شامل من خلال الابتكار المستمر والتميز في خدمة العملاء.'
                : 'Providing secure, reliable, and easy-to-use electronic payment services to our customers, and contributing to building an inclusive digital economy through continuous innovation and excellence in customer service.'
              }
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {language === 'ar' ? 'قيمنا' : 'Our Values'}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <CircleCheckIcon />
                <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-gray-700`}>
                  {language === 'ar' ? 'الأمان والثقة' : 'Security & Trust'}
                </span>
              </div>
              <div className="flex items-center">
                <CircleCheckIcon />
                <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-gray-700`}>
                  {language === 'ar' ? 'الابتكار المستمر' : 'Continuous Innovation'}
                </span>
              </div>
              <div className="flex items-center">
                <CircleCheckIcon />
                <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-gray-700`}>
                  {language === 'ar' ? 'التميز في الخدمة' : 'Service Excellence'}
                </span>
              </div>
              <div className="flex items-center">
                <CircleCheckIcon />
                <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-gray-700`}>
                  {language === 'ar' ? 'الشمولية المالية' : 'Financial Inclusion'}
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements[language].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-primary text-4xl font-bold mb-2">{item.number}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            {language === 'ar' ? 'مسيرتنا' : 'Our Journey'}
          </h3>
          
          <div className={`relative ${isRTL ? 'border-r-2 pr-10' : 'border-l-2 pl-10'} border-primary/30`}>
            {timeline[language].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-10 relative"
              >
                <div className={`absolute ${isRTL ? 'right-[-41px]' : 'left-[-41px]'} top-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center`}>
                  <ClockIcon />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-primary font-bold mb-2">{item.year}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}