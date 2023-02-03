import React from 'react';
import Servicebanner from './Servicebanner';

const OurServices = () => {
  return (
    <>
      <Servicebanner></Servicebanner>
      <div className="mx-auto container">
        <h1 className=' "lg:mx-32 font-sans text-center my-10 text-xl font-bold'>
          <marquee behavior="scroll" direction="left" scrollamount="10">
            Our Services page content will update soon
          </marquee>
        </h1>
      </div>
    </>
  );
};

export default OurServices;
