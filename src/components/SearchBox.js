import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/searchbox/Searchbox.css';
import AllScholarships from './Home/AllScholarships';
import WesternSydney from './Pages/WesternSydney';

const SearchBox = ({}) => {
  const [searchButton, setSearchButton] = useState(false);
  const [yearSelect, setYearSelect] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const { scholarship, graduation } = useParams();
  console.log(scholarship, graduation);
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
    {
      id: 4,
      option: 'Project Scholarships',
      value: 'Project scholarships',
    },
  ];

  const handleSearchScholarship = e => {
    console.log(selectedScholarship, selectedLevel);
    e.preventDefault();

    if (selectedScholarship && selectedLevel) {
      if (selectedScholarship === 'External scholarships') {
        navigate('/external');
      } else if (selectedScholarship === 'Government scholarships') {
        navigate('/government');
      } else if (selectedScholarship === 'Project scholarships') {
        navigate('/project');
      } else {
        navigate(`/searchScholarships/${selectedScholarship}/${selectedLevel}`);
      }
    } else {
      // navigate("/")
      toast.error('Please select your options');
      // alert("Please select two data")
    }
  };

  return (
    <div>
      <h1 className="text-xl text-center text-[#304F40] items-center container mx-auto font-semibold mt-5 rounded-3xl lg:mb-12  ">
        <p className="lg:mx-28 text-justify lg:text-center px-2 font-sans">
          Scholarships Australia is a scholarship consultancy platform. Our
          consultants will assist you to submit a competitive scholarship
          application that stands out. Our scholarship search tool will assist
          in finding the right scholarship for you.
        </p>
      </h1>
      {/* <div className="">
        <p className=" font-sans lg:text-2xl text-md mt-10 font-bold text-[#304F40] lg:mt-10 px-2 sm:mb-5  text-center ">
          Search for a scholarship
        </p>
      </div> */}
      <div className="lg:flex md:flex  w-full justify-center mt-5 lg:gap-5 md:gap-3   ">
        <div className="relative px-1.5 w-full  lg:w-60 md:w-52 lg:max-w-sm dropdown ">
          <select
            onChange={e => setSelectedScholarship(e.target.value)}
            className=" p-1 px-2 w-full    text-black border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  "
          >
            <option className="font-bold dropdown inline text-black disabled ">
              Select type of scholarship
            </option>
            {selectScholarships.map(({ option, value, id }) => (
              <option value={value}>{option}</option>
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
            <option className="font-sans font-bold text-black disabled">
              Select a level of study
            </option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Undergraduate">Undergraduate</option>
          </select>
        </div>

        <button
          // onClick={() => setSearchButton(!searchButton)}
          onClick={handleSearchScholarship}
          className="relative w-full lg:max-w-sm lg:w-60 md:w-52 p-1 ml-1 px-5    rounded-3xl shadow-sm outline-none appearance-none focus:border-indigo-600 text-white cursor-pointer bg-[#304F40] font-sans"
        >
          Search
        </button>
        {/* <button className="rounded-3xl text-white bg-[#304F40] p-2">
					Post your Scholarship Query
				</button> */}
      </div>
      <div>
        {/* <div className="container mx-auto text-md mt-10">
          <p className="lg:mx-20 font-sans lg:text-2xl text-md font-semibold text-gray-800 lg:mt-10 px-2 sm:mb-5">
           Select your scholarships and study levels
          </p>
        </div> */}

        {/* {universityName.map((d) => (
            <AllScholarships d={d} />
          ))} */}
      </div>
    </div>
  );
};

export default SearchBox;
