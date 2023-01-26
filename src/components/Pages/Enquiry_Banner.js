import React from 'react';
import slider from '../../Image/enquiry-banners.jpg';
const Enquiry_Banner = () => {
  return (
    <div>
      <div className="carousel lg:w-full  relative lg:h-[320px] md:h-[200px] h-[115px]  opacity-90 ">
        
        <div
          id="item2"
          className="carousel-item w-full    bg-cover banner "
          style={{ backgroundImage: `url(${slider})` }}
        ></div>
      </div>
    </div>
  );
};

export default Enquiry_Banner;