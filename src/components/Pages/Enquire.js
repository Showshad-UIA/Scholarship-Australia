import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Enquire = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ncu171w',
        'template_zq77qvv',
        form.current,
        'Ep_VjQV8xTJcGJlYa'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const { enquireId } = useParams();
  const NumberEnq = parseInt(enquireId);
  const [specificData, setSpecificData] = useState([]);

  // const { uniName } = specificData;
  // console.log(enquireId)

  // const fakedaSpecific =JSON.parse("fakedata.json")
  // console.log(fakedaSpecific)
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/Masum-WebD/my-fakedata-json/main/scholarshipsUniversity.json`
    )
      .then(res => res.json())
      .then(data => setSpecificData(data.filter(d => d.id === NumberEnq)));
  }, [NumberEnq]);
  console.log(specificData);
  return (
    <>
      {specificData.map(({ uniName, scholarQuality, levelStudy }) => (
        <div className=" lg:mb-28 ">
          <div className="mx-auto container">
            <div className="w-full  py-4 mt-6 items-center lg:justify-center overflow-hidden bg-white  flex flex-col    pt-6  sm:justify-center sm:pt-0 ">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="border-t-4 border-[#304F40] w-full lg:w-[60%] shadow-md px-5 py-3 font-sans"
              >
                <div>
                  <h1 className=" text-xl text-[#304F40] font-sans font-bold">
                    Application Assistance Enquiry for
                    <span className="font-bold text-[#304F40]">
                      {' '}
                      {scholarQuality}
                    </span>
                  </h1>
                  <p className="font-sans mt-3 font-semibold text-[#304F40]">
                    Please answer the following questions. Click on the
                    &quot;Submit Final Application&quot; link to submit your
                    application. Fields marked with * are required.
                  </p>
                </div>
                <div>
                  <p className="mt-6 mb-3 text-[#304F40] text-md font-bold font-sans">
                    YOUR DETAILS
                  </p>
                </div>
                <div className="  flex flex-wrap -mx-3 mb-6 ">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name "
                    >
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-first-name"
                      name="first_name"
                      type="text"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      name="last_name"
                      type="text"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-first-name"
                      type="text"
                      name="email"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block font-sans  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-phone-number"
                    >
                      Mobile phone number
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-phone-number"
                      type="text"
                      name="mobile_number"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 ">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Nationality<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full text-xs bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-sans"
                        id="grid-state"
                        name="nationality"
                      >
                        <option className=" font-bold text-black disabled">
                          Select country
                        </option>
                        <option>Australia</option>
                        <option>Usa</option>
                        <option>Japan</option>
                        <option>Canada</option>
                        <option>Sweden</option>
                        <option>Norway</option>
                        <option>New zealand</option>
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>Malaysia</option>
                        <option>Uk</option>
                        <option>Germany</option>
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
                      className="block font-sans  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Highest qualifications
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full text-xs bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-sans"
                        id="grid-state"
                        name="highest_qualifications"
                      >
                        <option className=" font-bold text-black disabled">
                          Select your qualifications
                        </option>
                        <option>Bachelor</option>
                        <option>Master(research)</option>
                        <option>Master(coursework)</option>
                        <option>PHd</option>
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
                <div className=" font-sans text-[#304F40] font-bold text-md mt-6 mb-3 ">
                  YOUR SCHOLARSHIP PREFERENCES
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block font-sans  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Scholarship Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      name="scholarship_name"
                      type="text"
                      value={scholarQuality}
                      placeholder=""
                      required
                    />
                    <p className="text-gray-600 text-xs italic"></p>
                  </div>
                </div>
                {/* <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block font-sans tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Type of scholarship<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="text"
                      placeholder=""
                      required
                    />
                    <p className="text-gray-600 text-xs italic"></p>
                  </div>
                </div> */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Level of study<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-first-name"
                      name="level_study"
                      type="text"
                      placeholder=""
                      value={levelStudy}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Field of study<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full text-xs bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-sans"
                        id="grid-state"
                        name="field_study"
                      >
                        <option className=" font-bold text-black disabled">
                          Select your study
                        </option>
                        <option>Agriculture and Veterinary Medicine</option>
                        <option>Applied and Pure Sciences</option>
                        <option>Architecture and Construction</option>
                        <option>Business and Management</option>
                        <option>Computer Science and IT</option>
                        <option>Creative Arts and Design</option>
                        <option>Engineering</option>
                        <option>Education and Training</option>
                        <option>Humanities</option>
                        <option>Health and Medicine</option>
                        <option>Travel and Hospitality</option>
                        <option>Social Studies and Media</option>
                        <option>Law</option>
                        <option>MBA</option>
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
                <div className="text-[#304F40] my-3 font-sans text-md font-bold">
                  When do you intend to apply for the scholarship?
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block font-sans  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-year"
                    >
                    
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full text-xs bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-sans"
                        id="grid-state"
                        name="year"
                      >
                        <option className=" font-bold text-black disabled">
                          Select a Year
                        </option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
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
                      className="block font-sans  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-month"
                    >
                     
                      
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full text-xs bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-sans"
                        id="grid-state"
                        name="month"
                      >
                        <option className=" font-bold text-black disabled">
                          Select a month
                        </option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
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

                <div>
                  <label
                    for="message"
                    class="block text-[#304F40] mb-2 text-sm  font-sans font-bold dark:text-white"
                  >
                    Message to scholarship consultant. Please detail what
                    assistance you are seeking for your scholarship application.
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="block p-2.5 lg:h-52 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 mt-3 bg-[#304F40] text-white rounded"
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Enquire;
