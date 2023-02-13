import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import StudentPageBanner from '../Banner/StudentPageBanner';
import Skills from './Skills';
import StudentFileAttach from './StudentFileAttach';

const StudentProject = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

   const [state, setState] = React.useState({
     wordCount: 0,
     charCount: 0,
   });

   const handleKeyPress = e => {
     const count = e.target.value;

     const countWords = count => {
       if (count.length === 0) {
         return 0;
       } 
       else {
         count = count.replace(/(^\s*)|(\s*$)/gi, '');
         count = count.replace(/[ ]{2,}/gi, ' ');
         count = count.replace(/\n /, '\n');
         return count.split(' ').length;
       }
     };

     setState({
       wordCount: countWords(count),
       charCount: count.length,
     });
   };
  return (
    <div>
      <StudentPageBanner></StudentPageBanner>
      <div className="flex flex-col items-center sm:justify-center sm:pt-0 bg-gray-50 font-sans ">
        <div className="flex justify-center items-center lg:mt-10   py-4  overflow-hidden bg-white shadow-md lg:w-[800px] sm:rounded-lg mb-5">
          <div className="card flex lg:w-full px-5 w-[350px]  mb-5">
            <form>
              <div className="form-control mt-5">
                <label className="mb-2">Choose a name for your project</label>
                <input
                  type="text"
                  placeholder="e.g help me to find scholarships"
                  className="input input-bordered rounded-sm  text-sm  text-black"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required',
                    },
                  })}
                />
              </div>

              <div className="form-control mt-5">
                <label>Tell us more about your project</label>
                <textarea
                  {...register('aboutYou')}
                  placeholder="Describe your project here..."
                  maxlength="500"
                  onChange={handleKeyPress}
                  className="input input-bordered  rounded-sm font-sans text-black mt-2 h-20"
                />
                <span className="num flex justify-end" placeholder="">
                  {state.wordCount}
                </span>
              </div>
              <div className="form-control my-3 mb-20">
                <StudentFileAttach></StudentFileAttach>
              </div>
              <div className="mt-5 form-control">
                <h1 className='my-2'>What skills are required?</h1>
                <p className='mb-3'>
                  Enter up to 5 skills that best describe your project.
                  Freelancers will use these skills to find projects they are
                  most interested and experienced in.
                </p>
                <Skills></Skills>
              </div>

              <br />

              <input
                type="submit"
                value="Submit"
                className="bg-[#304F40] px-2 cursor-pointer text-[20px] font-bold rounded-sm my-5 text-white p-2 "
              />
              <p className="border-b-2  border-gray-300"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProject;
