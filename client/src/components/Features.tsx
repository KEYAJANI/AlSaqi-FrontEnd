import React from 'react';
import { motion } from 'framer-motion';
import { LockIcon, LightningIcon, ShieldIcon, ArrowIcon } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/contexts/LanguageContext';

const features = [
  {
    icon: <LightningIcon />,
    title: 'سرعة المعاملات',
    description: 'إتمام عمليات الدفع في ثوانٍ معدودة بفضل التكنولوجيا المتطورة',
  },
  {
    icon: <ShieldIcon />,
    title: 'أمان عالي المستوى',
    description: 'حماية بيانات العملاء والتجار بأحدث تقنيات التشفير والأمان',
  },
  {
    icon: <LockIcon />,
    title: 'تكامل سلس',
    description: 'سهولة التكامل مع أنظمة نقاط البيع والمتاجر الإلكترونية',
  },
  {
    icon: <ArrowIcon />,
    title: 'خدمة عملاء متميزة',
    description: 'فريق دعم فني متخصص متاح على مدار الساعة لمساعدتك',
  },
];

export default function Features() {
  const { language, isRTL } = useLanguage();
  
  const features = [
    {
      icon: <LightningIcon />,
      title: translations[language].instantTransactions,
      description: translations[language].instantTransactionsDesc,
    },
    {
      icon: <ShieldIcon />,
      title: translations[language].securePayments,
      description: translations[language].securePaymentsDesc,
    },
    {
      icon: <LockIcon />,
      title: translations[language].lowFees,
      description: translations[language].lowFeesDesc,
    },
    {
      icon: <ArrowIcon />,
      title: translations[language].support24,
      description: translations[language].support24Desc,
    },
  ];
  
  return (
    <section 
      className="py-24 bg-gray-50" 
      dir={isRTL ? "rtl" : "ltr"} 
      id="features"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" id="features-title">{translations[language].featuresTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations[language].featuresSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" id={`feature-${index + 1}`}>{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#cards" 
            className={`inline-flex items-center text-primary hover:text-primary/80 font-medium ${isRTL ? '' : 'flex-row-reverse'}`}
          >
            <span className={isRTL ? "ml-2" : "mr-2"}>{translations[language].cards}</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}