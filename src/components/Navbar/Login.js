import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import icon from '../../Image/google_Icon.png';
const auth = getAuth(app);

const Login = () => {
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
            <div onClick={() => signInWithGoogle()} className="my-6 space-y-2">
              <button
                aria-label="SignUp with Google"
                type="button"
                className="flex items-center justify-center  p-2 space-x-4 appearance-none w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
              >
                <img
                  className="w-5 h-5 fill-current "
                  src={icon}
                ></img>

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
