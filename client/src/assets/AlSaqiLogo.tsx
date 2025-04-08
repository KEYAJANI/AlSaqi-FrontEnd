import React from 'react';
import alsaqiLogoImage from '@assets/466352477_443416908786523_6352200253943879374_n.png';

const AlSaqiLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <img 
      src={alsaqiLogoImage} 
      alt="Al Saqi Logo" 
      className={className}
    />
  );
};

export default AlSaqiLogo;