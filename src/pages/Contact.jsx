import React from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';

const Contact = () => {
  return (
    <div className='mt-[5%] sm:mt-24 lg:mt-40 lg:mb-20' id='contact'>
      <div className='ml-[12%]'>
        <h2 className='text-xl sm:text-xl font-bold text-blue-500'>CONTACT</h2>
        <p className='text-xl sm:text-2xl font-extrabold mt-4'>
          Don't be shy! Hit me up! 👇
        </p>
      </div>

      <div className='mt-12 flex flex-col sm:flex-row items-center ml-[12%] gap-10'>
        <div className='flex items-center gap-6 ml-[-55%] md:ml-0' >
          <FaMapLocationDot className='text-xl sm:text-2xl text-blue-500' />
          <div>
            <h3 className='text-lg sm:text-xl md:text-xl font-bold '>Location</h3>
            <p className='text-base sm:text-lg md:text-l font-semibold text-gray-600'>
              Kerala, India
            </p>
          </div>
        </div>

        {/* Email */}
        <div className='flex items-center gap-6'>
          <CiMail className='text-3xl sm:text-2xl text-blue-500' />
          <div className='md:mb-0 mb-[5%]'>
            <h3 className='text-lg sm:text-xl md:text-xl font-bold'>Mail</h3>
            <p className='text-base sm:text-lg md:text-l font-semibold text-gray-600 '>
              rahulrahulsajeevan007@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
