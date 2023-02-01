import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import icon from '../../Image/google_Icon.png';
import auth from '../../firebase.init';

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  return (
    

    <div className="App flex flex-col items-center sm:justify-center sm:pt-0 bg-gray-50 font-sans">
      <div className="w-full lg:px-20 py-4 lg:mt-20  overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg mb-16">
        <p className="flex justify-center items-center font-bold my-5  text-2xl  font-sans text-center">
          Sign In
        </p>
        <div className="form-control">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline font-sans normal-case"
          >
            <img src={icon} className="w-5 mr-2 font-sans " alt="" /> Sign In
            with google
          </button>
        </div>

        <div className="mt-4">
          <label className="label">
            <span className="label-text font-sans">Email</span>
          </label>
          <div className="flex flex-col items-start">
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              value={email}
              name="email"
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400 input input-bordered text-black"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="label">
            <span className="label-text font-sans">Password</span>
          </label>
          <div className="flex flex-col items-start">
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              name="password"
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-400 input input-bordered text-black"
            />
          </div>
          <button
            className=" bg-[#304F40] font-sans rounded-md text-white p-3 w-full mt-7 mb-3"
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            Sign In
          </button>

          <p className=" text-sm label-text-alt  mb-3 font-sans">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="hover:underline font-sans text-[#304F40]"
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
