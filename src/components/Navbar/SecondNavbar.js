import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const SecondNavbar = () => {
    const [nav,setNav]=useState(false)
    return (
        <div className=' h-10  bg-[#fff] container mx-auto'>
        <div className='flex justify-between items-center    py-2 lg:mx-32'>

         
        <div className='md:flex hidden '>
            <p className='mx-2  font-bold cursor-pointer'>Login</p>
            <p className='mx-2  font-bold cursor-pointer'>Sign Up</p>
            <p className='mx-2  font-bold cursor-pointer'>Post your Scholarship Query</p>
           
        </div>
        <div className='md:flex hidden'>
        <p className='mx-2  font-bold cursor-pointer'>Hire a Consultant</p>
            <p className='mx-2  font-bold cursor-pointer'>Become a consultant </p>
        </div>
        </div>
        <div onClick={() =>setNav(!nav)}className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500 end py-2">
            {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}    
        </div>
        {
            nav && <div>

            </div>
        }
    </div>
    );
};

export default SecondNavbar;
