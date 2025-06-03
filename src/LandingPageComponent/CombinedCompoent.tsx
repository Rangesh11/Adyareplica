import React from "react";
import eye from '../assets/eye-logo.svg';
import Vanjivideo from "./Vanjivideo";
import CombineCompoentBgRight from "../assets/CombineCompoentbg-right.png";
import CombineCompoentbgLeft from "../assets/CombineCompoentbg-left.png";

const CombinedCompoent = () => {
  return (
    <div className="relative flex flex-col items-center gap-10 w-full py-10 overflow-hidden">
      {/* Backgrounds */}
      <img
        src={CombineCompoentBgRight}
        alt="bg-right"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] max-w-[420px] pointer-events-none select-none z-0"
      />
      <img
        src={CombineCompoentbgLeft}
        alt="bg-left"
        className="absolute left-0 bottom-0 w-[30vw] max-w-[320px] pointer-events-none select-none z-0"
      />

      {/* Main content */}
      <div className="w-full max-w-4xl flex flex-col items-center px-4 py-10 gap-10 z-10">
        <img src={eye} alt="eyelogo" className="w-32 h-32" />
        <p
          className="text-center font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] max-w-[720px] leading-tight"
          style={{
            background: 'linear-gradient(120deg, #ffffff 55.55%, #428cfc 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Discover a cutting-edge orchestration platform that empowers businesses to build and deploy
          customized AI Agents and enterprise apps in minutes.
        </p>
        <button className="bg-white text-black px-7 py-3 rounded-lg font-medium hover:opacity-90 transition">
          Check it out
        </button>
        <Vanjivideo />
      </div>
    </div>
  );
};

export default CombinedCompoent;
