import React from 'react';

const Consultant = () => {
  return (
    <div className="mx-auto container">
      <div className="mx-60 ">
        <p className="text-center font-sans font-bold text-2xl my-3">
          Details from consultant{' '}
        </p>
        <p className="font-bold font-sans text-xl">
          Tell us about your scholarship application assistance experience.
        </p>
        <p className="font-sans mt-3">
          Scholarships Australia will assist you to get connected with students
          in your field who are seeking scholarship application assistance.
          Please provide a brief biography mentioning your highest educational
          qualification and experience with Australian scholarships. (word limit
          200 words)
        </p>
        <div>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="10"
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
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default Consultant;