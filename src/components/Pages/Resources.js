import React from 'react';
import ResourcesBanner from '../Banner/ResourcesBanner';


const Resources = () => {
  return (
    <>
      <ResourcesBanner></ResourcesBanner>
      <div className="mx-auto container">
        <h1 className="lg:mx-32 text-center my-10 text-xl font-bold font-sans">
          <marquee behavior="scroll" direction="left" scrollamount="10">
            Our resources page content will update soon
          </marquee>
        </h1>
       
      </div>
    </>
  );
};

export default Resources;
