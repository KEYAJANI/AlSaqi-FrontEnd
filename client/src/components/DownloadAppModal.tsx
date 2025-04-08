import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage, translations } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import qrcode from "@assets/qrcode.png"
interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadAppModal({
  isOpen,
  onClose,
}: DownloadAppModalProps) {
  const { language, isRTL } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-md rounded-lg"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {language === "ar" ? "تطبيق الساقي" : "Al-Saqi App"}
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            {language === "ar"
              ? "قم بتنزيل تطبيقنا للوصول إلى جميع خدماتنا المالية والمدفوعات على جهازك المحمول"
              : "Download our app to access all our financial and payment services on your mobile device"}
          </DialogDescription>
        </DialogHeader>

        {/* App stores links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
          {/* App Store / iOS */}
          <motion.a
            href="https://app.alsaqi.net/apple"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className=" rounded-xl w-12 h-12 flex items-center justify-center text-white">
              <img
                src="https://www.vectorlogo.zone/logos/apple/apple-icon.svg"
                alt="App Store Logo"
                className="w-8 h-8"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600">
                {language === "ar" ? "تحميل على" : "Download on"}
              </div>
              <div className="font-semibold">App Store</div>
            </div>
          </motion.a>

          {/* Play Store / Android */}
          <motion.a
            href="https://app.alsaqi.net/android"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className=" rounded-xl w-12 h-12 flex items-center justify-center text-white">
              <img
                src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg"
                alt="Google Play Logo"
                className="w-8 h-8"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600">
                {language === "ar" ? "احصل عليه على" : "Get it on"}
              </div>
              <div className="font-semibold">Google Play</div>
            </div>
          </motion.a>
        </div>

        {/* QR code for download (placeholder) */}
        <div className="mx-auto p-4 bg-gray-50 rounded-lg w-48 h-48 flex items-center justify-center">
          <div className="bg-white p-2 rounded">
            <img src={qrcode} alt="qrcode" />
          </div>
        </div>

        <p className="text-sm text-center text-gray-500 mt-3">
          {language === "ar"
            ? "امسح رمز الاستجابة السريعة أعلاه للوصول إلى تطبيق الساقي"
            : "Scan the QR code above to access the Al-Saqi app"}
        </p>

        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-center sm:space-x-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            {language === "ar" ? "إغلاق" : "Close"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
