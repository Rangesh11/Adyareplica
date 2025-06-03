import type { LucideIcon } from "lucide-react";

interface StudioProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const Studio = ({ title, description, icon: Icon }: StudioProps) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between bg-gradient-to-b from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] w-full max-w-[1170px] h-auto md:h-[220px] p-4 sm:p-6 md:p-8 rounded-[14px] transition-transform duration-300 hover:scale-[1.05]">
      {/* Mobile layout */}
      <div className="flex flex-row w-full md:hidden">
        {/* Left: title (top), desc (bottom) */}
        <div className="flex flex-col flex-1 justify-between">
          <h3 className="text-[18px] sm:text-[22px] font-semibold text-white mb-1 leading-tight">
            {title}
          </h3>
          <p className="text-white font-nunito text-[12px] sm:text-[14px] font-normal leading-[18px] mt-1">
            {description}
          </p>
        </div>
        {/* Right: logo (top), next (bottom) */}
        <div className="flex flex-col items-center justify-between ml-3 min-w-[48px]">
          <div className="flex flex-col items-center">
            <Icon className="w-[40px] h-[40px] text-white mb-2" />
          </div>
          <button
            type="button"
            className="mt-2 rounded-full bg-white/10 hover:bg-white/20 p-2 transition"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-arrow-right"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="m12 16 4-4-4-4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-row items-center justify-between w-full h-full">
        {/* Left Heading */}
        <h3 className="md:text-[36px] lg:text-[42px] xl:text-[54px] font-medium self-end leading-[54px] text-white">
          {title}
        </h3>
        {/* Right side container */}
        <div className="flex flex-row items-center gap-8 md:w-[450px]">
          {/* Description */}
          <p className="text-white font-nunito text-[12px] lg:text-[14px] xl:text-base font-medium md:w-[350px] md:place-self-end leading-[18px] lg:leading-[22px]">
            {description}
          </p>
          {/* Icons container */}
          <div className="flex flex-col justify-between items-center h-full md:h-[160px]">
            <Icon className="w-[40px] h-[38px] text-white" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-arrow-right"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="m12 16 4-4-4-4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
