import React, { useState } from 'react';
import ExternalBanner from '../Banner/ExternalBanner';
import photo from '../../Image/photo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity(prevCount => prevCount + 1);
  };
  const handleDecrease = () => {
    setQuantity(prevCount => prevCount - 1);
  };
  return (
    <div>
      <ExternalBanner></ExternalBanner>

      <div className="container mx-auto text-md my-5 py-5 ">
        <div className="lg:mx-[300px]  mb-7 border-2 rounded-[5px]  ">
          <div className="flex  ">
            <div className="w-[30%]">
              <img src={photo} className="p-5 lg:w-[400px] lg:h-[270px] "></img>

              <div className="col-md-3 w-[270px]  border-2 border-[#56B55D] px-2  mx-2 mt-28">
                <div className="input-group mt-2 justify-between flex mx-2">
                  <div className=" "> $ {quantity}</div>

                  <div className=" flex group ">
                    <div className="flex flex-col  invisible group-hover:visible -mt-2 ">
                      <button onClick={handleIncrease} className=" " type="">
                        <FontAwesomeIcon
                          icon={faChevronUp}
                          className="w-5 h-2 text-black hover:bg-[#BEC0C2] "
                        ></FontAwesomeIcon>
                      </button>

                      <button onClick={handleDecrease} className=" " type="">
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
        <div className="lg:mx-[300px]  border-2 mb-7 rounded-[5px]  ">
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
        <div className="lg:mx-[300px]   border-2 mb-7 rounded-[5px]    ">
          <div className="">
            <div>
              <div className="flex justify-between border-b py-5 px-5">
                <h1 className="text-xl font-bold   ">Experience</h1>
                <button className="text-md font-bold px-5  text-white bg-[#446154]  ">
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
        <div className="lg:mx-[300px]   border-2  mb-7 rounded-[5px]  ">
          <div className="">
            <div>
              <div className="flex justify-between border-b py-5 px-5">
                <h1 className="text-xl font-bold   ">Qualifications</h1>
                <button className="text-md font-bold px-5  text-white  bg-[#446154]  ">
                  Add Qualifications
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
        <div className="lg:mx-[300px]   border-2 mb-7 rounded-[5px]   ">
          <div className="">
            <div>
              <div className="flex justify-between py-5 px-5 border-b">
                <h1 className="text-xl font-bold ">Publication</h1>
                <button className="text-md font-bold px-5 text-white bg-[#446154]  ">
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
    </div>
  );
};

export default Profile;
