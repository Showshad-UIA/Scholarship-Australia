import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useFirebase from '../../Hooks/useFirebase';
import userProfile from '../../Image/User.jpg';

const SecondNavbar = () => {
  const [nav, setNav] = useState(false);
  // const [user] = useAuthState(auth);
  const [profileUser, setProfileUser] = useState(false);
  const [user, signOut] = useAuthState(auth);
  // const { user, handleSignOut } = useFirebase();
  console.log(user);

  return (
    <>
      <div className=" h-15  bg-[#fff] container mx-auto relative ">
        <div className="flex justify-between items-center    py-2 lg:mx-32">
          <div className="md:flex hidden">
            <p className="mx-2   cursor-pointer">Hire a Consultant</p>
            <p className="mx-2   cursor-pointer">Become a Consultant </p>
          </div>

          <div className="md:flex hidden ">
            {user?.uid ? (
              <div x-data="{isOpen:true}" class="relative inline-block">
                <button
                  class="flex    items-center justify-content-center rounded-lg text-black transition overflow-hidden "
                  // OnClick="isOpen=!isOpen"
                  onClick={() => setProfileUser(!profileUser)}
                >
                  {/* <span
                    className="cursor-pointer px-10 py-5"
                   
                  >
                    {' '}
                    {user?.displayName}
                  </span> */}
                  <div className="items-center">
                    <div class="avatar">
                      <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={
                            user?.user?.photoURL
                              ? user?.user?.photoURL
                              : userProfile
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    {/* <IoIosArrowDown className="text-lg font-bold ml-2" /> */}
                              
                  </div>
                </button>

                {profileUser && (
                  <div
                    x-show="isOpen"
                    x-transition=""
                    class="absolute left-2 mt-3 flex w-60 flex-col gap-3  text-black bg-white p-4   z-20"
                  >
                    <div className="flex-none">
                      <ul className="menu menu-vertical px-1 font-sans hover:bg-none">
                        <p className="px-4 font-sans font-bold">Account</p>
                        <li>
                          <a className="font-sans">View profile</a>
                        </li>
                        <li>
                          <a className="font-sans">Settings</a>
                        </li>
                        <li>
                          <a className="font-sans">Memberships</a>
                        </li>
                        <li>
                          <a
                            className="font-sans"
                            onClick={() => signOut(auth)}
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // <span
              //   className="cursor-pointer "
              //   onClick={() => setProfileUser(!profileUser)}
              // >
              //   {" "}
              //   {user?.displayName}
              // </span>
              // <button
              //   className="shadow px-1 "
              //   onClick={() => handleSignOut()}
              // >
              //   Sign out
              // </button>
              <>
                <Link className="mx-5   cursor-pointer" to="/login">
                  Log In
                </Link>
                <Link to="/signup" className="mx-5   cursor-pointer">
                  Sign Up
                </Link>
              </>
            )}

            <button className="mx-2 px-1 rounded bg-[#DA2B81] text-white cursor-pointer">
              Post a Project{' '}
            </button>
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
    </>
  );
};

export default SecondNavbar;
