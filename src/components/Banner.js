// import { useNavigate } from "react-router-dom";
// import Bannar from "../Image/Wedding Banner  (10).png";

// const Banner = () => {
// 	const navigate = useNavigate();

// 	const banner = {
// 		backgroundImage: "url('https://i.ibb.co/QC1gbGm/Blue-Gold-Rustic-Artisinal-Remote-Graduation-Banner-5.png') ",
// 		backgroundImage: "url('https://i.ibb.co/wz6qqWW/Wedding-Banner-10.png') ",
// 		height: "460px",
// 		backgroundSize: "cover",
// 		backgroundRepeat: "no-repeat",
// 	};
// 	return (
// 		<div style={banner}  className=" w-full auto"></div>

// 	);
// };

// export default Banner;

import React from 'react';

import slider1 from '../Image/banner-02.png';
import '../components/Banner.css';
const Banner = () => {
  return (
    <div>
      <div className="carousel lg:w-full  relative lg:h-[500px] h-[115px] md:h-[280px] bg-[#304F40] banner ">
        {/* Banner one added here  */}
        <div
          id="item2"
          className="carousel-item w-full    bg-cover banner "
          style={{ backgroundImage: `url(${slider1})` }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
