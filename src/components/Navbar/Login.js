import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
const auth = getAuth(app);
const Login = () => {
  // const { signInWithGoogle } = useFirebase();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  return (
    <div className="">
      <div className="flex flex-col items-center sm:justify-center sm:pt-0 bg-gray-50 ">
        <div className="mt-5">
          <a href="/">
            <h3 className="text-4xl font-bold font-sans text-[#304F40]">
              Login
            </h3>
          </a>
        </div>

        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg mb-10">
          <form>
            <div onClick={() =>signInWithGoogle()} className="my-6 space-y-2">
              <button
                aria-label="SignUp with Google"
                type="button"
                className="flex items-center justify-center  p-2 space-x-4 appearance-none w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current text-red-400"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p className="font-sans">Login with Google</p>
              </button>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full" />
              <p className="px-3 font-sans">OR</p>
              <hr className="w-full" />
            </div>

            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium font-sans text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium font-sans text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#304F40] font-sans rounded-md hover:bg-[#1E282D]  focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-[#304F40] font-sans">
            Don't have an account?{' '}
            <span>
              <Link
                to="/signup"
                className="text-[#304F40] font-sans hover:underline"
              >
                SignUp
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
