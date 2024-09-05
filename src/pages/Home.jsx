import React from 'react'
import Navbar from '../components/Navbar'
import paigo from '../assets/paigo.jpg'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaDiscord } from "react-icons/fa";

import html from '../assets/TechStack/html.png';
import css from '../assets/TechStack/css.png';
import js from '../assets/TechStack/js.png';
import tailwind from '../assets/TechStack/tailwind.png';
import mongo from '../assets/TechStack/mongo.png';
import express from '../assets/TechStack/express.png';
import react from '../assets/TechStack/react.png';
import nodejs from '../assets/TechStack/nodejs.png';
import docker from '../assets/TechStack/docker.png';
import nextjs from '../assets/TechStack/nextjs.png';
import solidity from '../assets/TechStack/solidity.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center mt-10 gap-8 md:flex-row md:justify-center md:gap-10 md:mt-5'>
        <div className='text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-extrabold'>Full-Stack Blockchain</h1>
          <h1 className='text-3xl md:text-4xl font-extrabold'>Developer 👋</h1>
          <p className='mt-4 text-lg md:text-xl'>Hi, I'm Rahul Sajeevan. A Passionate Full-stack Blockchain</p>
          <p className='text-lg md:text-xl'>developer based in Kerala, India 💻</p>
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
      <div className='flex flex-wrap justify-center gap-4 ml-3 items-center'>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={html} alt='HTML' className='w-8 h-8 md:w-12 md:h-12 ' /></div>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={css} alt='CSS' className='w-8 h-8 md:w-9 md:h-9' /></div>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={js} alt='JavaScript' className='w-8 h-8 md:w-10 md:h-10' /></div>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={tailwind} alt='Tailwind CSS' className='w-8 h-8 md:w-9 md:h-9' /></div>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={mongo} alt='MongoDB' className='w-8 h-8 md:w-12 md:h-12' /></div>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={express} alt='Express' className='w-8 h-8 md:w-12 md:h-10' /></div>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={react} alt='React' className='w-8 h-8 md:w-10 md:h-10' /></div>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={nodejs} alt='Node.js' className='w-8 h-8 md:w-10 md:h-10' /></div>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={docker} alt='Docker' className='w-8 h-8 md:w-12 md:h-12' /></div>
        <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'><img src={nextjs} alt='Next.js' className='w-8 h-8 md:w-12 md:h-12' /></div>
       <div className='w-16 h-16 p-3 border border-1 border-black rounded-full'> <img src={solidity} alt='Solidity' className='w-8 h-8 md:w-12 md:h-12' /></div>
      </div>
    </div>
    </>
  )
}

export default Home
