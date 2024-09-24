import React from 'react'
import paigo from '../assets/paigo.jpg'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div id='home'></div>
      <div className='flex flex-col items-center md:pt-[9%] pt-[40%] gap-8 md:flex-row md:justify-center md:gap-10 '>
        <div className='text-center md:text-left'>
          <h1 className='text-2xl md:text-4xl font-extrabold'>Full-Stack Blockchain</h1>
          <h1 className='text-2xl md:text-4xl font-extrabold'>Developer 👋</h1>
          <p className='mt-6 text-md md:text-xl w-[300px] md:w-[600px] md:mr-[-5%]'>Hi, I'm Rahul Sajeevan. A Passionate Full-stack Blockchain</p>
          <p className='text-md md:text-xl'>developer based in Kerala, India 💻</p>
          <div className='flex justify-center mt-4 gap-3 md:justify-start'>
            <a href='https://github.com/PaiGoManh' target='_blank' rel='noopener noreferrer'>
              <IoLogoGithub className='w-6 h-6' />
            </a>
            <a href='https://www.linkedin.com/in/rahul-sajeevan-144849192/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='w-6 h-6' />
            </a>
            {/* <a href='https://www.linkedin.com/in/rahul-sajeevan-144849192/' target='_blank' rel='noopener noreferrer'>
              <FaDiscord className='w-6 h-6' />
            </a> */}
            <a href='https://drive.google.com/drive/folders/1kpK48aQF7iUc-60p0Rh4RzT8OpoWaosn?usp=drive_link' target='_blank' rel='noopener noreferrer'>
              <FaCloudDownloadAlt className='w-6 h-6'/>
            </a>
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
        <h1 className='text-lg md:text-xl font-bold hidden '>Tech Stack <span className='md:ml-3 hidden'>|</span></h1>
      </div>
      <div className='md:flex md:flex-nowrap md:justify-center flex flex-wrap w-[300px] gap-2 md:gap-4 ml-[-35px] items-center'>
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
