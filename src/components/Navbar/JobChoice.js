import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUsers from '../../Hooks/useUsers';

const JobChoice = () => {
  const [dataValue, setDataValue] = useState('');
  const navigate = useNavigate();
  const {userId}=useUsers()
  console.log(dataValue);
  const chooseOptions = [
    {
      id: 1,
      img: 'https://i.postimg.cc/yxKDL9QJ/consultant.png',
      option: 'I’m a Consultant to help the students',
      value: 'Join as consultant',
    },
    {
      id: 2,
      img: 'https://i.postimg.cc/qvPBR1Mn/student.jpg',
      option: 'I’m a student, I need application help ',
      value: 'Apply as Student',
    },
  ];
  const handleService = () => {
    if (dataValue === 'Join as consultant') {
      navigate('/consultant');
    } else if (dataValue === 'Apply as Student') {
      navigate('/');
    }
  };
  const handleUserType =()=>{
    // const userType ={dataValue === 'Join as consultant'? 1:2}
    fetch('http://localhost:5000/api/usersTypes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_id:userId,
        user_type:dataValue === 'Join as consultant'? 1:2
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }



  return (
    <div className="container mx-auto">
      <div className="shadow-md rounded-md border-2 lg:mx-60 my-20">
        <div className="mt-10">
          <h1 className="mt-3  mb-10 font-sans text-center  font-bold text-2xl ">
            Join as a consultant or student
          </h1>

          <div className="flex flex-wrap w-full justify-around mb-5 pb-5 ">
            {chooseOptions.map(({ img, option, value }) => (
              <div
                onClick={() => setDataValue(value)}
                className="shadow-md p-5 border-2  hover:border-[#304F40] focus:outline-none focus:ring focus:ring-violet-300 
      "
              >
                <img
                  src={img}
                  className="w-20 h-20 flex justify-center font-sans mb-4 text-white"
                ></img>
                {/* <input
                  type="radio"
                  name="topping"
                  value="Regular"
                  id="regular"
                /> */}

                <label htmlFor="regular" className="px-2 font-sans">
                  <span className="">{option}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-center " onClick={handleService}>
            {dataValue ? (
              <button onClick={handleUserType} className="bg-[#304F40] w-md font-sans rounded-md text-white p-3  mt-3 px-10   mb-3">
                {dataValue}
              </button>
            ) : (
              <button
                disabled
                className="bg-[#304F40] cursor-not-allowed opacity-60 w-md font-sans rounded-md text-white p-3  mt-3 px-10   mb-3"
              >
                Create Account
              </button>
            )}
          </div>
          <p>
            <Link to="/login">
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
