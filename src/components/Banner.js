import React from 'react';
import slider1 from '../Image/Banner-5.png';
import '../styles/banner/Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="carousel lg:w-full  relative lg:h-[600px] h-[115px] md:h-[280px] bg-[#304F40] banner ">
        {/* Banner one added here  */}
        <div
          id="item2"
          className="carousel-item lg:w-full    bg-cover banner "
          style={{ backgroundImage: `url(${slider1})` }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
