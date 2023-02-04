import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../Image/logo-black.png';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import icon from '../../Image/google_Icon.png';
import auth from '../../firebase.init';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  
  if (gUser || user) {
    navigate('/');
  }

  console.log(gUser, user?.user?.email);

  return (
    <div className="App flex flex-col items-center sm:justify-center sm:pt-0 bg-gray-50 font-sans">
      <div className="w-full lg:px-20 py-4 lg:mt-20  overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg mb-16">
        <div>
          <img
            src={image}
            className="lg:w-[230px] md:w-[155px] md:h-9 lg:h-[65px] p-1 mt-10  lg:ml-[72px]"
            alt=""
          />
        </div>
        <p className="font-sans text-2xl my-4 text-black text-center">
          Welcome Back
        </p>

        <div className="form-control">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline font-sans bg-[#1E282D] text-white normal-case"
          >
            <img src={icon} className="w-5 mr-2 font-sans " alt="" />
            <p className="text-lg font-normal">Log In with google</p>
          </button>
        </div>
        <div className="divider my-5 font-sans">OR</div>

        <div className="my-8">
          <div className="flex flex-col items-start">
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              value={email}
              name="email"
              placeholder="Email or User name"
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400 input input-bordered "
            />
          </div>
        </div>

        <div className="my-10">
          <div className="flex flex-col items-start">
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400 input input-bordered "
            />
          </div>
          <div className="flex items-center mt-10 justify-between">
            <div class="flex items-center ">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                required
                className="w-4 h-4 text-[#1E282D] bg-gray-100 border-gray-300 rounded focus:[#1E282D] dark:focus:[#1E282D] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="link-checkbox"
                className="ml-2 text-sm font-sans text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="font-sans text-[#3A73CB]">Forgot password?</div>
          </div>
          {error && <p className="text-red-500">Error: {error.message}</p>}
          <button
            className=" bg-[#304F40] font-sans rounded-md text-white text-lg p-3 w-full mt-10 mb-3"
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            Log In
          </button>
          <p className="border-b-2 my-5"></p>

          <p className=" text-sm label-text-alt  text-center my-3 font-sans">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="hover:underline text-[#3A73CB]  font-sans "
            >
              {' '}
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
