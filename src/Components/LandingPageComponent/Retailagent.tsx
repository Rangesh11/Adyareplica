import RetailIamge from '../../assets/Retal-market.png';
import retailleftbg from '../../assets/retailleftbg.png';
import retairightbg from '../../assets/retailrightbg.png';
import retailcenterbg from '../../assets/retailcenterbg.png';

const Retailagent = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-12">
      {/* Right center background */}
      <img
        src={retairightbg}
        alt="right-bg"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[600px] max-w-none pointer-events-none select-none z-0"
      />
      {/* Left bottom background */}
      <img
        src={retailleftbg}
        alt="left-bg"
        className="hidden md:block absolute left-44 bottom-0 w-[1000px] max-w-none pointer-events-none select-none z-0"
      />
      {/* Center background behind main image */}
      <img
        src={retailcenterbg}
        alt="center-bg"
        className="hidden md:block absolute left-72 top-[1100px] -translate-x-1/2 -translate-y-1/2 w-[1000px] max-w-none pointer-events-none select-none z-0"
      />
      {/* Main retail image */}
      <img
        src={RetailIamge}
        alt="Retail Market"
        className="relative w-full max-w-5xl rounded-xl shadow-lg z-10"
      />
    </div>
  );
};

export default Retailagent;
