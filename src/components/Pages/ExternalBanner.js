import React from 'react';
import banner from '../../Image/finance-banner.jpg';

const ExternalBanner = () => {
  return (
    <div>
      <div className="carousel lg:w-full  relative lg:h-[350px] h-[115px] md:h-[280px] opacity-100  ">
        <div
          id="item2"
          className="carousel-item  w-full    bg-cover banner "
          style={{ backgroundImage: `url(${banner})` }}
        >
          <p className="text-4xl flex justify-center items-center text-center font-bold w-full font-sans text-[#1E282D] uppercase">
            External scholarships
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExternalBanner;
