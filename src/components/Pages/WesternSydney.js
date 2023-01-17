import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Western_Sydney from '../../Image/western sydney.jpg';
import Banner from '../Banner';
import SearchBox from '../SearchBox';

const WesternSydney = () => {
  const { scholarship, graduation } = useParams();
  const [universityName, setUniversityName] = useState([]);
  console.log(universityName);

  const dataShow = universityName.filter(
    u => u.govtStatus === scholarship && u.levelStudy === graduation
  );

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Masum-WebD/my-fakedata-json/main/scholarshipsUniversity.json'
    )
      .then(res => res.json())
      .then(data => setUniversityName(data));
  }, []);
  return (
    <>
      {/* <Banner></Banner>
      <SearchBox></SearchBox> */}


      <div className="container mx-auto ">
      <p > {scholarship} {graduation}</p>
        {dataShow.map(d => (
          <div className="lg:mx-24 lg:border-t-2 shadow-sm">
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
                <div className="text-xl mt-5 text-black  font-bold underline cursor-pointer ">
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
                  <p className=" text-black lg:w-3/5 start ">{d.levelStudy}</p>
                </div>
                <div className="lg:flex justify-between w-full  ">
                  <p className=" text-black font-bold sm:w-[30%]  lg:w-2/5">
                    Scholarship inclusions:
                  </p>
                  <p className=" text-black lg:w-3/5 start ">
                    Scholarships include a stipend of $30,000(AUD) per annum for
                    three (3) years.
                    <p>
                      - For domestic students, tuition fees are covered by the
                      Australian Government Research Training Program (RTP).
                    </p>
                    <p>
                      - For international students, a tuition fee waiver will be
                      awarded.
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
                      feedback prior to submitting your scholarship application?
                      Scholarships Australia can assist you to get connected
                      with consultants who are previous scholarship recipients
                      in your field to ensure you submit a competitive
                      application{' '}
                      <span className=" center bg-[#304F40] my-2 cursor-pointer px-2  py-1 text-white rounded-2xl ">
                        Enquiry now
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WesternSydney;
