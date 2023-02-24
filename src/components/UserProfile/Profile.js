import {
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faMoneyCheck,
  faPhone,
  faUser,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useUsers from "../../Hooks/useUsers";
import photo from "../../Image/photo.png";
import ExternalBanner from "../Banner/ExternalBanner";
import ExperienceForm from "./ExperienceForm";
import PublicationsForm from "./PublicationsForm";
import QualificationsForm from "./QualificationsForm";

const Profile = () => {
  const { usersget } = useUsers();
  const [consultantInfo, serConsultantInfo] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [editInfo, setEditInfo] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [user] = useAuthState(auth);
  const [addQualifications, setAddQualifications] = useState(false);
  const [addPublications, setAddPublications] = useState(false);
  // console.log(consultantInfo,user.email);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/consultantInfo/?email=${user.email}`)
        .then((res) => res.json())
        .then(async (data) => {
          console.log(data);
          await serConsultantInfo(data.data);
        });
    }
  }, [user]);

  const handleIncrease = () => {
    setQuantity((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    setQuantity((prevCount) => prevCount - 1);
  };

  const handleConsultInfoEdit = (e) => {
    e.preventDefault();
    const cons_id = e.target.id.value;
    // console.log(e.target.consultantDoc.value,e.target.headline.value,cons_id)

    fetch(`http://localhost:5000/api/consultantInfo/${cons_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        profession: e.target.headline.value,
        summery: e.target.consultantDoc.value,
        // user_email: user?.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // console.log(cons_id);
    setEditInfo(!editInfo);
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
                    src={user?.photoURL ? user?.photoURL : photo}
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
                  <div className="my-4 flex justify-between">
                    <p className="font-bold text-xl mt-2">
                      {user?.displayName ? (
                        user?.displayName
                      ) : (
                        <>
                          {usersget.map(({ user_name }) => (
                            <p>{user_name}</p>
                          ))}
                        </>
                      )}
                    </p>
                    {!editInfo && (
                      <div
                        onClick={() => setEditInfo(!editInfo)}
                        className="bg-[#2683d4] hover:bg-[#1073CB] rounded-sm"
                      >
                        <p className="px-5 py-2 text-white cursor-pointer">
                          Edit
                        </p>
                      </div>
                    )}
                  </div>

                  {!editInfo ? (
                    <div>
                      {consultantInfo.map(({ profession, summery }) => (
                        <div>
                          <h3 className="text-md font-bold">{profession}</h3>
                          <p className="">{summery}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {consultantInfo.map(
                        ({ profession, summery, cons_id }) => (
                          <form onSubmit={handleConsultInfoEdit}>
                            <div className="mt-4">
                              <input
                                type="text"
                                className="hidden"
                                defaultValue={cons_id}
                                name="id"
                              />
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
                                defaultValue={profession}
                                name="headline"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                defaultValue={summery}
                                // onBlur={(e) =>
                                //   setConsultSummery(e.target.value)
                                // }
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your thoughts here..."
                              ></textarea>
                            </div>

                            <div className="flex justify-end gap-5 mb-10 mt-2">
                              <button
                                onClick={() => setEditInfo(!editInfo)}
                                className="py-2 px-5  text-black bg-[#BEC0C2] hover:bg-[#a9abad] rounded-[5px]"
                              >
                                Cancel
                              </button>
                              <button
                                // onClick={() => handleConsultInfoEdit(cons_id )}
                                type="submit"
                                className="py-2 px-5 bg-[#446154] hover:bg-[#274b3b] text-white rounded-[5px]"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        )
                      )}
                    </div>
                  )}
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

            {/* experience form */}
            <div className="   border-2 mb-7 rounded-[5px]   bg-[#FFFFFF]  ">
              <div className="">
                <div>
                  <div className="flex justify-between border-b py-5 px-5">
                    <h1 className="text-xl font-bold   ">Experience</h1>
                    <button
                      onClick={() => setAddExperience(!addExperience)}
                      className="text-md font-bold px-5 py-2 rounded-[5px] text-white bg-[#446154]  "
                    >
                      Add Experience
                    </button>
                  </div>
                  {!addExperience ? (
                    <div className=" py-2 px-20   mt-5 ">
                      <p className="mb-10 mt-3 flex justify-center">
                        No experience to see here!
                      </p>
                    </div>
                  ) : (

                    <ExperienceForm setAddExperience={setAddExperience} addExperience={addExperience} />
                 
                  )}
                </div>
              </div>
            </div>
            <div className="   border-2  mb-7 rounded-[5px] bg-[#FFFFFF]  ">
              <div className="">
                <div>
                  <div className="flex justify-between border-b py-5 px-5">
                    <h1 className="text-xl font-bold   ">Qualifications</h1>
                    <button onClick={()=>setAddQualifications(!addQualifications)} className="text-md font-bold px-5  text-white py-2 rounded-[5px]  bg-[#446154]  ">
                      Add Qualification
                    </button>
                  </div>
                  {
                    !addQualifications ? 
                  <div className=" py-2 px-20   mt-5 ">
                    <p className="mb-10 mt-3 flex justify-center">
                      No Qualifications have been added.
                    </p>
                  </div>: <QualificationsForm setAddQualifications={setAddQualifications} addQualifications={addQualifications}
                />
                  }
                </div>
              </div>
            </div>
            <div className=" border-2 mb-7 rounded-[5px]  bg-[#FFFFFF]  ">
              <div className="">
                <div>
                  <div className="flex justify-between py-5 px-5 border-b">
                    <h1 className="text-xl font-bold ">Publications</h1>
                    <button onClick={()=>setAddPublications(!addPublications)} className="text-md font-bold px-5 py-2 rounded-[5px] text-white bg-[#446154]  ">
                      Add Publication
                    </button>
                  </div>
                  {
                    !addPublications ? 
                  <div className=" py-2 px-20   mt-5 ">
                    <p className="mb-10 mt-3 flex justify-center">
                      No publications have been added.
                    </p>
                  </div>:<PublicationsForm setAddPublications={setAddPublications} addPublications={addPublications} />
                  }
                </div>
              </div>
            </div>
          </div>
          <div className=" card w-[300PX]  ">
            <div className="border-2  bg-[#FFFFFF] mt-8 rounded-[5px]">
              <p className="border-b-2 font-sans font-bold p-3 text-lg">
                Verifications
              </p>
              <div className="px-3 py-5">
                <div className="flex py-2  gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faUserGear}
                      className="w-5 h-5  text-[#BEC0C2] "
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex w-full">
                    <div className="w-[80%]">
                      <p className="font-sans">Preferred Consultant</p>
                    </div>
                    <div className="w-[20%]">
                      <p className="font-sans text-[#4F7FAA] hover:underline cursor-pointer">
                        Verify
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex py-2 gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="w-5 h-5  text-[#BEC0C2]  "
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex w-full">
                    <div className="w-[80%]">
                      <p className="font-sans">Identity Verified</p>
                    </div>
                    <div className="w-[20%]">
                      <p className="font-sans cursor-pointer text-[#4F7FAA] hover:underline">
                        Verify
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex py-2 gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faMoneyCheck}
                      className="w-5 h-5  text-[#BEC0C2]  "
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex w-full">
                    <div className="w-[80%]">
                      <p className="font-sans">Payment Verified</p>
                    </div>
                    <div className="w-[20%]">
                      <p className="font-sans cursor-pointer text-[#4F7FAA] hover:underline">
                        Verify
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex py-2  gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="w-5 h-5  text-[#84D8A2]  "
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex w-full">
                    <div className="w-[80%]">
                      <p className="font-sans ">Phone Verified</p>
                    </div>
                    <div className="w-[20%]">
                      <p className="font-sans cursor-pointer text-[#84D8A2] hover:underline">
                        Verified
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex py-2   gap-5 items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-5 h-5  text-[#84D8A2]  "
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex w-full">
                    <div className="w-[80%]">
                      <p className="font-sans ">Email Verified</p>
                    </div>
                    <div className="w-[20%]">
                      <p className="font-sans cursor-pointer text-[#84D8A2] hover:underline">
                        Verified
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 w-full bg-[#FFFFFF] mt-10 rounded-[5px]  ">
              <div className="flex justify-between border-b-2">
                <p className=" font-sans font-bold p-3 text-lg">Top Skills</p>
                <button className="bg-[#446154] text-white rounded-[5px] text-lg font-sans font-bold m-3 px-2 py-1">
                  Edit Skills
                </button>
              </div>
              <div className="px-3 ">
                <div className="pt-3">
                  <p className="font-sans cursor-pointer ">Website Design</p>
                </div>

                <div className="pt-3 pb-7">
                  <p className="font-sans hover:underline cursor-pointer">
                    Video Production
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 w-full bg-[#FFFFFF] mt-10 rounded-[5px] ">
              <p className="border-b-2 font-sans font-bold p-3 text-lg ">
                Browse Similar Consultant
              </p>
              <div className=" flex flex-col">
                <p className="mt-3 border-2 font-sans  mx-5 p-2 cursor-pointer">
                  Expert on prepare documents
                </p>
                <p className="mt-3 border-2 font-sans mx-5 p-2 cursor-pointer ">
                  Expert on proposal writing{" "}
                </p>

                <p className="mt-3 mb-7 font-sans border-2 p-2 mx-5 cursor-pointer">
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
