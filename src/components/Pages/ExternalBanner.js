import React from 'react';
import banner from '../../Image/external_scholarship.jpg';

const ExternalBanner = () => {
  return (
    <div>
      <div className="carousel lg:w-full bg-[#304F40] relative lg:h-[320px] md:h-[200px] h-[115px]  opacity-90 ">
        <div
          id="item2"
          className="carousel-item w-full    bg-cover banner "
          // style={{ backgroundImage: `url(${slider})` }}
        ></div>
      </div>
    </div>
  );
};

export default ExternalBanner;
