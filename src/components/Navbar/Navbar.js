import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../Image/logo.png';
// import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      title: 'University Scholarships',
      link: '/university',
    },
    {
      id: 2,
      title: 'Project Scholarships',
      link: '/project',
    },
    {
      id: 3,
      title: 'Government Scholarships',
      link: '/government',
    },
    {
      id: 4,
      title: 'External Scholarships',
      link: '/external',
    },
    {
      id: 5,
      title: 'Resources',
      link: '/resources',
    },
    {
      id: 6,
      title: 'Our Services',
      link: '/ourServices',
    },
  ];

  return (
    <div className=" bg-[#1E282D] font-sans  z-10  ">
      <div className="max-w-8xl mx-auto ">
        <div className=" sticky top-0 z-10 lg:mx-28 ">
          <div className="">
            <div className="flex justify-between w-full items-center h-20 lg:text-[16px] text-white md:text-[11px]   ">
              <Link to={'/'}>
                <img
                  src={image}
                  className="lg:w-[180px] md:w-[155px] md:h-9 lg:h-10 cursor-pointer"
                  alt=""
                />
              </Link>
              <ul className="hidden md:flex">
                {links.map(({ id, title, link }) => (
                  <li
                    key={id}
                    className="px-4 cursor-pointer capitalize font-medium text-md text-white hover:scale-105 duration-200"
                  >
                    <Link to={link} smooth duration={500}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                onClick={() => setNav(!nav)}
                className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500"
              >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
              </div>
              {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                  {links.map(({ id, title, link }) => (
                    <li
                      key={id}
                      className="text-4xl cursor-pointer capitalize  px-4 py-6"
                    >
                      <Link
                        onClick={() => setNav(!nav)}
                        to={link}
                        smooth
                        duration={500}
                      >
                        {' '}
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
