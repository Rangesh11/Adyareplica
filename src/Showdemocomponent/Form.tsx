import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react"; // Lucide icon

const Form = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/"); // Redirect to default/home page
  };

  return (
    <div className="relative flex items-center justify-center p-6 md:p-12 w-full h-full">
      {/* Exit icon at top right */}
      <button
        type="button"
        onClick={handleExit}
        className="absolute top-4 right-4 z-20"
        aria-label="Exit"
      >
        <X className="w-8 h-8 text-[#353535]" />
      </button>
      <form className="w-full max-w-xl space-y-6">
        <h1 className="font-manrope font-semibold md:font-medium text-[28px] md:text-[35px] xl:text-[42px] leading-snug md:leading-tight text-[#000000] md:text-[#353535] tracking-tight text-center">
          Register below for a Demo
        </h1>

        {/* Full Name */}
        <div>
          <label className="block text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full border border-[#9A9A9A99] text-[#353535] rounded-[10px] md:rounded-[12px] xl:rounded-[14px] px-2 py-1.5 text-base shadow-[0px_1.16px_2.31px_0px_#0000000D] focus:outline-[#9A9A9A] h-[36px] md:h-[40px] xl:h-[44px] font-inter font-medium"
          />
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Work Email
          </label>
          <input
            type="email"
            className="w-full border border-[#9A9A9A99] text-[#353535] rounded-[10px] md:rounded-[12px] xl:rounded-[14px] px-2 py-1.5 text-base shadow-[0px_1.16px_2.31px_0px_#0000000D] focus:outline-[#9A9A9A] h-[36px] md:h-[40px] xl:h-[44px] font-inter font-medium"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full border border-[#9A9A9A99] text-[#353535] rounded-[10px] md:rounded-[12px] xl:rounded-[14px] px-2 py-1.5 text-base shadow-[0px_1.16px_2.31px_0px_#0000000D] focus:outline-[#9A9A9A] h-[36px] md:h-[40px] xl:h-[44px] font-inter font-medium"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Company Name
          </label>
          <input
            type="text"
            className="w-full border border-[#9A9A9A99] text-[#353535] rounded-[10px] md:rounded-[12px] xl:rounded-[14px] px-2 py-1.5 text-base shadow-[0px_1.16px_2.31px_0px_#0000000D] focus:outline-[#9A9A9A] h-[36px] md:h-[40px] xl:h-[44px] font-inter font-medium"
          />
        </div>

        {/* Annual Revenue */}
        <div>
          <label className="block text-[#353535] opacity-60 text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Annual Revenue
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="font-semibold text-[11px] sm:text-[13px] rounded-[15px] py-3 px-5 font-inter whitespace-nowrap duration-300 bg-[#a0ff9c] text-[#367822] border border-[#a0ff9c] hover:bg-[#7be86e] focus:ring-2 focus:ring-[#428CFC]"
            >
              Less than $10M
            </button>
            <button
              type="button"
              className="font-semibold text-[11px] sm:text-[13px] rounded-[15px] py-3 px-5 font-inter whitespace-nowrap duration-300 bg-[#a0ff9c] text-[#367822] border border-[#a0ff9c] hover:bg-[#7be86e] focus:ring-2 focus:ring-[#428CFC]"
            >
              $10M - $500M
            </button>
            <button
              type="button"
              className="font-semibold text-[11px] sm:text-[13px] rounded-[15px] py-3 px-5 font-inter whitespace-nowrap duration-300 bg-[#a0ff9c] text-[#367822] border border-[#a0ff9c] hover:bg-[#7be86e] focus:ring-2 focus:ring-[#428CFC]"
            >
              $500M+
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#428CFC] hover:bg-[#427fc4] duration-300 rounded-[20px] text-white py-4 font-bold font-nunito max-sm:mx-[30px] max-sm:text-[15px]"
        >
          Schedule my demo
        </button>
      </form>
    </div>
  );
};

export default Form;
