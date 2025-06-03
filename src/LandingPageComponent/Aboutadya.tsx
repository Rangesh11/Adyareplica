
import about from '../assets/about.png';

import aboutbg from '../assets/Aboutadyabg.png';
import aboutrigth from '../assets/aboutadyaright.png'

const Aboutadya = () => {
  return (
    <div className="relative w-full max-w-[1500px] flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-32 px-4 py-12">
      {/* Left bottom background */}
      <img
        src={aboutbg}
        alt="about-bg"
        className="hidden md:block absolute left-0 bottom-0 w-[500px] max-w-[25vw] pointer-events-none select-none z-0"
      />
      {/* Right center background */}
      <img
        src={aboutrigth}
        alt="bgcoloraboutrigth"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] max-w-[30vw] pointer-events-none select-none z-0"
      />

      {/* Text Section */}
      <p className="w-full xl:w-[640px] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] font-medium bg-gradient-to-r from-white via-white to-[#428CFC] bg-clip-text text-transparent leading-tight text-center lg:text-left z-10">
        Adya is at the forefront of catalyzing the AI ecosystem for businesses. We have built the foundational layers of the emerging AI ecosystem.
      </p>

      {/* Image Section */}
      <div className="relative w-full max-w-[550px] h-[300px] md:h-[500px] flex items-center justify-center z-10 mb-6 md:mb-0">
        {/* Foreground image */}
        <img
          src={about}
          alt="About Adya"
          className="relative w-full h-full object-contain z-10"
        />
      </div>
    </div>
  );
};

export default Aboutadya;
