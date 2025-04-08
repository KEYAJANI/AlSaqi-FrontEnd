import React, { useState, useEffect } from "react";
import phonePosImg from "@assets/phonepospng.png";

const PhonePos: React.FC<{ className?: string }> = ({
  className = "w-full h-auto",
}) => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsPhone(window.innerWidth <= 768); // typical breakpoint for tablet/phone
    };

    checkDevice(); // Check on mount
    window.addEventListener("resize", checkDevice); // Update on resize

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className={`relative ${className} flex justify-center items-center`}>
      <img
        src={phonePosImg}
        alt="Al Saqi POS Device"
        className={`w-full max-w-md md:max-w-xl object-contain z-10 drop-shadow-2xl  ${isPhone ? "scale-125" : "xl:scale-150" }  transform mx-auto  `}
      />

      {/* Decorative effect */}
      <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-white/5 blur-xl" />
    </div>
  );
};

export default PhonePos;
