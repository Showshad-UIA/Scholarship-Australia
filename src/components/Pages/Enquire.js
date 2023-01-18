import React from 'react';

const Enquire = () => {
  return (
    <div className="mx-auto container">
      <div className="lg:mx-28 flex flex-col items-center  pt-6 sm:justify-center sm:pt-0 ">
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                First Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="block w-full mt-1 border-gray-300 bg-[#F5F8FA]  border-2  p-3 focus:border-blue-700 required"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Last Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="block w-full mt-1 border-gray-300 bg-[#F5F8FA]  border-2  p-3 focus:border-blue-700"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 bg-[#F5F8FA]  border-2  p-3 focus:border-blue-700"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Mobile phone number
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block w-full mt-1 border-gray-300 bg-[#F5F8FA]  border-2  p-3 focus:border-blue-700"
                />
              </div>
            </div>
            {/* <div className="   ">
              <label
                htmlFor="password"
                className="block text-sm font-medium mt-3 text-gray-700 undefined"
              >
                Country
              </label>

              <div className="relative w-full px-1.5  lg:w-60 md:w-52 lg:max-w-sm dropdown block  mt-1 border-gray-300 bg-[#F5F8FA]  border-2   focus:border-blue-700 ">
                <select className=" p-1 px-2 w-full    border-gray-300 bg-[#F5F8FA]  shadow-sm outline-none appearance-none ">
                  <option className="font-sans font-bold text-black disabled">
                    Select a country
                  </option>
                  <option value="a">Australia</option>
                  <option value="b">Bangladesh</option>
                  <option value="c">Canada</option>
                  <option value="d">Denmark</option>
                  <option value="e">Ethiopia</option>
                  <option value="f">Germany</option>
                  <option value="g">UK</option>
                  <option value="h">India</option>
                  <option value="i">Sweden</option>
                  <option value="k">Usa</option>
                  <option value="l">Norway</option>
                  <option value="m">Denmark</option>
                </select>
              </div>
            </div> */}

            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Highest qualification*
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-300 bg-[#F5F8FA]  border-2  p-3 focus:border-blue-700"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                YOUR SCHOLARSHIP PREFERENCES
                <p>Type of scholarship</p>
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-300 bg-[#F5F8FA]  border-2  p-3 focus:border-blue-700"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Level of study*
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-300 bg-[#F5F8FA]  border-2  p-3 focus:border-blue-700"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Field of study*
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-300 bg-[#F5F8FA]  border-2  p-3 focus:border-blue-700"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Scholarship name*
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-300 bg-[#F5F8FA]  border-2  p-3 focus:border-blue-700"
                />
              </div>
            </div>

            {/* <div>
              <div className="mt-4">
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  When do you intend to apply for the scholarship?
                </label>
              </div>

              <div className="lg:flex md:flex  w-full lg:w-2/5 border-gray-300 bg-[#F5F8FA] mt-5 lg:gap-5 md:gap-3 border-2 ">
                <div className="relative w-full    lg:w-60 md:w-52 lg:max-w-sm dropdown ">
                  <select className=" p-1 px-2 w-full   text-black shadow-sm outline-none appearance-none border-gray-300 bg-[#F5F8FA] ">
                    <option className="font-sans font-bold text-black disabled">
                      Select a year
                    </option>
                    <option value="Postgraduate">2022</option>
                    <option value="Undergraduate">2023</option>
                  </select>
                </div>
                <div className="relative w-full px-1.5  lg:w-60 md:w-52 lg:max-w-sm dropdown ">
                  <select className=" p-1 px-2 w-full    border-gray-300 bg-[#F5F8FA]  shadow-sm outline-none appearance-none ">
                    <option className="font-sans font-bold text-black disabled">
                      Select a month
                    </option>
                    <option value="january">January</option>
                    <option value="january">February</option>
                    <option value="january">March</option>
                    <option value="january">April</option>
                    <option value="january">May</option>
                    <option value="january">June</option>
                    <option value="january">July</option>
                    <option value="january">August</option>
                    <option value="january">September</option>
                    <option value="january">October</option>
                    <option value="january">November</option>
                    <option value="january">December</option>
                  </select>
                </div>
              </div>
            </div> */}
            <div className="">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 my-3 dark:text-white"
              >
                Message to scholarship consultant. Please detail what assistance
                you are seeking for your scholarship application.
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>

            <div className="flex  justify-start mt-4">
              <a
                className="inline-flex  px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-[#304F40] border border-transparent rounded-md active:bg-[#304F40] false"
                href="#"
              >
                Send Email
              </a>
              <button
                type="submit"
                className="inline-flex  px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md active:bg-[#304F40] false"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquire;
