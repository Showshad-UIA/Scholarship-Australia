import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Consultant = () => {
  const [consultSummery, setConsultSummery] = useState('');
  const [proHeadline, setProHeadline] = useState('');
  const [infoError,setInfoError]=useState('');
  const [user] = useAuthState(auth);
  const navigate=useNavigate()

  // console.log(user.email);
  const handleConsultant= () => {
    fetch("http://localhost:5000/api/consultantInfo",{
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        profession:proHeadline,
        summery:consultSummery,
        user_email:user?.email
      })
    }) 
    .then(res=>res.json())
    .then(data=>{
      if(data.status === 'success'){
        setConsultSummery('')
        setProHeadline('')
        navigate("/profile")
        toast.success(data.message)
      }
      else{
        setInfoError(data?.error)
        // console.log(data.error)
      }
    });

  };

  return (
    <div className="mx-auto container my-10 ">
      <div className="mx-[300px] shadow-lg border-2 px-6">
        <p className=" font-sans font-bold text-2xl my-3 text-[#304F40]">
          Consultant Details{' '}
        </p>
        <p className="font-bold font-sans text-xl mt-10">
          Tell us about your scholarship application assistance experience.
        </p>
        <p className="font-sans mt-3">
          Scholarships Australia will assist you to get connected with students
          in your field who are seeking scholarship application assistance.
          Please provide a brief biography mentioning your highest educational
          qualification and experience with Australian scholarships. (word limit
          200 words)
        </p>
        <div className='mt-4'>
          <label
            for="headline"
            className="block    text-gray-900 dark:text-gray-300"
          >
            <p className="font-sans font-bold text-xl mb-5">Professional Headline</p>
          </label>
          <input
            type="text"
            id="headline"
            name="Pro-headline"
            onBlur={(e)=>setProHeadline(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div className="mt-5">
          <p className="font-sans mt-3  font-bold text-xl mb-5">Summary</p>
          <textarea
            id="message"
            rows="10"
            name="consultantDoc"
            onBlur={e => setConsultSummery(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <p className="font-sans mt-5">
          To finalise your profile, please send your CV to {}
          <span className="underline text-[#304F40]">
            consultant@scholarshipsaustralia.com.au
          </span>
          . The subject of the email should be your Scholarships Australia
          username.
        </p>
        {
         infoError && <p className='text-red-500'>Error:{infoError}</p>
        }
        <button
          type="submit"
          className="px-5 py-3 mt-3 mb-4 bg-[#304F40] text-white rounded"
          onClick={handleConsultant}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Consultant;
