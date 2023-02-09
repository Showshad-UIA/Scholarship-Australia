import React, { useEffect, useState } from 'react';
import ExternalBanner from '../Banner/ExternalBanner';
import photo from '../../Image/photo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useUsers from '../../Hooks/useUsers';

const Profile = () => {
  const [user] = useAuthState(auth);
  const {usersget}=useUsers();
  const [consultantInfo,setConsultantInfo]=useState([])

  useEffect(()=>{
    if(user){
      fetch(`https://scolarshipsaustralia.up.railway.app/api/consultantInfo/?email=${user.email}`)
      .then(res=>res.json())
      .then(data =>setConsultantInfo(data.data));
    }
  },[user])





  return (
    <div>
      <ExternalBanner></ExternalBanner>

      <div className="container mx-auto text-md my-5 py-5 ">
        <div className="lg:mx-28  shadow-lg border-2   ">
          <div className="flex gap-5 px-5">
            <div>
              <img src={photo} className="py-2"></img>
            </div>

            <div>
              <h1 className="text-xl font-bold">
                {
                  usersget.map(({userName})=><><p>{userName}</p></>)
                }
                
              </h1>
              <div className="shadow-lg py-2 px-20 border-2 border-l-4 border-l-[#446154]">
                <h1 className="font-bold">Email verification required</h1>
                <p className="mb-10 mt-3">
                  Please click on the link in the verification email we sent to
                  shadbd2021@gmail.com to activate your account and continue
                  posting your project.
                </p>
                <div className="flex gap-5 ">
                  <button className="p-2 bg-[#446154] rounded-md text-white">
                    Resend Email
                  </button>
                  <button className="p-2 bg-[#446154] text-white rounded-md">
                    Change Email Address
                  </button>
                  <button className="p-2 bg-[#446154] text-white rounded-md">
                    Contact Us
                  </button>
                </div>
              </div>
              {
                consultantInfo.map(({profession,summery})=><>
                <div className="my-5">
                <label
                  for="message"
                  class="font-sans  tracking-wide text-gray-700  font-bold"
                >
                  Professional Headline
                </label>
                <textarea
                  id=""
                  rows=""
                  name="message"
                   value={profession}
                  class="block p-2 py-5 text-md  w-full  font-sans bg-gray-50 rounded-lg border border-gray-300  focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // placeholder="Please detail what assistance you are seeking for your scholarship application...."
                ></textarea>
              </div>
              <div className="my-5">
                <label
                  for="message"
                  class="font-sans  tracking-wide text-gray-700  font-bold"
                >
                  Summary
                </label>
                <textarea
                  id=""
                  rows="4"
                  name="message"
                  value={summery}
                  class="block p-2 py-5 text-md  w-full  font-sans bg-gray-50 rounded-lg border border-gray-300  focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // placeholder="Please detail what assistance you are seeking for your scholarship application...."
                ></textarea>
              </div></>)
              }

              <div className="flex justify-end gap-5 mb-10">
                <button className="p-2 bg-[#446154] text-white rounded-md">
                  Cancel
                </button>
                <button className="p-2 bg-[#446154] text-white rounded-md">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-28  border-2   ">
          <div className="">
            <div>
              <h1 className="text-xl font-bold border-b-2 px-5 py-5">
                Reviews
              </h1>
              <div className="shadow-lg py-2 px-20 border-2  mt-5 ">
                <p className="mb-10 mt-3 flex justify-center">
                  No reviews to see here!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-28   border-2    ">
          <div className="">
            <div>
              <div className="flex justify-between py-5 px-5">
                <h1 className="text-xl font-bold   ">Experience</h1>
                <button className="text-md font-bold px-5 rounded-sm  text-white bg-[#446154]  ">
                  Add Experience
                </button>
              </div>
              <div className="shadow-lg py-2 px-20 border-2  mt-5 ">
                <p className="mb-10 mt-3 flex justify-center">
                  No experience to see here!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-28   border-2    ">
          <div className="">
            <div>
              <div className="flex justify-between py-5 px-5">
                <h1 className="text-xl font-bold   ">Qualifications</h1>
                <button className="text-md font-bold px-5 rounded-sm text-white  bg-[#446154]  ">
                  Add Qualifications
                </button>
              </div>
              <div className="shadow-lg py-2 px-20 border-2  mt-5 ">
                <p className="mb-10 mt-3 flex justify-center">
                  No Qualifications have been added.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-28   border-2    ">
          <div className="">
            <div>
              <div className="flex justify-between py-5 px-5">
                <h1 className="text-xl font-bold   ">Publication</h1>
                <button className="text-md font-bold px-5 rounded-sm text-white bg-[#446154]  ">
                  Add Publication
                </button>
              </div>
              <div className="shadow-lg py-2 px-20 border-2  mt-5 ">
                <p className="mb-10 mt-3 flex justify-center">
                  No publications have been added.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
