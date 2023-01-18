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
	  <AllScholarships/>
      {/* <ExternalScholarships></ExternalScholarships> */}
    </div>
  );
};

export default Home;
