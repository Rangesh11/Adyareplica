import React from 'react';
import Showdemo from './Showdemo';
import finalbg from '../assets/Finalcompoentbg.webp';

const Finaldetail = () => {
  return (
    <div className="relative flex flex-col gap-5 items-center justify-center text-center px-0 py-10 w-screen max-w-none h-[550px]">
      {/* Background image behind content */}
      <img
        src={finalbg}
        alt="background"
        className="absolute left-0 bottom-0 w-full h-full max-w-none z-0 pointer-events-none select-none object-cover"
      />
      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-5 items-center w-full">
        <p className="text-[29px] md:text-[44px] font-medium leading-[110%] font-[Manrope] bg-gradient-to-r from-white via-white to-[#428CFC] bg-clip-text text-transparent pb-2">
          Ready to put AI to work for your business?
        </p>
        <Showdemo />
      </div>
    </div>
  );
};

export default Finaldetail;