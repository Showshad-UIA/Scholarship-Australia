import React from 'react';
import Banner from '../Banner';
import WesternSydney from '../Pages/WesternSydney';
import SearchBox from '../SearchBox';
import ExternalScholarships from './ExternalScholarships';
import GovernmentScholarships from './GovernmentScholarships';

const FindScholarship = ({selectedLevel,selectedScholarship}) => {
  return (
    <div>
      <Banner/>
      <SearchBox/>
      <WesternSydney/>
    </div>
  );
};

export default FindScholarship;
