import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import icon from '../../Image/google_Icon.png';
import useFirebase from '../../Hooks/useFirebase';
import { useForm } from 'react-hook-form';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

// import app from './firebase.init';
const auth = getAuth(app);
const SignUp = () => {
  const { signInWithGoogle } = useFirebase();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
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

  return (
    <div className="flex flex-col items-center sm:justify-center sm:pt-0 bg-gray-50 font-sans ">
      {/* <PageTitle title="Sign Up" /> */}
      <div className="flex justify-center items-center  w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg mb-10">
        <div className="card flex-shrink-0 lg:w-96 w-80 mt-24 mb-12">
          <p className="text-center font-bold mt-3 underline text-2xl underline-offset-4 font-sans">
            Sign Up
          </p>

          <div className="card-body ">
            <div className="form-control">
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline text-neutral hover:text-neutral"
              >
                <img src={icon} className="w-5 mr-2 font-sans" alt="" />{' '}
                Continue with google
              </button>
            </div>

            <div className="divider font-sans">OR</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-sans">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
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
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-sans">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-sans">Password</span>
                </label>
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

              <input
                type="submit"
                value="Sign Up"
                className="bg-[#304F40] font-sans rounded-md text-white p-3 w-full mt-3"
              />
              <Link
                to="/login"
                className="text-center text-sm label-text-alt link link-hover mt-2 font-sans"
              >
                Already have an account? Login
              </Link>
            </form>
          </div>
        </div>
      </div>
               
    </div>
  );
};

export default SignUp;
