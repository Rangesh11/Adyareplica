import { useNavigate } from 'react-router-dom';
import demo_logo from "../../assets/demo_logo.svg";

const Showdemo = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-white bg-transparent rounded-full ring-1 !ring-[#428CFC] shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300 ease-in-out hover:bg-white/25 hover:!bg-blue-900 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
      onClick={() => navigate('/demo')}
    >
      <img src={demo_logo} alt="demo" className="h-5 w-5" />
      <span>Schedule Demo</span>
    </button>
  );
};

export default Showdemo;
