import { useRef, useEffect, useState } from 'react';
import Trustbycard from './Trustbycard';
import trustbg from '../../assets/Trustcompoentbg.png';
import logo1 from "../../assets/Trustedbyimages/company1.svg";
import logo2 from "../../assets/Trustedbyimages/comapany2.svg";
import logo3 from "../../assets/Trustedbyimages/company3.svg";
import logo4 from "../../assets/Trustedbyimages/company4.svg";


const logos = [
  { image: logo1, alt: 'Logo 1' },
  { image: logo2, alt: 'Logo 2' },
  { image: logo3, alt: 'Logo 3' },
  { image: logo4, alt: 'Logo 4' },
];

// Smooth, seamless marquee for infinite cycling
const useMarquee = (direction: 'left' | 'right', speed = 1) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setContentWidth(ref.current.scrollWidth / 2); // Since you're duplicating the content
    }
  }, []);

  useEffect(() => {
    let frame: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      if (!isPaused && contentWidth > 0) {
        const elapsed = now - lastTime;
        lastTime = now;

        setOffset((prev) => {
          const pxPerMs = speed / 8;
          let next = direction === 'left' ? prev - pxPerMs * elapsed : prev + pxPerMs * elapsed;

          if (direction === 'left' && next <= -contentWidth) return 0;
          if (direction === 'right' && next >= 0) return -contentWidth;

          return next;
        });
      } else {
        lastTime = now;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused, direction, speed, contentWidth]);

  return {
    ref,
    containerRef,
    offset,
    isPaused,
    handleMouseEnter: () => setIsPaused(true),
    handleMouseLeave: () => setIsPaused(false),
    handleClick: () => setIsPaused((prev) => !prev),
  };
};

const MarqueeRow = ({
  direction,
  speed = 1,
}: {
  direction: 'left' | 'right';
  speed?: number;
}) => {
  const marquee = useMarquee(direction, speed);

  return (
    <div
      ref={marquee.containerRef}
      className="relative overflow-hidden w-full h-[60px] sm:h-[70px] md:h-[80px] cursor-pointer"
      onMouseEnter={marquee.handleMouseEnter}
      onMouseLeave={marquee.handleMouseLeave}
      onClick={marquee.handleClick}
      title={marquee.isPaused ? "Click to play" : "Click to pause"}
    >
      <div
        ref={marquee.ref}
        className="flex flex-row absolute gap-4"
        style={{
          transform: `translateX(${marquee.offset}px)`,
          whiteSpace: 'nowrap',
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Trustbycard key={index} image={logo.image} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

const TrustedBy = () => {
  return (
    <div className="relative w-full max-w-[1500px] min-h-[400px] sm:min-h-[600px] md:min-h-[900px] flex flex-col items-center justify-center gap-12 sm:gap-20 md:gap-32 px-2 sm:px-4 py-8">
      <h1 className="font-medium text-[26px] sm:text-[34px] md:text-[38px] lg:text-[48px] leading-[32px] sm:leading-[38px] md:leading-[48px] lg:leading-[53px] w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-[#428cfc] z-10 text-center">
        Trusted by
      </h1>
      <div className="flex flex-col gap-4 sm:gap-6 w-full z-10">
        <MarqueeRow direction="left" speed={0.7} />
        <MarqueeRow direction="right" speed={0.7} />
        <MarqueeRow direction="left" speed={0.7} />
      </div>
      <img
        src={trustbg}
        alt="trust-bg"
        className="hidden md:block absolute right-0 top-[200px] h-[600px] md:h-[1200px] lg:h-[2000px] w-[300px] md:w-[600px] lg:w-[900px] max-w-[40vw] pointer-events-none select-none z-0"
      />
    </div>
  );
};

export default TrustedBy;
