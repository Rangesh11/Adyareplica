import Intropagebg from '../assets/Intropagebg.webp'
import demo_logo from "../assets/demo_logo.svg"
import { useNavigate } from "react-router-dom";


const Intropage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Intropagebg})` }}
    >
      <div 
        className="absolute inset-x-0 flex flex-col items-center justify-center sm:justify-start pt-0 sm:pt-[200px] pb-[80px] h-full z-40"
        style={{ top: 0, bottom: 'auto' }}
      >
        <p
          className="font-manrope z-50 text-center max-sm:text-[44px] sm:text-[68px] md:text-[82px] lg:text-[100px] font-medium leading-[44px] sm:leading-[68px] md:leading-[82px] lg:leading-[100px] mx-1"
          style={{
            background: 'linear-gradient(95.91deg, rgb(255, 255, 255) 16.46%, rgb(66, 140, 252) 116.31%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'blur(0px)',
            transform: 'translateY(0px)',
            opacity: 1,
          }}
        >
          One Platform,
        </p>
        <p
          className="font-manrope z-50 text-center max-sm:text-[44px] sm:text-[68px] md:text-[82px] lg:text-[100px] font-medium leading-[44px] sm:leading-[68px] md:leading-[82px] lg:leading-[100px] mx-1 mt-2"
          style={{
            background: 'linear-gradient(95.91deg, rgb(255, 255, 255) 16.46%, rgb(66, 140, 252) 116.31%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'blur(0px)',
            transform: 'translateY(0px)',
            opacity: 1,
          }}
        >
          Endless AI Possibilities
        </p>
        <p
          className="font-nunito mt-16 text-lg md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[24px] md:leading-[30px] lg:leading-[30px] font-medium text-center z-[1] mb-[50px] sm:mb-[80px] text-white"
        >
          Full Stack AI for Businesses
        </p>
        <button
          className="flex items-center space-x-4 bg-gradient-to-r bg-black text-white px-7 py-4 rounded-full text-xl font-semibold shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          onClick={() => navigate('/demo')}
        >
          <img src={demo_logo} alt="demo" className="h-7 w-7" />
          <span>Schedule Demo</span>
        </button>
        
      </div>
    </div>
  )
}

export default Intropage
