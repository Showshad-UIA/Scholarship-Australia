import React from 'react';
import banner from '../../Image/external.jpg';

const ExternalBanner = () => {
  return (
    <div>
      <div className="carousel lg:w-full  relative lg:h-[320px] h-[115px] md:h-[280px] opacity-95 ">
        <div
          id="item2"
          className="carousel-item lg:w-full    bg-cover banner "
          style={{ backgroundImage: `url(${banner})` }}
        >
          <p className='text-3xl flex justify-center items-center text-center text-red-600 w-full'>External scholarship</p>
        </div>
      </div>
    </div>
  );
};

export default ExternalBanner;
