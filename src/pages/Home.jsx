import React from 'react'
import Navbar from '../components/Navbar'
import paigo from '../assets/paigo.jpg'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaDiscord } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center mt-10 gap-8 md:flex-row md:justify-center md:gap-10 md:mt-5'>
        <div className='text-center md:text-left'>
          <h1 className='text-2xl md:text-4xl font-extrabold'>Full-Stack Blockchain</h1>
          <h1 className='text-2xl md:text-4xl font-extrabold'>Developer 👋</h1>
          <p className='mt-4 text-md md:text-xl'>Hi, I'm Rahul Sajeevan. A Passionate Full-stack Blockchain</p>
          <p className='text-md md:text-xl'>developer based in Kerala, India 💻</p>
          <div className='flex justify-center mt-4 gap-3 md:justify-start'>
            <IoLogoGithub className='w-6 h-6' />
            <FaLinkedin className='w-6 h-6' />
            <FaDiscord className='w-6 h-6' />
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 m-5 shadow-full transition-all duration-1000 ease-in-out rounded-full overflow-hidden animate-blob">
          <img
            src={paigo}
            alt="my image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className='flex items-center justify-center mt-20'>
      <div className='flex items-center'>
        <h1 className='text-lg md:text-xl font-bold'>Tech Stack <span className='ml-3'>|</span></h1>
      </div>
      <div className='flex flex-wrap justify-center gap-2 md:gap-4 ml-3 items-center'>
        <img src="https://skillicons.dev/icons?i=html,css,js,react,next,tailwind" alt="skill-icon" className='mr-3'/>
        <img src="https://skillicons.dev/icons?i=nodejs,express" alt="skill-icon" className='mr-3'/>
        <img src="https://skillicons.dev/icons?i=mysql,mongodb" alt="skill-icon" className='mr-3'/>
        <img src="https://skillicons.dev/icons?i=docker,github" alt="skill-icon" className='mr-3'/>
        <img src="https://skillicons.dev/icons?i=solidity" alt="skill-icon"/>


      </div>
    </div>
    </>
  )
}

export default Home
