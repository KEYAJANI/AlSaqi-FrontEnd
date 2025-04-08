import React from 'react';
import alsaqiWhiteLogoImage from '@assets/alsaqiwhitelogo.png';

const AlSaqiWhiteLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <img 
      src={alsaqiWhiteLogoImage} 
      alt="Al Saqi Logo" 
      className={className}
    />
  );
};

export default AlSaqiWhiteLogo;