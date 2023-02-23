import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import icon from '../../Image/google_Icon.png';
import useFirebase from '../../Hooks/useFirebase';
import { useForm } from 'react-hook-form';
import image from '../../Image/logo-black.png';

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

  console.log(gError, error);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // const onSubmit = async data => {
  //   fetch('https://scolarshipsaustralia.up.railway.app/api/users', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       userName: data.name,
  //       email: data.email,
  //       password: data.password,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));

  //   await createUserWithEmailAndPassword(data.email, data.password);
  //   // await updateProfile({ displayName: data.name });
  //   reset();
  // };
  const onSubmit = async data => {
    fetch('http://localhost:5000/api/users/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_name: data.name,
        user_email: data.email,
        user_pass: data.password,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));

    await createUserWithEmailAndPassword(data.email, data.password);
    // await updateProfile({ displayName: data.name });
    reset();
  };

  if (gUser || user) {
    navigate('/jobChoices');
  }
  console.log(user);

  return (
    <div className="flex flex-col items-center sm:justify-center sm:pt-0 bg-gray-50 font-sans ">
      <div className="flex justify-center items-center lg:mt-20 w-full  py-4  overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg mb-5">
        <div className="card flex lg:w-96 px-5 w-[350px]  mb-5">
          <div>
            {' '}
            <img
              src={image}
              className="lg:w-[225px] md:w-[155px] md:h-9 lg:h-[65px] p-1 mt-10  lg:ml-[60px]"
              alt=""
            />
          </div>

          <p className="text-center my-8 font-semibold  mt-3 text-[22px]">
            Sign Up
          </p>

          <div className="form-control">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline rounded-sm font-sans bg-[#1E282D] text-white normal-case  "
            >
              <img src={icon} className="w-5   mr-2 font-sans " alt="" />
              <p className="font-bold text-[20px] ">Continue with Google</p>
            </button>
          </div>

          <div className="divider mt-5 font-sans">OR</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mt-3">
              <input
                type="text"
                placeholder="User name"
                className="input input-bordered rounded-sm  text-sm  text-black"
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

            <div className="form-control mt-4">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered rounded-sm  text-sm  text-black "
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
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered  rounded-sm font-sans text-black"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                  minLength: {
                    value: 9,
                    message: 'Minimum 9 characters required',
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
            <div class="flex items-center gap-2 ">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-5   h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="link-checkbox"
                class=" text-j text-sm font-medium mt-5 text-gray-900 dark:text-gray-300"
              >
                I agree to the Scholarships Australia {}
                <a
                  href="#"
                  class="text-[#3A73CB] dark:text-blue-500 mr-1 underline"
                >
                  User Agreement
                </a>
                and
                <a
                  href="#"
                  class="text-[#3A73CB] dark:text-blue-500 mx-1 underline"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <input
              type="submit"
              value="Join Scholarships Australia"
              className="bg-[#304F40] px-2 cursor-pointer text-[20px] font-bold rounded-sm my-5 text-white p-2 w-full"
            />
            <p className="border-b-2  border-gray-300"></p>

            <p className=" text-sm label-text-alt text-center  my-5 font-sans">
              Already have an account?{' '}
              <Link
                to="/login"
                className="hover:underline font-sans cursor-pointer text-[#3A73CB]"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
