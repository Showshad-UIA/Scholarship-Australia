import React from 'react';
import consultant from "../../Image/consultant.png"
import student from "../../Image/student.jpg"

const JobChoice = () => {
  return (
    <div className="shadow-md rounded border-2  my-20">
      <h1 className="mt-3  mb-10 font-sans text-2xl ">
        Join as a consultant or student
      </h1>
      <div className="flex justify-around mb-5 pb-5 ">
        <div
          className="shadow-md p-5 border-focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      "
        >
          <img
            src={consultant}
            className="w-24 h-20 flex justify-center text-white"
          ></img>
          <input type="radio" name="topping" value="Regular" id="regular" />
          <label htmlFor="regular" className="px-2 font-sans">
            I’m a Consultant to help the students
          </label>
        </div>

        <div className="shadow-md p-5">
          <img
            src={student}
            className="w-20 h-20 flex justify-center bg-[#304F40]"
          ></img>
          <input type="radio" name="topping" value="Medium" id="medium" />
          <label htmlFor="medium" className="px-2 font-sans">
            I’m a Student, I need help for application
          </label>
        </div>
      </div>
      <button className=" bg-[#304F40] font-sans rounded-md text-white p-3 mb-3">
        Join as
      </button>
    </div>
  );
};

export default JobChoice;
