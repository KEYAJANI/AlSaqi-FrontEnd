import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CheckIcon } from "@/lib/icons";
import { useLanguage, translations } from "@/contexts/LanguageContext";
import SaqiCard from "@/assets/SaqiCard";
import DownloadAppModal from "./DownloadAppModal";

interface CardFeatures {
  ar: string[];
  en: string[];
}

const cardFeatures: CardFeatures = {
  ar: [
    "سهولة الاستخدام والقبول العالمي",
    "تقنيات التلامس وغير التلامس",
    "تتبع المعاملات عبر تطبيق الهاتف",
    "إمكانية نقل الأموال بين البطاقات",
    "صالحة في أكثر من 200 دولة",
    "خصومات في المتاجر الشريكة",
  ],
  en: [
    "Easy to use with global acceptance",
    "Contact and contactless technologies",
    "Track transactions via mobile app",
    "Transfer money between cards",
    "Valid in over 200 countries",
    "Discounts at partner stores",
  ],
};

export default function CardSection() {
  const { language, isRTL } = useLanguage();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <section
      className="py-24 bg-white overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
      id="cards"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations[language].cardTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations[language].cardSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Card Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/20 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden transition-all duration-300 transform hover:rotate-y-12 animate-float">
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />

              <div className="perspective-1000">
                {/* Card element */}
                <div className="relative  transition-all duration-300 transform hover:rotate-y-12 animate-float">
                  <SaqiCard />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card Description */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {isRTL ? "فيزا الساقي" : "Al-Saqi Visa"}
            </span>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {translations[language].cardTitle}
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              {language === "ar"
                ? "بطاقة الساقي تتضمنُ جميعَ المزايا التي تقدمها فيزا منْ حيثُ سهولةُ الاستخدامِ، والقبولُ العالميُ، ومعاييرُ الأمانِ العاليةِ. دونُ الحاجةِ إلى خبرةٍ مسبقةٍ في التعاملِ معَ البنوكِ، تستخدمَ البطاقةُ تقنياتِ التلامسِ وغيرِ التلامسِ، متصلةً بتطبيقِ الهاتفِ النقالِ لتتبعِ المعاملاتِ الماليةِ."
                : "Al-Saqi card includes all the benefits offered by Visa in terms of ease of use, global acceptance, and high security standards. Without the need for prior experience in dealing with banks, the card uses contact and contactless technologies, connected to a mobile application to track financial transactions."}
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-5 mb-8">
              {cardFeatures[language].map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start">
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
                {language === "ar" ? "اطلب البطاقة الآن" : "Order Card Now"}
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
                {language === "ar" ? "معرفة المزيد" : "Learn More"}
              </Button>
            </div>

            {/* Download App Modal */}
            <DownloadAppModal
              isOpen={isDownloadModalOpen}
              onClose={() => setIsDownloadModalOpen(false)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
