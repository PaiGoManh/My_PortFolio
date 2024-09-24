import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-[150px] bg-slate-800 pt-[4%] px-5'>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-0 gap-4 p-4'>
        <div className='font-extrabold text-lg md:text-xl text-white text-center md:text-left'>
          Copyright © 2024. All rights are reserved
        </div>
        <div className='flex gap-3 text-white'>
          <IoLogoGithub className='w-6 h-6 cursor-pointer' />
          <FaLinkedin className='w-6 h-6 cursor-pointer' />
          <FaDiscord className='w-6 h-6 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Footer
