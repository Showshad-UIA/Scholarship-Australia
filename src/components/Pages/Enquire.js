import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import Enquiry_Banner from "./Enquiry_Banner";

const Enquire = ({ external }) => {
  const form = useRef();
  const [countryName, setCountryName] = useState([]);
  const [sentEmail, setSentEmail] = useState(false);
  const { enquireId } = useParams();
  const NumberEnq = parseInt(enquireId);
  const [specificData, setSpecificData] = useState([]);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ncu171w",
        "template_zq77qvv",
        form.current,
        "Ep_VjQV8xTJcGJlYa"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mail successfully sent");
          setSentEmail(!sentEmail);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/Masum-WebD/my-fakedata-json/main/scholarshipsUniversity.json`
    )
      .then((res) => res.json())
      .then((data) => setSpecificData(data.filter((d) => d.id === NumberEnq)));
  }, [NumberEnq]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Masum-WebD/my-fakedata-json/main/allCountryNameWithAlphabetical.json"
    )
      .then((res) => res.json())
      .then((data) => setCountryName(data));
  }, []);
  // console.log(countryName);
  return (
    <>
      {/* <div className={sentEmail && 'hidden'}> */}
      <div className={sentEmail && "hidden"}>
        <Enquiry_Banner></Enquiry_Banner>
      </div>
      {specificData.map(({ uniName, scholarQuality, levelStudy }) => (
        <div className=" lg:mb-28 ">
          <div className="mx-auto container">
            <div
              className={
                sentEmail
                  ? "hidden"
                  : "w-full  py-4 mt-6 items-center lg:justify-center overflow-hidden bg-white  flex flex-col    pt-6  sm:justify-center sm:pt-0 "
              }
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                className=" w-full lg:w-[70%] shadow-md lg:px-10 font-sans"
              >
                <div>
                  <h1 className=" text-xl border-b-4 pb-2 border-[#304F40]  text-[#304F40] font-sans gap-1 flex font-bold ">
                    Application Assistance Enquire for
                    <span className="font-bold  text-white px-0.5 rounded bg-[#304F40]">
                      {" "}
                      {scholarQuality}
                    </span>
                  </h1>
                  <p className="font-sans mt-2 font-semibold text-[#304F40]">
                    Please answer the following questions and click on "Send
                    email" to submit your enquiry to our consultants. Fields
                    marked with * are required.
                  </p>
                </div>
                <div>
                  <p className=" mt-6 mb-2 text-[14px]  font-sans  tracking-wide text-gray-700  font-bold">
                    YOUR DETAILS
                  </p>
                </div>
                <div className="  flex flex-wrap -mx-3 mb-6 ">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-first-name "
                    >
                      First name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className=" border border-gray-300 appearance-none block w-full bg-gray-50 text-gray-700  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                      id="grid-first-name"
                      name="first_name"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-last-name"
                    >
                      Last name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                      id="grid-last-name"
                      name="last_name"
                      type="text"
                      required="required"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-first-name"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                      id="grid-first-name"
                      type="text"
                      name="email"
                      required="required"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-phone-number"
                    >
                      Mobile number
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                      id="grid-phone-number"
                      type="text"
                      name="mobile_number"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-nationality"
                    >
                      Nationality<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                        id="grid-state"
                        name="nationality"
                        required="required"
                      >
                        <option value="" className="  text-black  ">
                          Please select
                        </option>
                        {countryName.map((name) => (
                          <option
                            className="overflow-hidden overflow-y-scroll"
                            key={name.id}
                          >
                            {name?.name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-last-name"
                    >
                      Highest qualifications
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                        id="grid-state"
                        name="highest_qualifications"
                        required="required"
                      >
                        <option value="" className="  text-black  ">
                          Please select
                        </option>
                        <option>Bachelor</option>
                        <option>Master (Research)</option>
                        <option>Master (Coursework)</option>
                        <option>PhD</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-6 mb-2  text-[14px]  font-sans  tracking-wide text-gray-700  font-bold  ">
                  YOUR SCHOLARSHIP PREFERENCES
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-last-name"
                    >
                      Scholarship Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400 "
                      id="grid-state"
                      name="scholarship_name"
                      type="text"
                      value={scholarQuality}
                      required="required"
                    />
                    <p className="text-gray-600  italic"></p>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-first-name"
                    >
                      Level of study<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                      id="grid-first-name"
                      required="required"
                      name="level_study"
                      type="text"
                      placeholder=""
                      value={levelStudy}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-last-name"
                    >
                      Field of study<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                        id="grid-state"
                        required
                        name="field_study"
                      >
                        <option value="" className="  text-black  ">
                          Please select
                        </option>
                        <option className="my-1">
                          Agriculture and Veterinary Medicine
                        </option>
                        <option className="my-1">
                          Applied and Pure Sciences
                        </option>
                        <option className="my-1">
                          Architecture and Construction
                        </option>
                        <option className="my-1">
                          Business and Management
                        </option>
                        <option className="my-1">
                          Computer Science and IT
                        </option>
                        <option className="my-1">
                          Creative Arts and Design
                        </option>
                        <option className="my-1">Engineering</option>
                        <option className="my-1">Education and Training</option>
                        <option className="my-1">Humanities</option>
                        <option className="my-1">Health and Medicine</option>
                        <option className="my-1">Travel and Hospitality</option>
                        <option className="my-1">
                          Social Studies and Media
                        </option>
                        <option className="my-1">Law</option>
                        <option className="my-1">MBA</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  font-sans  tracking-wide text-gray-700  font-bold  ">
                  When do you intend to apply for the scholarship?
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-year"
                    ></label>
                    <div className="relative">
                      <select
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                        id="grid-state"
                        name="year"
                        required
                      >
                        <option value="" className="  text-black  ">
                          Select year
                        </option>
                        <option>2026</option>
                        <option>2025</option>
                        <option>2024</option>
                        <option>2023</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                      for="grid-month"
                    ></label>
                    <div className="relative">
                      <select
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                        id="grid-state"
                        name="month"
                        required
                      >
                        <option value="" className="  text-black  ">
                          Select month
                        </option>
                        <option className="my-1">January</option>
                        <option className="my-1">February</option>
                        <option className="my-1">March</option>
                        <option className="my-1">April</option>
                        <option className="my-1">May</option>
                        <option className="my-1">June</option>
                        <option className="my-1">July</option>
                        <option className="my-1">August</option>
                        <option className="my-1">September</option>
                        <option className="my-1">October</option>
                        <option className="my-1">November</option>
                        <option className="my-1">December</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div>
                    <label
                      for="message"
                      class="block font-sans  tracking-wide text-gray-700  font-bold mb-2"
                    >
                      Message to scholarship consultant. Please detail what
                      assistance you are seeking for your scholarship
                      application.
                    </label>
                    <textarea
                      value=""
                      required
                      id="message"
                      name="message"
                      rows="4"
                      class="block p-2.5 lg:h-52 w-full text-sm appearance-none  bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div> */}
                <div>
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Message to scholarship consultant. Please detail what
                    assistance you are seeking for your scholarship application.
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 mt-3 mb-4 bg-[#304F40] text-white rounded"
                >
                  Send Email
                </button>
              </form>
            </div>

            {/* this part for successfully sending mail */}
            {sentEmail && (
              <div className="h-[400px] text-center items-center justify-center">
                <div>
                  <h1 className=" text-xl border-b-4 pb-2 border-[#304F40]  text-[#304F40] font-sans gap-1 flex font-bold ">
                    Application Assistance Enquire for
                    <span className="font-bold  text-white px-0.5 rounded bg-[#304F40]">
                      {" "}
                      {scholarQuality}
                    </span>
                  </h1>
                </div>
                <p>Thank you for your application</p>

                <button onClick={() => navigate("/")}> back to home </button>
              </div>
            )}
          </div>
        </div>
      ))}
      {/* </div> */}
    </>
  );
};

export default Enquire;
