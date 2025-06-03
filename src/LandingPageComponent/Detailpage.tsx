import Featurepage from './Featurepage';
import RetailAgent from './Retailagent';
import Studio from './Studio';
import { platforms } from '../Constant/Studiodata';
import Aboutadya from './Aboutadya';
import Finaldetail from './Finaldetail';
import Footer from './Footer';
import bgMagic from '../assets/studiobg.png';
import TrustedBy from './TrustedBy';
import CombinedCompoent from './CombinedCompoent';

const Detailpage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center gap-20 overflow-x-hidden">
      <CombinedCompoent />
      <Featurepage />
      <RetailAgent />
      <div className="w-full max-w-[1000px] flex flex-col items-center px-4 py-10 gap-10">
        <p
          className="text-center font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[35px] leading-tight"
          style={{
            background: 'linear-gradient(120deg, rgb(255, 255, 255) 55.55%, rgb(66, 140, 252) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          "Multiple Minds, One Mission:
          <br />
          Our proprietary Multi-Agent Framework enables
          <br />
          AI systems to collaborate, reason, and solve together.
          <br />
          The first step to true AGI."
        </p>
        <button className="bg-white text-black px-7 py-3 rounded-lg">
          Schedule Demo
        </button>
      </div>
      <div className="flex justify-center items-center px-4 py-10">
        <p
          className="text-[34px] sm:text-[40px] md:text-[47px] lg:text-[54px] xl:text-[60px] text-center leading-[38px] sm:leading-[42px] md:leading-[48px] lg:leading-[54px] xl:leading-[62px] font-medium z-[1]"
          style={{
            background: 'linear-gradient(108.89deg, rgb(255, 255, 255) 43.71%, rgb(66, 140, 252) 74.14%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Full Stack AI for
          <br />
          Businesses
        </p>
      </div>
      <div className="relative flex flex-col items-center gap-10 w-full">
        {/* Background image absolutely positioned at the bottom, behind the Studio cards */}
        <img
          src={bgMagic}
          alt="bg-magic"
          className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-0"
          style={{ objectFit: 'cover', maxHeight: '100vh' }}
        />
        <div className="relative z-10 flex flex-col items-center gap-10 w-full px-4 sm:px-6 md:px-8">
          {platforms.map((item, idx) => (
            <Studio
              key={idx}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
          {/* Removed extra space after the last card */}
        </div>
      </div>
      <Aboutadya />
      <TrustedBy />
      <Finaldetail />
      <Footer />
    </div>
  );
};

export default Detailpage;
