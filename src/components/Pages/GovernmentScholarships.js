import React from 'react';
import GovernmentScolarshipBanner from '../Banner/GovernmentScolarshipBanner';

const GovernmentScholarships = () => {
  return (
    <>
      {' '}
      <GovernmentScolarshipBanner></GovernmentScolarshipBanner>
      <div className="mx-auto container">
        <h1 className=" font-sans lg:mx-32 text-center my-10 text-xl font-bold">
          <marquee behavior="scroll" direction="left" scrollamount="10">
            The government scholarship page content will update soon
          </marquee>
        </h1>
      </div>
    </>
  );
};

export default GovernmentScholarships;
