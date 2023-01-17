import React from 'react';
import Banner from '../Banner';
import SearchBox from '../SearchBox';
import WesternSydney from './WesternSydney';

const FindScolarships = () => {
  return (
    <div className="mb-20">
      <Banner></Banner>
      <SearchBox></SearchBox>
      <WesternSydney></WesternSydney>
    </div>
  );
};

export default FindScolarships;
