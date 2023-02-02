import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import icon from '../../Image/google_Icon.png';
import useFirebase from '../../Hooks/useFirebase';
import { useForm } from 'react-hook-form';
import image from '../../Image/logo.png';

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import auth from '../../firebase.init';

// import app from './firebase.init';

const SignUp = () => {
  // const { signInWithGoogle } = useFirebase();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    // await updateProfile({ displayName: data.name });
    reset();
  };

  if (gUser || user) {
    navigate('/jobChoices');
  }
  return (
    <div className="flex flex-col items-center sm:justify-center sm:pt-0 bg-gray-50 font-sans ">
      <div className="flex justify-center items-center lg:mt-20 w-full px-6 py-4  overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg mb-5">
        <div className="card flex-shrink-0 lg:w-96 w-80  mb-5">
          <div>
            {' '}
            <img
              src={image}
              className="lg:w-[190px] md:w-[155px] md:h-9 lg:h-10 rounded cursor-pointer bg-[#1E282D] p-1 mt-5  lg:ml-[100px]"
              alt=""
            />
          </div>

          <p className="text-center font-semibold mt-3 underline text-2xl underline-offset-4 font-sans">
            Sign Up
          </p>

          <div className="card-body ">
            <div className="form-control">
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline font-sans bg-[#1E282D] text-white normal-case"
              >
                <img src={icon} className="w-5 mr-2 font-sans " alt="" />
                Continue with google
              </button>
            </div>

            <div className="divider my-5 font-sans">OR</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text font-sans">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered text-black"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required',
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div> */}

              <div className="form-control mt-5">
                {/* <label className="label">
                  <span className="label-text font-sans">Email</span>
                </label> */}
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered text-black "
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid email',
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control mt-5">
                {/* <label className="label">
                  <span className="label-text font-sans">Password</span>
                </label> */}
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered font-sans text-black"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Minimum 6 characters required',
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="flex items-center mt-5">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="link-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{' '}
                  <a
                    href="#"
                    class="text-[#304F40] dark:text-blue-500 mr-1 hover:underline"
                  >
                    agreement
                  </a>
                  and
                  <a
                    href="#"
                    class="text-[#304F40] dark:text-blue-500 mx-1 hover:underline"
                  >
                    policy
                  </a>
                  .
                </label>
              </div>

              <input
                type="submit"
                value="Join Scholarship Australia"
                className="bg-[#304F40]  font-sans rounded-md mt-5 text-white p-3 w-full"
              />
              <p className="border-b-2 mt-5 border-gray-300"></p>

              <p className=" text-sm label-text-alt text-center  my-3 font-sans">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="hover:underline font-sans text-[#304F40]"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
               
    </div>
  );
};

export default SignUp;
