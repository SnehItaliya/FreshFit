import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/*Hero Left Side */}
      {/*Hero Right Side */}
      <img className="w-full" src={assets.hero_img1} alt="" />
    </div>
  );
};

export default Hero;
