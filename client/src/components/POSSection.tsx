import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CheckIcon } from "@/lib/icons";
import SaqiPOS from "@/assets/SaqiPOS";
import { useLanguage, translations } from "@/contexts/LanguageContext";
import DownloadAppModal from "./DownloadAppModal";

interface POSFeatures {
  ar: string[];
  en: string[];
}

const posFeatures: POSFeatures = {
  ar: [
    "أجهزة نقاط بيع متوافقة مع جميع أنواع البطاقات",
    "تجربة استخدام سهلة وبسيطة للتجار والعملاء",
    "دعم للدفع اللاتلامسي والدفع عبر الهاتف المحمول",
    "طباعة إيصالات فورية وإرسال نسخ إلكترونية",
    "تحديثات برمجية منتظمة وتلقائية",
    "تكامل مع أنظمة المحاسبة وإدارة المخزون",
  ],
  en: [
    "POS devices compatible with all types of cards",
    "Easy and simple user experience for merchants and customers",
    "Support for contactless and mobile payments",
    "Instant receipt printing and electronic copies",
    "Regular and automatic software updates",
    "Integration with accounting and inventory management systems",
  ],
};

export default function POSSection() {
  const { language, isRTL } = useLanguage();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsPhone(window.innerWidth <= 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);
  return (
    <section className="py-24 bg-gray-50" dir={isRTL ? "rtl" : "ltr"} id="pos">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {translations[language].posTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "ar" ? (
                <>
                  حلول مدفوعات متكاملة
                  <br />
                  <span className="text-primary">لتنمية أعمالك</span>
                </>
              ) : (
                <>
                  Integrated Payment Solutions
                  <br />
                  <span className="text-primary">For Your Business Growth</span>
                </>
              )}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {language === "ar"
                ? "نقدم أحدث أجهزة نقاط البيع المتوافقة مع المعايير العالمية وتقنيات الدفع الحديثة. استفد من حلولنا المتكاملة لتحسين تجربة عملائك وزيادة مبيعاتك."
                : "We offer the latest POS devices compatible with global standards and modern payment technologies. Take advantage of our integrated solutions to improve your customer experience and increase your sales."}
            </p>

            <div className="space-y-4 mb-10">
              {posFeatures[language].map((feature: string, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary shrink-0 mt-1">
                    <CheckIcon />
                  </div>
                  <p className={`${isRTL ? "mr-3" : "ml-3"} text-gray-700`}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                {language === "ar" ? "طلب جهاز نقاط بيع" : "Order POS Device"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {language === "ar" ? "التواصل مع المبيعات" : "Contact Sales"}
              </Button>
            </div>

            {/* Download App Modal */}
            <DownloadAppModal
              isOpen={isDownloadModalOpen}
              onClose={() => setIsDownloadModalOpen(false)}
            />
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-primary/5 to-primary/20 rounded-3xl p-8 w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />

              {/* POS device mockup */}
              <div className="relative z-10 transform hover:rotate-3 transition-transform duration-300">
                <SaqiPOS />
              </div>

              {/* Stats / Callout */}
              <div
                className={`
                  bg-white rounded-lg p-4 shadow-lg absolute z-20
                  ${isPhone ? "bottom-[-2.5rem]" : "bottom-10"}
                  ${
                    isRTL
                      ? isPhone
                        ? "left-[40px]"
                        : "left-0 transform -translate-x-1/4"
                      : isPhone
                        ? "right-[40px]"
                        : "right-0 transform translate-x-1/4"
                  }
                `}
              >
                <p className="text-sm text-gray-500 mb-1">
                  {isRTL ? "معدل نمو المبيعات" : "Sales Growth Rate"}
                </p>
                <p className="text-xl font-bold text-primary">+32%</p>
                <div className="w-full h-1 bg-gray-100 mt-2">
                  <div className="w-8/12 h-1 bg-primary"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
