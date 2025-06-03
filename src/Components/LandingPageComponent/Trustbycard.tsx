import React from 'react';

interface TrustbycardProps {
  image: string;
  alt: string;
}

const Trustbycard: React.FC<TrustbycardProps> = ({ image, alt }) => {
  return (
    <div className="flex justify-center items-center h-[50px] sm:h-[76px] w-[135px] sm:w-[305px] rounded-[10px] sm:rounded-[20px] bg-[#010313] p-3 px-5 shrink-0 mr-2 sm:mr-7">
      <img src={image} alt={alt} className="max-sm:h-full w-fit object-contain" />
    </div>
  );
};


export default Trustbycard;
