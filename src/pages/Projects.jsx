import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaShareFromSquare } from "react-icons/fa6";

import nillq from '../assets/Projects/NillQ.png'

const Projects = () => {
  return (
    <div className='mt-[20%]'>
      <h1 className=' text-blue-500 font-bold ml-[13%]'>PROJECTS</h1>
      <h1 className='ml-[13%] mt-1'>Each project is a uinque piece of Development 🌿 </h1>
      <div className='flex justify-center items-center gap-10 mt-5'>
        <div>
            <img src={nillq} alt='nillq' width={500} height={600} className='border-2 border-black'/>
        </div>
        <div >
            <h1 className='text-center text-xl font-bold mb-4'>NillQ 🏥 </h1>
            <p className='w-[400px] text-justify'>
                NillQ is a medical appointment booking system that streamlines healthcare for
                hospitals and clinics. It features web dashboards for admins, hospitals, and
                doctors, alongside mobile apps for doctors to manage appointments and for
                patients to book, pay, and provide feedback. NillQ ensures seamless scheduling
                and an intuitive interface for enhanced patient engagement.
            </p>
            <div className='mt-3 text-center'>
                React Tailwind
            </div>
            <div className='flex mt-5 ml-[30%] gap-10'>
                <div className='flex items-center gap-1'>
                    <h1>Code</h1>
                    <IoLogoGithub/>
                </div>
                <a href='https://www.nillq.com' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
