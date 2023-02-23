import React, { useState } from "react";

const ExperienceForm = ({setAddExperience,addExperience}) => {
  const [workingCheck, setWorkingCheck] = useState(false);
  return (
    <div className="w-full my-10">
      <form action="">
        <div className=" flex w-[96%] mx-5 ">
          <div className="w-full mx-2">
            <label
              htmlFor=""
              className=" text-gray-900 dark:text-gray-300 font-sans font-bold text-md mb-2"
            >
              {" "}
              Title
            </label>
            <input
              className="block h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 outline-none dark:focus:border-blue-500"
              type="text"
              placeholder="Enter your position or title"
            />
          </div>
          <div className="w-full mx-2">
            <label
              htmlFor=""
              className=" text-gray-900 dark:text-gray-300 font-sans font-bold text-md mb-2"
            >
              {" "}
              Company
            </label>
            <input
              className="block h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              type="text"
              placeholder="Enter company name"
            />
          </div>
        </div>
        <div className=" flex w-[96%] mx-5 ">
          <div className="w-full mx-2">
            <label
              htmlFor=""
              className=" text-gray-900 dark:text-gray-300 font-sans font-bold text-md mb-2"
            >
              {" "}
              Start
            </label>
            <input
              className="block h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
            />
          </div>
          <div className="w-full mx-2">
            <label
              htmlFor=""
              className=" text-gray-900 dark:text-gray-300 font-sans font-bold text-md mb-2"
            >
              {" "}
              End
            </label>
            <input
              disabled={workingCheck && "disabled"}
              className="block h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
            />
          </div>
        </div>
        <div
          className="w-21 mx-7 mt-5 flex  items-center "
          onClick={() => setWorkingCheck(!workingCheck)}
        >
          <input
            className="h-10 w-5  "
            type="checkbox"
            name=""
            id=""
            checked={workingCheck && "checked"}
          />
          <p className="center ml-1">I'm currently working here</p>
        </div>

        <div className="w-[95%] mx-6">
          <p className="font-sans mt-3  font-bold text-md mb-2">Summary</p>
          <textarea
            id="message"
            rows="8"
            name="consultantDoc"
            className="block p-2.5 w-full h-28 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Describe your work experience "
          ></textarea>
        </div>

        <div className=" w-[96%] flex justify-end gap-5 mb-10 mt-2">
          <button
            onClick={() => setAddExperience(!addExperience)}
            className="py-2 px-5  text-black bg-[#BEC0C2] hover:bg-[#a9abad] rounded-[5px]"
          >
            Cancel
          </button>
          <button
            onClick={() => setAddExperience(!addExperience)}
            type="submit"
            className="py-2 px-5 bg-[#446154] hover:bg-[#274b3b] text-white rounded-[5px]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
