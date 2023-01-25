import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Western_Sydney from '../../Image/western sydney.jpg';
import Banner from '../Banner';
import SearchBox from '../SearchBox';

const WesternSydney = () => {
  const { scholarship, graduation } = useParams();
  const [universityName, setUniversityName] = useState([]);
  const navigate = useNavigate();
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
    <div>
      {/* <Banner></Banner>
      <SearchBox></SearchBox> */}

      <div className="container mx-auto ">
        <p className="lg:mx-20 lg:text-xl font-sans text-md font-bold lg:mt-10 px-2 sm:mb-5">
          {graduation} {scholarship}
        </p>
        {dataShow.map(d => (
          <div className="  mt-10 mb-5  ">
            <div className="lg:mx-10 lg:border-t-2  ">
              <div className=" w-full flex flex-wrap px-3 mb-5  lg:mt-5">
                <div className="lg:w-[15%] w-full mr-5 ">
                  <div className="flex justify-center sm:w-full ">
                    <img
                      src={d.primaryImg}
                      alt=""
                      className="lg:h-28 lg:w-[120px] border-2  h-20  min-w-[150px] "
                    />
                  </div>

                  <p className="bg-[#304F40] lg:ml-[32px] lg:w-[120px] min-w-[150px] rounded-2xl text-white text-center cursor-pointer  px-3 mt-2">
                    View courses
                  </p>
                </div>

                <div className="lg:w-[82%]   border-gray-400 ">
                  <div className="text-xl font-sans  text-black  font-bold underline underline-offset-4 cursor-pointer ">
                    {d.scholarQuality}
                  </div>
                  <div>
                    <p className="text-md font-sans font-semibold mb-2 text-black hover:underline cursor-pointer">
                      {d.uniName}
                    </p>
                  </div>

                  <div className="lg:flex  w-full ">
                    <p className=" text-gray-800 mb-1 font-semibold lg:w-2/6 font-sans">
                      Level of study:
                    </p>
                    <p className=" text-black lg:w-5/6 start font-sans ">
                      {d.levelStudy}
                    </p>
                  </div>
                  <div className="lg:flex justify-between w-full  ">
                    <p className=" text-gray-800 font-sans  font-semibold sm:w-[30%]  lg:w-2/6">
                      Scholarship inclusions:
                    </p>
                    <p className=" lg:w-5/6 start font-sans">
                      Scholarships include a stipend of $30,000(AUD) per annum
                      for three (3) years.
                      <p>
                        - For domestic students, tuition fees are covered by the
                        Australian Government Research Training Program (RTP).
                      </p>
                      <p>
                        - For international students, a tuition fee waiver will
                        be awarded.
                      </p>
                    </p>
                  </div>
                  <div className=" flex justify-between w-full">
                    <div className="lg:flex lg:w-full">
                      <p className=" text-gray-800 font-sans  font-semibold lg:w-2/6">
                        Who can apply?
                      </p>
                      <p className="mb-1 font-sans lg:w-5/6 ">
                        Domestic and international applicants{' '}
                        <span className="underline text-gray-800 font-sans  font-semibold">
                          Find out more
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="  justify-between w-full">
                    <div className="lg:flex w-full">
                      <p className=" text-gray-800 font-sans  font-semibold lg:w-2/6 ">
                        Need help with your application:
                      </p>
                      <p className=" text-md font-sans text-justify  lg:w-5/6">
                        Would you like someone experienced to review and give
                        feedback prior to submitting your scholarship
                        application? Scholarships Australia can assist you to
                        get connected with consultants who are previous
                        scholarship recipients in your field to ensure you
                        submit a competitive application{' '}
                        <span
                          onClick={() => navigate(`/enquire/${d.id}`)}
                          className="  bg-[#304F40] my-2 cursor-pointer px-2  py-1 text-white rounded-2xl "
                        >
                          {/* <a href=' '>Enquire now</a> */}
                          Enquire now
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="lg:mx-10 lg:mb-20 border-t-2"></div>
      </div>
    </div>
  );
};

export default WesternSydney;
