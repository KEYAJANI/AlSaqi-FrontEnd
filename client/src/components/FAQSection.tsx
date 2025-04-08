import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { ChatIcon } from "@/lib/icons";
import { useLanguage, translations } from "@/contexts/LanguageContext";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  ar: FAQItem[];
  en: FAQItem[];
}

const faqData: FAQData = {
  ar: [
    {
      question: "كيف يمكنني الحصول على بطاقة الساقي؟",
      answer: ` :للحصول على بطاقة الساقي يرجى زيارة احد الافرع في المحافظات التالية
بغداد – شارع العرصات الرئيسي - سادس شارع علي اليمين - بناية اسياسيل الطابق الأول
كربلاء - حي الحسين - قرب مول العفاف – مركز الساقي للدفع الالكتروني
النجف - الحنانة - شارع كوفة نجف - مقابل راشي الطاحونة
الديوانية - العروبة - قرب فلكة مستشفى الولادة
كركوك – مديرية مرور كركوك العامة – بالقرب من مسبح كركوك ستي
البصرة – مديرية مرور الزبير
بابل - مديرية مرور بابل (معمل تسجيل المركبات ) ابو خستاوي
`,
    },
    {
      question: "هل يمكن استخدام بطاقة الساقي خارج العراق؟",
      answer:
        "الحركات الدولية حاليا ً متوقفة ستعاود هذه الخدمة العمل قريباً ان شاء الله",
    },
    {
      question: "هل يمكن تعبئة المبلغ بالبطاقة من قبل اي منفذ غير الساقي",
      answer:
        "يمكن تعبئة الرصيد في البطاقة من خلال مراكزنا الخاصة أو عبر أحد وكلائنا المعتمدين. لمعرفة أقرب مركز أو وكيل معتمد، يمكنك مراسلتنا عبر الرسائل الخاصة، وسنكون سعداء بمساعدتك",
    },
    {
      question: "كيف يمكنني شحن رصيد البطاقة؟",
      answer:
        "يمكنك شحن رصيد بطاقة الساقي بعدة طرق: من خلال تطبيق الهاتف المحمول، عبر نقاط البيع المعتمدة، من خلال التحويل المصرفي، أو عن طريق وكلاء الساقي المنتشرين في جميع أنحاء العراق.",
    },
    {
      question: "ما هي إجراءات الأمان المتبعة لحماية معاملاتي؟",
      answer:
        "نطبق أحدث معايير الأمان العالمية لحماية معاملاتك، بما في ذلك المصادقة الثنائية للمعاملات عبر الإنترنت، تشفير البيانات، مراقبة المعاملات على مدار الساعة، وإشعارات فورية لكل معاملة.",
    },
    {
      question: "كيف يمكنني التقدم بطلب للحصول على جهاز نقاط بيع؟",
      answer:
        "يمكنك التقدم بطلب للحصول على جهاز نقاط بيع من خلال عن طريق وكلاء الساقي المنتشرين في جميع أنحاء العراق.",
    },
    {
      question: "هل هناك رسوم شهرية لاستخدام أجهزة نقاط البيع؟",
      answer:
        "نقدم خطط مختلفة لأجهزة نقاط البيع تناسب احتياجات المتاجر المختلفة. بعض الخطط تتضمن رسوم شهرية منخفضة مع عمولة أقل على المعاملات، وخطط أخرى بدون رسوم شهرية مع عمولة أعلى قليلاً.",
    },
  ],
  en: [
    {
      question: "How can I get the Al-Saqi card?",
      answer: `To get the Al-Saqi card, please visit one of our branches in the following provinces:
  Baghdad – Al-Arasat Main Street – Sixth Street on the right – Asiacell Building, First Floor
  Karbala – Al-Hussein neighborhood – Near Al-Afaf Mall – Al-Saqi Electronic Payment Center
  Najaf – Al-Hanana – Kufa-Najaf Street – Opposite Rashey Al-Tahouna
  Diwaniyah – Al-Orouba – Near the Maternity Hospital roundabout
  Kirkuk – Kirkuk General Traffic Directorate – Near Kirkuk City Swimming Pool
  Basra – Zubair Traffic Directorate
  Babel – Babel Traffic Directorate (Vehicle Registration Factory) – Abu Khastawi`,
    },
    {
      question: "Can the Al-Saqi card be used outside Iraq?",
      answer:
        "International transactions are currently suspended. This service will resume soon, God willing.",
    },
    {
      question: "Can I top up the card from any outlet other than Al-Saqi?",
      answer:
        "You can top up the card balance through our official centers or one of our authorized agents. To find the nearest center or agent, please message us directly and we’ll be happy to assist you.",
    },
    {
      question: "How can I recharge my card balance?",
      answer:
        "You can recharge your Al-Saqi card in several ways: through the mobile app, via authorized point-of-sale locations, bank transfers, or through Al-Saqi agents spread across Iraq.",
    },
    {
      question:
        "What security measures are in place to protect my transactions?",
      answer:
        "We implement the latest global security standards to protect your transactions, including two-factor authentication for online transactions, data encryption, 24/7 transaction monitoring, and instant notifications for every transaction.",
    },
    {
      question: "How can I apply for a POS (Point-of-Sale) device?",
      answer:
        "You can apply for a POS device through our authorized agents located throughout Iraq.",
    },
    {
      question: "Are there monthly fees for using POS devices?",
      answer:
        "We offer different POS device plans to suit various business needs. Some plans include low monthly fees with lower transaction commissions, while others have no monthly fees but slightly higher commissions.",
    },
  ],
};

export default function FAQSection() {
  const { language, isRTL } = useLanguage();

  return (
    <section className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"} id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations[language].faqTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations[language].faqSubtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData[language].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger
                  className={`px-6 py-4 ${isRTL ? "text-right" : "text-left"} font-semibold text-gray-900 hover:text-primary`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {language === "ar"
              ? "ألم تجد إجابة على سؤالك؟ تواصل مع فريق خدمة العملاء"
              : "Didn't find an answer to your question? Contact our customer service team"}
          </p>
          <Button className="rounded-full" variant="outline" size="lg">
            <a className="flex align-center" href="#contact">
              <ChatIcon />
              <span className={isRTL ? "mr-2" : "ml-2"}>
                {language === "ar" ? "تحدث معنا الآن" : "Chat with us now"}
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
