import React, { useState } from 'react';
import ExternalBanner from '../Banner/ExternalBanner';
import photo from '../../Image/photo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faMoneyCheck,
  faPhone,
  faUser,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [quantity, setQuantity] = useState(0);
  const handleIncrease = () => {
    setQuantity(prevCount => prevCount + 1);
  };
  const handleDecrease = () => {
    setQuantity(prevCount => prevCount - 1);
  };
  return (
    <div>
      <ExternalBanner></ExternalBanner>

      <div className="lg:w-[66%] mx-auto text-md my-5 py-5 ">
        <div className="grid grid-cols-5 gap-7   ">
          <div className="col-span-4 ">
            <div className="   mb-7 border-2 rounded-[5px] pb-10 bg-[#FFFFFF]  ">
              <div className="flex  ">
                <div className="">
                  <img
                    src={photo}
                    className="p-5 lg:w-[350px] rounded-[7px] lg:h-[320px] "
                  ></img>

                  <div>
                    <p className="mt-7 px-2 font-sans font-bold mb-3">
                      Hourely Rate
                    </p>
                    <div className="col-md-3 w-[320px]  border-2 border-[#56B55D] px-2  mx-2 ">
                      <div className="input-group mt-2 justify-between flex mx-2">
                        <div className=" "> $ {quantity}</div>

                        <div className=" flex group ">
                          <div className="flex flex-col  invisible group-hover:visible -mt-2 ">
                            <button
                              onClick={handleIncrease}
                              className=" "
                              type=""
                            >
                              <FontAwesomeIcon
                                icon={faChevronUp}
                                className="w-5 h-2 text-black hover:bg-[#BEC0C2] "
                              ></FontAwesomeIcon>
                            </button>

                            <button
                              onClick={handleDecrease}
                              className=" "
                              type=""
                            >
                              <FontAwesomeIcon
                                icon={faChevronDown}
                                className="w-5 h-2 -mt-5 text-black hover:bg-[#BEC0C2]"
                              ></FontAwesomeIcon>
                            </button>
                          </div>
                          <p className="px-2">USD per hour</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[70%] px-4">
                  <div className="my-4">
                    <p className="font-bold text-xl">User name will display</p>
                    <div className="mt-4">
                      <label
                        for="headline"
                        className="block text-gray-900 dark:text-gray-300"
                      >
                        <p className="font-sans font-bold text-md mb-2">
                          Professional Headline
                        </p>
                      </label>
                      <input
                        type="text"
                        id="headline"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="mt-5">
                      <p className="font-sans mt-3  font-bold text-md mb-2">
                        Summary
                      </p>
                      <textarea
                        id="message"
                        rows="8"
                        name="consultantDoc"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end gap-5 mb-10">
                    <button className="py-2 px-5  text-black bg-[#BEC0C2] rounded-[5px]">
                      Cancel
                    </button>
                    <button className="py-2 px-5 bg-[#446154] text-white rounded-[5px]">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="  border-2 mb-7 rounded-[5px] bg-[#FFFFFF]  ">
              <div className="">
                <div>
                  <h1 className="text-xl font-bold border-b-2 px-5 py-5">
                    Reviews
                  </h1>
                  <div className="s py-2 px-20   mt-5 ">
                    <p className="mb-10 mt-3 flex justify-center">
                      No reviews to see here!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="   border-2 mb-7 rounded-[5px]   bg-[#FFFFFF]  ">
              <div className="">
                <div>
                  <div className="flex justify-between border-b py-5 px-5">
                    <h1 className="text-xl font-bold   ">Experience</h1>
                    <button className="text-md font-bold px-5 py-2 rounded-[5px] text-white bg-[#446154]  ">
                      Add Experience
                    </button>
                  </div>
                  <div className=" py-2 px-20   mt-5 ">
                    <p className="mb-10 mt-3 flex justify-center">
                      No experience to see here!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="   border-2  mb-7 rounded-[5px] bg-[#FFFFFF]  ">
              <div className="">
                <div>
                  <div className="flex justify-between border-b py-5 px-5">
                    <h1 className="text-xl font-bold   ">Qualifications</h1>
                    <button className="text-md font-bold px-5  text-white py-2 rounded-[5px]  bg-[#446154]  ">
                      Add Qualification
                    </button>
                  </div>
                  <div className=" py-2 px-20   mt-5 ">
                    <p className="mb-10 mt-3 flex justify-center">
                      No Qualifications have been added.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border-2 mb-7 rounded-[5px]  bg-[#FFFFFF]  ">
              <div className="">
                <div>
                  <div className="flex justify-between py-5 px-5 border-b">
                    <h1 className="text-xl font-bold ">Publications</h1>
                    <button className="text-md font-bold px-5 py-2 rounded-[5px] text-white bg-[#446154]  ">
                      Add Publication
                    </button>
                  </div>
                  <div className=" py-2 px-20   mt-5 ">
                    <p className="mb-10 mt-3 flex justify-center">
                      No publications have been added.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" card w-[300PX] ">
            <div className="border-2  bg-[#FFFFFF] mt-10 ">
              <p className="border-b-2 font-sans font-bold p-3">
                Verifications
              </p>
              <div className="px-3 py-5">
                <div className="flex py-2  gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faUserGear}
                      className="w-5 h-5  text-[#BEC0C2] hover:bg-[#BEC0C2] "
                    ></FontAwesomeIcon>
                  </div>
                  <div>
                    <p>Preferred Consultant</p>
                  </div>
                </div>
                <div className="flex py-2 gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="w-5 h-5  text-[#BEC0C2] hover:bg-[#BEC0C2] "
                    ></FontAwesomeIcon>
                  </div>
                  <div>
                    <p>Identity Verified</p>
                  </div>
                </div>
                <div className="flex py-2 gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faMoneyCheck}
                      className="w-5 h-5  text-[#BEC0C2] hover:bg-[#BEC0C2] "
                    ></FontAwesomeIcon>
                  </div>
                  <div>
                    <p>Payment Verified</p>
                  </div>
                </div>
                <div className="flex py-2  gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="w-5 h-5  text-[#BEC0C2] hover:bg-[#BEC0C2] "
                    ></FontAwesomeIcon>
                  </div>
                  <div>
                    <p>Phone Verified</p>
                  </div>
                </div>
                <div className="flex py-2  gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-5 h-5  text-[#BEC0C2] hover:bg-[#BEC0C2] "
                    ></FontAwesomeIcon>
                  </div>
                  <div>
                    <p>Email Verified</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 w-full bg-[#FFFFFF] mt-10 ">
              <div className="flex justify-between border-b-2">
                <p className=" font-sans font-bold p-3">Top Skills</p>
                <button className="bg-[#3A73CB] text-white rounded-[5px] font-sans font-bold m-3 px-2 py-1">
                  Edit Skills
                </button>
              </div>
              <div className="px-3 ">
                <div className="pt-3">
                  <p className="font-sans hover:underline">Website Design</p>
                </div>

                <div className="pt-3 pb-7">
                  <p className="font-sans hover:underline">Video Production</p>
                </div>
              </div>
            </div>
            <div className="border-2 w-full bg-[#FFFFFF] mt-10 ">
              <p className="border-b-2 font-sans font-bold p-3 ">
                Browse Similar Consultant
              </p>
              <div className=" flex flex-col">
                <p className="mt-3 border-2 font-sans mx-5 px-3 cursor-pointer">
                  Expert on prepare documents
                </p>
                <p className="mt-3 border-2 font-sans mx-5 px-3 cursor-pointer ">
                  Expert on proposal writing{' '}
                </p>

                <p className="mt-3 mb-7 font-sans border-2 px-3 mx-5 cursor-pointer">
                  Expert on mentorship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
