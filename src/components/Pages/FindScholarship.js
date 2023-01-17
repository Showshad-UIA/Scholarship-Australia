import React from 'react';

const FindScholarship = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <p className="lg:mx-32 text-2xl font-extrabold lg:mt-10">
          {' '}
          Scholarship search results
        </p>
      </div>
      <div className="container mx-auto text-md mt-10">
        <p className="lg:mx-32">
          {' '}
          All courses and institutions listed are CRICOS registered
        </p>
      </div>{' '}
      {dataToShow.map(data => (
        <WesternSydney d={data}></WesternSydney>
      ))}
    </div>
  );
};

export default FindScholarship;
