import userEvent from '@testing-library/user-event';
import { getAuth, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../Hooks/useFirebase';

const auth = getAuth(app);

const SecondNavbar = () => {
  const [nav, setNav] = useState(false);
  // const [user, signOut] = useAuthState(auth);
  const { user, handleSignOut } = useFirebase();

  return (
    <div className=" h-10  bg-[#fff] container mx-auto">
      <div className="flex justify-between items-center    py-2 lg:mx-32">
        <div className="md:flex hidden ">
          <span> {user?.displayName && user.displayName}</span>
          {user?.uid ? (
            <button
              className="shadow px-1 font-bold"
              onClick={() => handleSignOut()}
            >
              Sign out
            </button>
          ) : (
            <Link className="mx-2  font-bold cursor-pointer" to="/login">
              Login
            </Link>
          )}
          <Link to="/signup" className="mx-2  font-bold cursor-pointer">
            SignUp
          </Link>
        </div>
        <div className="md:flex hidden">
          <p className="mx-2  font-bold cursor-pointer">Hire a Consultant</p>
          <p className="mx-2  font-bold cursor-pointer">Become a consultant </p>
        </div>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500 end py-2"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && <div></div>}
    </div>
  );
};

export default SecondNavbar;
