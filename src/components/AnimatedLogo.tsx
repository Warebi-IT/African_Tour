import React from "react";
import logo from "@/assets/logo.png";

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = "" }) => {
  return (
    <img
      src={logo}
      alt="African Tour"
      className={`object-contain transition-transform duration-500 hover:scale-105 ${className}`}
    />
  );
};

export default AnimatedLogo;
