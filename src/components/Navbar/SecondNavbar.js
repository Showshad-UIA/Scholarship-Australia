import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const SecondNavbar = () => {
  const [nav, setNav] = useState(false);
  const [profileUser, setProfileUser] = useState(false);
  // const [user, signOut] = useAuthState(auth);
  const { user, handleSignOut } = useFirebase();

  return (
    <>
      <div className=" h-15  bg-[#fff] container mx-auto relative">
        <div className="flex justify-between items-center    py-2 lg:mx-32">
          <div className="md:flex hidden">
            <p className="mx-2   cursor-pointer">Hire a Consultant</p>
            <p className="mx-2   cursor-pointer">Become a Consultant </p>
          </div>

          <div className="md:flex hidden ">
            {user?.uid ? (
              <div x-data="{isOpen:true}" class="relative inline-block">
                <button
                  class="flex h-5   items-center justify-content-center rounded-lg bg-slate-900 text-slate-100 ring-slate-100 transition hover:shadow-md hover:ring-2 overflow-hidden"
                  // OnClick="isOpen=!isOpen"
                  onClick={() => setProfileUser(!profileUser)}
                >
                  <span
                    className="cursor-pointer px-10 py-5"
                    //  onClick={() => setProfileUser(!profileUser)}
                  >
                    {" "}
                    {user?.displayName}
                  </span>
                </button>

                {
                  profileUser && <div
                  x-show="isOpen"
                  x-transition=""
                  class="absolute right-0 mt-3 flex w-60 flex-col gap-3 rounded-xl bg-slate-900 p-4 text-slate-100 shadow-lg z-20"
                >
                  
                
              
                  <button class="flex justify-center gap-3 rounded-md bg-red-600 py-2 px-3 font-semibold hover:bg-red-500 focus:ring-2 focus:ring-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>

                }
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

            <button className="mx-2 px-1 rounded bg-[#304F40] text-white cursor-pointer">
              Post a Project{" "}
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
      {/* {profileUser && (
        <div className="absolute w-[200px] mt-5  h-60 bg-red-800 z-[10]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non
            nostrum accusantium dolorum nihil earum ex blanditiis temporibus
            doloribus facere eaque repudiandae voluptatem, nemo, obcaecati
            quisquam reiciendis esse saepe praesentium inventore delectus
            distinctio perferendis minus, exercitationem explicabo? Ex nulla
            maxime voluptatem, nobis officia facere debitis iusto alias incidunt
            doloribus officiis.
          </p>
          <button className="shadow px-1 " onClick={() => handleSignOut()}>
            Sign out
          </button>
        </div>
      )} */}
    </>
  );
};

export default SecondNavbar;
