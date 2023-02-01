import React from 'react';
import ResourcesBanner from '../Banner/ResourcesBanner';
import JobChoice from '../Navbar/JobChoice';

const Resources = () => {
  return (
    <>
      <ResourcesBanner></ResourcesBanner>
      <div className="mx-auto container">
        <h1 className="lg:mx-60 text-center my-10 text-xl font-bold font-sans">
          <JobChoice></JobChoice>
          {/* <marquee behavior="scroll" direction="left" scrollamount="10">
            Our resources page content will update soon
          </marquee> */}
        </h1>
      </div>
    </>
  );
};

export default Resources;
