import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-[150px] bg-slate-800'>
        <div className='flex justify-center gap-[40%] pt-[5%]'>
            <div className='font-extrabold text-xl text-white'>Copyright © 2024. All rights are reserved</div>
            <div className='flex gap-3 text-white'>
                <IoLogoGithub className='w-6 h-6' />
                <FaLinkedin className='w-6 h-6' />
                <FaDiscord className='w-6 h-6' />
            </div>
        </div>
    </div>
  )
}

export default Footer