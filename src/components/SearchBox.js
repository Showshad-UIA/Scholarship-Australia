import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../components/Searchbox.css';
import AllScholarships from './Home/AllScholarships';
import WesternSydney from './Pages/WesternSydney';

const SearchBox = ({ setSelectScholarships }) => {
  const [searchButton, setSearchButton] = useState(false);
  const [yearSelect, setYearSelect] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const { scholarship, graduation } = useParams();
  const navigate = useNavigate();

  const selectScholarships = [
    {
      id: 1,
      option: 'University Scholarships',
      value: 'University scholarships',
    },
    {
      id: 2,
      option: 'Government Scholarships',
      value: 'Government scholarships',
    },
    {
      id: 3,
      option: 'External Scholarships',
      value: 'External scholarships',
    },
  ];

  const handleSearchScholarship = () => {
    console.log(selectedScholarship, selectedLevel);

    if (scholarship === 'External Scholarships') {
      navigate('/external');
    } else {
      navigate(`/searchScholarships/${selectedScholarship}/${selectedLevel}`);
    }
  };

  return (
    <div>
      <h1 className="text-xl text-center text-[#304F40] items-center container mx-auto font-bold mt-5 rounded-3xl   ">
        <p className="lg:mx-28 text-justify lg:text-center px-2">
          Scholarship Australia is the first scholarship consultancy online
          platform. Hire the best consultant for your scholarship application.
          Get feedback from previous scholarship recipients.
        </p>
      </h1>
      <div className="lg:flex md:flex  w-full justify-center mt-5 lg:gap-5 md:gap-3   ">
        <div className="relative px-1.5 w-full  lg:w-60 md:w-52 lg:max-w-sm dropdown ">
          <select
            onChange={e => setSelectedScholarship(e.target.value)}
            className=" p-1 px-2 w-full  bg-white  text-black border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  "
          >
            <option className="font-bold dropdown inline text-black disabled ">
              Select a scholarships{' '}
            </option>
            {selectScholarships.map(({ option, value, id }) => (
              <option onClick={() => setSelectScholarships(id)} value={value}>
                {option}
              </option>
            ))}

            {/* <option value="Government scholarships">
              Government scholarships
            </option>
            <option value="External scholarships">
              External scholarships{' '}
            </option> */}
          </select>
        </div>

        <div className="relative w-full px-1.5  lg:w-60 md:w-52 lg:max-w-sm dropdown ">
          <select
            onChange={e => setSelectedLevel(e.target.value)}
            className=" p-1 px-2 w-full  bg-white  text-black border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none "
          >
            <option className=" font-bold text-black disabled">
              Select a study level
            </option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Undergraduate">Undergraduate</option>
          </select>
        </div>

        <button
          // onClick={() => setSearchButton(!searchButton)}
          onClick={handleSearchScholarship}
          className="relative w-full lg:max-w-sm lg:w-60 md:w-52 p-1 ml-1 px-5    rounded-3xl shadow-sm outline-none appearance-none focus:border-indigo-600 text-white cursor-pointer bg-[#304F40]"
        >
          Search
        </button>
        {/* <button className="rounded-3xl text-white bg-[#304F40] p-2">
					Post your Scholarship Query
				</button> */}
      </div>
      <div>
        <div className="container mx-auto text-md mt-10">
          <p className="lg:mx-32 lg:text-2xl text-md font-bold lg:mt-10 px-2 sm:mb-5">
            Result of all scholarships and study levels
          </p>
        </div>

        {/* {universityName.map((d) => (
            <AllScholarships d={d} />
          ))} */}
      </div>
    </div>
  );
};

export default SearchBox;
