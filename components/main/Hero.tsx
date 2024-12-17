import React from "react";
import HeroContent from "../sub/HeroContent";
import Experience from "./Experience";

const Hero = () => {
  return (
    <div className="relative flex-col w-full h-full">
      {/* <video
        src=""
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] w-full h-full object-cover"
      >
        <source />
      </video> */}
      <HeroContent />
      <Experience />
    </div>
  );
};

export default Hero;
