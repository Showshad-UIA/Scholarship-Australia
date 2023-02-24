import React from "react";

const QualificationsForm = ({addQualifications,setAddQualifications}) => {
  return (
    <div className="my-10 w-full">
      <form action="">
        <div className=" flex w-[96%] mx-5 ">
          <div className="w-full mx-2">
            <label
              htmlFor=""
              className=" text-gray-900 dark:text-gray-300 font-sans font-bold text-sm mb-2"
            >
              {" "}
              Professional Certificate or Award
            </label>
            <input
              className="block h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 outline-none dark:focus:border-blue-500"
              type="text"
              placeholder="Enter professional certificate or award"
            />
          </div>
          <div className="w-full mx-2">
            <label
              htmlFor=""
              className=" text-gray-900 dark:text-gray-300 font-sans font-bold text-sm mb-2"
            >
              {" "}
              Conferring Organization
            </label>
            <input
              className="block h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              type="text"
              placeholder="Enter conferring organization"
            />
          </div>
        </div>
        <div className="w-[95%] mx-6">
          <p className="font-sans mt-3  font-bold text-sm mb-2">Summary</p>
          <textarea
            id="message"
            rows="8"
            name="consultantDoc"
            className="block p-2.5 w-full h-28 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Describe your qualification "
          ></textarea>
        </div>
        
          <div className=" w-32 mx-6">
            <label
              htmlFor=""
              className=" text-gray-900 dark:text-gray-300 font-sans font-bold text-md mb-2"
            >
              {" "}
              Start Year
            </label>
            <input
             
              className="block h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="month"
            />
          </div>
          <div className=" w-[96%] flex justify-end gap-5 mb-10 mt-2">
          <button
           onClick={()=>setAddQualifications(!addQualifications)}
            className="py-2 px-5  text-black bg-[#BEC0C2] hover:bg-[#a9abad] rounded-[5px]"
          >
            Cancel
          </button>
          <button
           onClick={()=>setAddQualifications(!addQualifications)}
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

export default QualificationsForm;
