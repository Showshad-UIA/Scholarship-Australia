
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaPaperclip } from 'react-icons/fa';



const StudentFileAttach = () => {
  return (
    <div class="">
      <label class="inline-block mb-2 text-gray-500">File Upload</label>
      <div class=" w-full h-10">
        <label class="flex gap-3 items-center  h-20 border-2 border-black border-dashed hover:bg-gray-100 hover:border-gray-300">
          <button class="mx-4 bg-[#F0F0F0] py-2 px-4 ">
            <FontAwesomeIcon
              icon={faPaperclip}
              className="w-4 h-4 px-1  hover:bg-[#BEC0C2] "
            ></FontAwesomeIcon>
            Attach a file
          </button>
       
          <input type="file" class="opacity-0" />
        </label>
      </div>
    </div>
  );
};

export default StudentFileAttach;