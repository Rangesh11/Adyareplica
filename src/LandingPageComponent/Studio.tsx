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
        {/* Left side: title (top), desc (bottom) */}
        <div className="flex flex-col flex-1 justify-between">
          <h3 className="text-[20px] sm:text-[28px] font-medium text-white mb-2">
            {title}
          </h3>
          <p className="text-white font-nunito text-[11px] sm:text-[13px] font-medium leading-[16px]">
            {description}
          </p>
        </div>
        {/* Right side: logo (top), next (bottom) */}
        <div className="flex flex-col items-center justify-between ml-4">
          <Icon className="w-[36px] h-[36px] text-white mb-4" />
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
