
import demoImage from '../assets/ShowDemobg.webp';

const Leftpannal = () => {
  return (
    <div className="hidden md:flex flex-col w-full h-full bg-black p-6 relative overflow-hidden">
      {/* Top SVG Icon (top left corner) */}
      <div className="absolute top-14 left-10 z-30">
        <img
          src="data:image/svg+xml,%3csvg%20width='40'%20height='41'%20viewBox='0%200%2040%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_751_813)'%3e%3cpath%20d='M24.0313%2030.2056C28.938%2028.2941%2029.2885%2022.1415%2029.2885%2020.4988C29.2885%2014.5254%2025.9297%2011.5884%2024.0312%2010.792V9C28.0472%209%2030.3837%2011.688%2031.552%2012.8827L38.9995%2020.4988L31.552%2028.1149C28.2809%2031.3405%2025.5403%2032.0474%2024.0313%2031.9976V30.2056Z'%20fill='white'/%3e%3cpath%20d='M15.9682%2030.2056C11.0615%2028.2941%2010.711%2022.1415%2010.711%2020.4988C10.711%2014.5254%2014.0698%2011.5884%2015.9683%2010.792V9C11.8794%209.23894%209.61587%2011.688%208.44762%2012.8827L1%2020.4988L8.44762%2028.1149C11.7187%2031.3405%2014.4592%2032.0474%2015.9682%2031.9976V30.2056Z'%20fill='white'/%3e%3cpath%20d='M24.0313%2030.2056C28.938%2028.2941%2029.2885%2022.1415%2029.2885%2020.4988C29.2885%2014.5254%2025.9297%2011.5884%2024.0312%2010.792V9C28.0472%209%2030.3837%2011.688%2031.552%2012.8827L38.9995%2020.4988L31.552%2028.1149C28.2809%2031.3405%2025.5403%2032.0474%2024.0313%2031.9976V30.2056Z'%20stroke='white'/%3e%3cpath%20d='M15.9682%2030.2056C11.0615%2028.2941%2010.711%2022.1415%2010.711%2020.4988C10.711%2014.5254%2014.0698%2011.5884%2015.9683%2010.792V9C11.8794%209.23894%209.61587%2011.688%208.44762%2012.8827L1%2020.4988L8.44762%2028.1149C11.7187%2031.3405%2014.4592%2032.0474%2015.9682%2031.9976V30.2056Z'%20stroke='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_751_813'%3e%3crect%20width='40'%20height='25'%20fill='white'%20transform='translate(0%208)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
          alt="Top Icon"
          className="w-[60px] h-[63px]"
        />
      </div>

      {/* Bottom image */}
      <img
        src={demoImage}
        alt="Demo"
        className="absolute bottom-0 left-0 w-full object-cover z-10"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-50 z-10" />

      {/* Bottom text */}
      <div className="flex flex-1 items-end justify-center relative z-20">
        <p
          className="text-[38px] sm:text-[42px] md:text-[55px] lg:text-[63px] xl:text-[72px] font-medium font-manrope max-w-[640px] text-center leading-[110%] pb-10"
          style={{
            background: "linear-gradient(125.83deg, #ffffff 53.64%, #428CFC 72.71%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Designed for rapid scalability and easy integration.
        </p>
      </div>
    </div>
  );
};

export default Leftpannal;
