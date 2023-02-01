import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const JobChoice = () => {
  const [dataValue, setDataValue] = useState('');
  console.log(dataValue);
  const chooseOptions = [
    {
      id: 1,
      img: 'https://i.postimg.cc/yxKDL9QJ/consultant.png',
      option: 'I’m a Consultant to help the students',
      value: 'Consultant',
    },
    {
      id: 2,
      img: 'https://i.postimg.cc/qvPBR1Mn/student.jpg',
      option: ' I’m a Student, I need help for application',
      value: 'Student',
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="shadow-md rounded-md border-2 lg:mx-60 my-20">
        <div className="mt-10">
          <h1 className="mt-3  mb-10 font-sans text-center  font-bold text-2xl ">
            Join as a consultant or student
          </h1>

          <div className="flex flex-wrap  justify-around mb-5 pb-5 ">
            {chooseOptions.map(({ img, option, value }) => (
              <div
                onClick={() => setDataValue(value)}
                className="shadow-md p-5 border-2  hover:border-[#304F40] active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 
      "
              >
                <img
                  src={img}
                  className="w-20 h-20 flex justify-center font-sans mb-4 text-white"
                ></img>
                <input
                  type="radio"
                  name="topping"
                  value="Regular"
                  id="regular"
                />
                <label htmlFor="regular" className="px-2 font-sans">
                  <span className="">{option}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-center ">
            <button className="bg-[#304F40] w-md font-sans rounded-md text-white p-3  mt-3 px-10   mb-3">
              Join as {dataValue}
            </button>
          </div>
          <p>
            <Link to="/signin">
              <p className=" text-sm label-text-alt  text-center mb-3 font-sans">
                Don't have an account?{' '}
                <span className="hover:underline text-[#304F40] font-sans">
                  Sign In
                </span>
              </p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobChoice;
