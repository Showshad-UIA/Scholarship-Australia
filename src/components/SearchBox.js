import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Searchbox.css';
import WesternSydney from './Pages/WesternSydney';

const SearchBox = ({ universityName }) => {
  const [searchButton, setSearchButton] = useState(false);
  const [yearSelect, setYearSelect] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const navigate = useNavigate();

  const selectedData = universityName?.filter(
    data =>
      data?.govtStatus === selectedScholarship &&
      data?.levelStudy === selectedLevel
  );

  const searchedData = universityName?.filter(
    data =>
      data?.govtStatus
        ?.toLowerCase()
        ?.includes(selectedScholarship.toLowerCase()) &&
      data?.levelStudy?.toLowerCase()?.includes(selectedLevel.toLowerCase())
  );

  const filteredData = selectedData?.length ? selectedData : searchedData;

  const dataToShow = filteredData?.length ? filteredData : universityName;
  console.log(dataToShow);

  useEffect(() => {
    fetch('yearfakedata.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setYearSelect(data);
      });
  }, []);

  const handleSearchScholarship = () => {
  console.log(selectedScholarship, selectedLevel);
  navigate(`/searchScholarships/${selectedScholarship}/${selectedLevel}`);
    if (selectedScholarship === 'External Scholarships') {
      navigate('/external');
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
            <option className="font-bold dropdown inline text-black  ">
              Select a scholarships{' '}
            </option>
            <option value="University scholarships">
              University scholarships
            </option>
            <option value="Government scholarships">
              Government scholarships
            </option>
            <option value="External scholarships">
              External scholarships{' '}
            </option>
          </select>
        </div>

        <div className="relative w-full px-1.5  lg:w-60 md:w-52 lg:max-w-sm dropdown ">
          <select
            onChange={e => setSelectedLevel(e.target.value)}
            className=" p-1 px-2 w-full  bg-white  text-black border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none "
          >
            <option className=" font-bold text-black">
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

      {searchButton ? (
        <div>
          <div className="container mx-auto text-md mt-10">
            <p className="lg:mx-32 text-2xl font-extrabold lg:mt-10">
              {' '}
              All {selectedLevel} {selectedScholarship}
            </p>
          </div>{' '}
          {dataToShow.map(data => (
            <WesternSydney d={data}></WesternSydney>
          ))}
        </div>
      ) : (
        <>
          <div className="container mx-auto text-md mt-10">
            <p className="lg:mx-32 lg:text-2xl text-md font-bold lg:mt-10 px-2 sm:mb-5">
              Result of all scholarships and study levels
            </p>
          </div>

          {universityName.map(d => (
            <div className="container mx-auto  ">
              <div className="lg:mx-24 lg:border-t-2 lg:border-mx-24  shadow-sm">
                <div className=" w-full flex flex-wrap p-3 mb-5 lg:gap-[57px] lg:mt-5">
                  <div className="lg:w-[15%] w-full  ">
                    <div className="flex justify-center sm:w-full ">
                      <img
                        src={d.primaryImg}
                        alt=""
                        className="lg:h-28 lg:w-[120px] border-2  h-20  min-w-[150px] "
                      />
                    </div>

                    <p className="bg-[#304F40] rounded-2xl text-white text-center cursor-pointer  px-3 mt-2">
                      View courses
                    </p>
                  </div>

                  <div className="lg:w-[70%]   border-gray-400 py-2">
                    <div className="text-xl mt-5 text-black  font-bold underline underline-offset-4 cursor-pointer ">
                      {d.scholarQuality}
                    </div>
                    <div>
                      <p className="text-md font-bold mb-2 text-black hover:underline cursor-pointer">
                        {d.uniName}
                      </p>
                    </div>

                    <div className="lg:flex  w-full  mb-3">
                      <p className=" text-black font-bold lg:w-2/5">
                        Level of study:
                      </p>
                      <p className=" text-black lg:w-3/5 start ">
                        {d.levelStudy}
                      </p>
                    </div>
                    <div className="lg:flex justify-between w-full  ">
                      <p className=" text-black font-bold sm:w-[30%]  lg:w-2/5">
                        Scholarship inclusions:
                      </p>
                      <p className=" text-black lg:w-3/5 start ">
                        Scholarships include a stipend of $30,000(AUD) per annum
                        for three (3) years.
                        <p>
                          - For domestic students, tuition fees are covered by
                          the Australian Government Research Training Program
                          (RTP).
                        </p>
                        <p>
                          - For international students, a tuition fee waiver
                          will be awarded.
                        </p>
                      </p>
                    </div>
                    <div className=" flex justify-between w-full">
                      <div className="lg:flex lg:w-full">
                        <p className=" text-black font-bold lg:w-2/5">
                          Who can apply?
                        </p>
                        <p className="mb-3 text-black lg:w-3/5 ">
                          Domestic and international applicants{' '}
                          <span className="underline">Find out more</span>
                        </p>
                      </div>
                    </div>
                    <div className="  justify-between w-full">
                      <div className="lg:flex w-full">
                        <p className=" text-black font-bold lg:w-2/5 ">
                          Need Help with Your Application:
                        </p>
                        <p className=" text-md text-justify text-black lg:w-3/5">
                          Would you like someone experienced to review and give
                          feedback prior to submitting your scholarship
                          application? Scholarships Australia can assist you to
                          get connected with consultants who are previous
                          scholarship recipients in your field to ensure you
                          submit a competitive application{' '}
                          <span className=" center bg-[#304F40] my-2 cursor-pointer px-2  py-1 text-white rounded-2xl ">
                            Enquiry now
                          </span>
                        </p>
                      </div>
                      {/* <div className="flex w-full">
                        <div className="lg:w-2/5"></div>
                        <div className="lg:w-3/5 sm:w-full">
                          <span className=" center bg-[#304F40] my-2 cursor-pointer px-2  py-1 text-white rounded-2xl ">
                            Enquiry now
                          </span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SearchBox;
