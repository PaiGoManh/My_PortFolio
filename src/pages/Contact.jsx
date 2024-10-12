import React from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';

const Contact = () => {
  return (
    <div className='mt-[5%] md:mt-40 md:mb-20' id='contact'>
      <div className='md:ml-[12%] ml-5 md:mt-0 mt-[5%] '>
        <h2 className='text-xl sm:text-xl font-bold text-blue-500 md:mt-0 mt-[20%]'>CONTACT</h2>
        <p className='text-xl sm:text-2xl font-extrabold mt-4'>
          Don't be shy! Hit me up! 👇
        </p>
      </div>

      <div className='md:mt-12 mt-5 flex flex-col sm:flex-row items-center ml-[12%] gap-5'>
        <div className='flex items-center gap-6 ml-[-60%] md:ml-0' >
          <FaMapLocationDot className='text-xl sm:text-2xl text-blue-500' />
          <div>
            <h3 className='text-md sm:text-xl md:text-xl font-bold '>Location</h3>
            <p className='text-base sm:text-md md:text-l font-semibold text-gray-600'>
              Kerala, India
            </p>
          </div>
        </div>

        {/* Email */}
        <div className='flex items-center gap-6 md:ml-0 -ml-5'>
          <CiMail className='text-3xl sm:text-2xl text-blue-500' />
          <div className='md:mb-0 mb-[5%]'>
            <h3 className='text-md sm:text-xl md:text-xl font-bold'>Mail</h3>
            <p className='text-base sm:text-md md:text-l font-semibold text-gray-600 '>
              rahulrahulsajeevan007@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
