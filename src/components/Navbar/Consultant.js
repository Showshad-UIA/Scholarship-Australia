import React, { useState } from 'react';

const Consultant = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const handleConsultantEmail =()=>{
    localStorage.setItem('dataKey', JSON.stringify(data));
    setData("");
  }
  return (
    <div className="mx-auto container my-10 ">
      <div className="mx-60 shadow-lg border-2 px-6">
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
        <div className="mt-5">
          <textarea
            id="message"
            rows="10"
            name='consultantDoc'
            onBlur={(e)=> setData(e.target.value)}
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <p className="font-sans">
          To finalise your profile, please send your CV to {}
          <span className="underline text-[#304F40]">
            consultant@scholarshipsaustralia.com.au
          </span>
          . The subject of the email should be your Scholarships Australia
          username.
        </p>
        <button
          type="submit"
          className="px-5 py-3 mt-3 mb-4 bg-[#304F40] text-white rounded"
          onClick={handleConsultantEmail}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default Consultant;
