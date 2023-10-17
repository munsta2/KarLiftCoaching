import React from 'react';
import logoImage from  './logo-color.svg';

const Logo = () => {
  return (
    <div className="w-full h-72 flex justify-center overflow-hidden">
      <img src={logoImage} alt="Logo" className="w-full h-full object-cover" />
    </div>
  );
};

export default Logo;
