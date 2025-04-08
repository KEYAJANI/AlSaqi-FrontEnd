import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { LocationIcon, PhoneIcon, EmailIcon } from "@/lib/icons";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useQueryClient } from "@tanstack/react-query";
import { useLanguage, translations } from "@/contexts/LanguageContext";

const contactSchemaAr = z.object({
  name: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
  email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
  phone: z
    .string()
    .min(10, { message: "رقم الهاتف يجب أن يكون 10 أرقام على الأقل" }),
  message: z
    .string()
    .min(10, { message: "الرسالة يجب أن تكون 10 أحرف على الأقل" }),
});

const contactSchemaEn = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchemaAr>;

interface ContactInfoItem {
  icon: JSX.Element;
  title: string;
  details: (string | JSX.Element)[];
}

interface ContactInfoData {
  ar: ContactInfoItem[];
  en: ContactInfoItem[];
}

const contactInfo: ContactInfoData = {
  ar: [
    {
      icon: <LocationIcon />,
      title: "العنوان",
      details: ["بغداد، الكرادة، قرب شارع الواثق"],
    },
    {
      icon: <PhoneIcon />,
      title: "اتصل بنا",
      details: ["7787"],
    },
    {
      icon: <EmailIcon />,
      title: "البريد الإلكتروني",
      details: ["info@alsaqi.iq"],
    },
  ],
  en: [
    {
      icon: <LocationIcon />,
      title: "Address",
      details: ["Baghdad, Al-Karada, Watheq ST"],
    },
    {
      icon: <PhoneIcon />,
      title: "Call Us",
      details: ["7787"],
    },
    {
      icon: <EmailIcon />,
      title: "Email",
      details: ["info@alsaqi.iq"],
    },
  ],
};

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { language, isRTL } = useLanguage();

  // Select the appropriate schema based on language
  const schema = language === "ar" ? contactSchemaAr : contactSchemaEn;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xqapgqbk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // You can show a success toast or message here
        toast({
          variant: "default", // or you can omit variant for normal toast
          title: language === "ar" ? "تم الإرسال" : "Success",
          description: language === "ar"
            ? "تم إرسال الرسالة بنجاح!"
            : "Message sent successfully!",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: language === "ar" ? "خطأ" : "Error",
          description: language === "ar"
            ? "حدث خطأ أثناء الإرسال."
            : "Something went wrong while sending.",
        });
      }
    } catch (error) {
      console.error("Form error:", error);
      toast({
        variant: "destructive",
        title: language === "ar" ? "خطأ" : "Error",
        description: language === "ar"
          ? "فشل في الاتصال بالخادم."
          : "Failed to connect to server.",
      });
    }
  };

  return (
    <section
      className="py-24 bg-white"
      dir={isRTL ? "rtl" : "ltr"}
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations[language].contactTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations[language].contactSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo[language].map((info, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center bg-primary/10 text-primary w-14 h-14 rounded-full mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {language === "ar" ? "أرسل لنا رسالة" : "Send us a message"}
          </h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        {translations[language].fullName}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            language === "ar"
                              ? "أدخل اسمك الكامل"
                              : "Enter your full name"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        {translations[language].email}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            language === "ar"
                              ? "أدخل بريدك الإلكتروني"
                              : "Enter your email address"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      {language === "ar" ? "رقم الهاتف" : "Phone Number"}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={
                          language === "ar"
                            ? "أدخل رقم هاتفك"
                            : "Enter your phone number"
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      {translations[language].message}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={
                          language === "ar"
                            ? "اكتب رسالتك هنا"
                            : "Write your message here"
                        }
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto px-8"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting
                  ? language === "ar"
                    ? "جاري الإرسال..."
                    : "Sending..."
                  : language === "ar"
                    ? "إرسال الرسالة"
                    : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>

        {/* Google Maps Embed with Company Info */}
        <div className="relative mt-16">
          {/* Company Info Card - Displayed on top of the map */}
          <div
            className={`absolute top-5 ${isRTL ? "right-5" : "left-5"} z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 max-w-xs`}
          >
            <h4 className="font-semibold text-lg mb-1">
              {language === "ar"
                ? "شركة الساقي لخدمات الدفع الإلكتروني"
                : "Al-Saqi Electronic Payment Services"}
            </h4>
            <p className="text-gray-600 text-sm mb-2">
              8C7J+9M7, Baghdad, Baghdad Governorate
            </p>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span
                className={`text-gray-600 text-sm ${isRTL ? "mr-2" : "ml-2"}`}
              >
                5.0 ({language === "ar" ? "4 تقييمات" : "4 reviews"})
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.google.com/maps?q=33.31353551280457,44.431582134342186"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm hover:underline"
              >
                {language === "ar" ? "عرض خريطة أكبر" : "View larger map"}
              </a>

              <div className="flex flex-wrap gap-3">
                {/* Directions button */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=33.31353551280457,44.431582134342186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 text-sm"
                >
                  {isRTL ? (
                    <>
                      {language === "ar" ? "الاتجاهات" : "Directions"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 ms-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.707 5.293a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L5.414 11H17a1 1 0 100-2H5.414l2.293-2.293a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {language === "ar" ? "الاتجاهات" : "Directions"}
                    </>
                  )}
                </a>

                {/* Save button */}
                <a
                  href="https://www.google.com/maps/save?q=33.31353551280457,44.431582134342186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 text-sm"
                >
                  {isRTL ? (
                    <>
                      {language === "ar" ? "حفظ" : "Save"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ms-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                      {language === "ar" ? "حفظ" : "Save"}
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>

          {/* Map iframe */}
          <div className="rounded-xl overflow-hidden h-[550px] border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.112292448232!2d44.43158213434218!3d33.31353551280457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzQ4LjciTiA0NMKwMjUnNTMuNyJF!5e0!3m2!1sen!2sus!4v1712690331452!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al-Saqi Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
