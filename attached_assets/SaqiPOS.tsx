import React from 'react';
import saqiPOSImage from '@assets/Al-saqi-POS-2.png';

const SaqiPOS: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => {
  return (
    <div className={`relative ${className} flex justify-center`}>
      <img 
        src={saqiPOSImage} 
        alt="Al Saqi POS Device" 
        className="w-full max-w-md object-contain z-10 drop-shadow-2xl"
      />
      
      {/* Decorative effect */}
      <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-primary/5 blur-xl" />
    </div>
  );
};

export default SaqiPOS;