import React from "react";
import saqiCardImage from "@assets/alsaqi.png";

const SaqiCard: React.FC<{ className?: string }> = ({
  className = "w-full h-auto",
}) => {
  return (
    <div className={`relative ${className} flex justify-center`}>
      <img
        src={saqiCardImage}
        alt="Al Saqi Card"
        className="w-full h-auto rounded-2xl  shadow-xl"
      />

      {/* Shine effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -left-[100%] top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[30deg] animate-shine"></div>
      </div>
    </div>
  );
};

export default SaqiCard;
