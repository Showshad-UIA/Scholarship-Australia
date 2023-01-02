import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const SecondNavbar = () => {
    const [nav,setNav]=useState(false)
    return (
        <div className=' h-10  bg-[#fff]'>
        <div className='flex justify-between items-center  mx-12  py-2'>

         
        <div className='md:flex hidden '>
            <p className='mx-2  font-bold cursor-pointer'>Login</p>
            <p className='mx-2  font-bold cursor-pointer'>Sign Up</p>
            <p className='mx-2  font-bold cursor-pointer'>post your ScholarShip</p>
        </div>
        <div className='md:flex hidden'>
            <p className='mx-2  font-bold cursor-pointer'>Hire a consultant </p>
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
