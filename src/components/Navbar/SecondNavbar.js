import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useFirebase from '../../Hooks/useFirebase';
import useUsers from '../../Hooks/useUsers';
import userProfile from '../../Image/User.jpg';
import "../../styles/secondNavber/secondNavbar.css"

const SecondNavbar = () => {
  const [nav, setNav] = useState(false);
  const [profileUser, setProfileUser] = useState(false);
  const [user] = useAuthState(auth);
  // const [usersget,setUsersGet]=useState([])
  const { handleSignOut } = useFirebase();
  // console.log(user,usersget);
  const { usersget} = useUsers();
  
  return (
    <>
      <div className=" h-15  bg-[#F7F7F7] container mx-auto   ">
        <div className="flex justify-between items-center    py-2 lg:mx-32">
          <div className="md:flex hidden">
            <a className="mx-2   cursor-pointer">Hire a Consultant</a>
            <a href="/consultant" className="mx-2   cursor-pointer">
              Become a Consultant{' '}
            </a>
          </div>

          <div
            className={
              user?.uid
                ? 'flex flex-row-reverse items-center justify-center '
                : 'md:flex hidden items-center justify-center '
            }
          >
            {user?.uid ? (
              <div x-data="{isOpen:true}" className="relative inline-block">
                <button
                  class="flex    items-center justify-content-center rounded-[3px] text-black transition overflow-hidden "
                  onClick={() => setProfileUser(!profileUser)}
                >
                  <div className="items-center justify-center  ">
                    <div className="avatar gap-2">
                      <div className="w-8 ">
                        <img
                          className="mt-1 "
                          src={user?.photoURL ? user?.photoURL : userProfile}
                          alt=""
                        />
                      </div>{' '}
                      <p className="flex items-center justify-center">
                        {user?.displayName ? (
                          user?.displayName
                        ) : (
                          <>
                            {usersget?.map(({ user_name }) => (
                              <>
                                <p>{user_name} </p>
                              </>
                            ))}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </button>

                {profileUser && (
                  <div>
                    <div className="group hover:visible dropdownProfile absolute left-[-5] mt-5 flex w-60 flex-col gap-3  text-black bg-white p-4   z-20">
                      <ul className="flex flex-col gap-3 px-1 font-sans ">
                        <p className=" font-sans font-bold ">Account</p>
                        <li>
                          <a
                            className="font-sans hover:text-[#6CA0F3]"
                            href="/profile "
                          >
                            View profile
                          </a>
                        </li>
                        <li>
                          <a
                            className="font-sans hover:text-[#6CA0F3]"
                            href=" "
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="font-sans hover:text-[#6CA0F3]"
                            href=" "
                          >
                            Memberships
                          </a>
                        </li>
                        <li>
                          <a
                            className="font-sans hover:text-[#6CA0F3]"
                            onClick={() => handleSignOut()}
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
              <>
                <Link className="mx-5   cursor-pointer" to="/login">
                  Log In
                </Link>
                <Link to="/signup" className="mx-5   cursor-pointer">
                  Sign Up
                </Link>
              </>
            )}

            <button className="mx-2 px-2 py-1 rounded bg-[#DA2B81] text-white cursor-pointer">
              <Link to="/student">Post a Project</Link>
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
