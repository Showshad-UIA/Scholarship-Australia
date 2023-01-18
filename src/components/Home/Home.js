import React, { useEffect, useState } from 'react';
import Banner from '../Banner';
import ExternalScholarships from '../Pages/ExternalScholarships';
import WesternSydney from '../Pages/WesternSydney';
import SearchBox from '../SearchBox';
import AllScholarships from './AllScholarships';
import Intro from './Intro';

const Home = () => {
 

  return (
    <div className="">
      <Banner></Banner>
      
      <SearchBox ></SearchBox>
      {/* <div className="container mx-auto text-md mt-10">
        <p className="lg:mx-20 font-sans lg:text-2xl text-md font-semibold text-gray-800 lg:mt-10 px-2 sm:mb-5">
          Select your scholarships and study levels
        </p>
      </div> */}
      <AllScholarships />
      {/* <ExternalScholarships></ExternalScholarships> */}
    </div>
  );
};

export default Home;
