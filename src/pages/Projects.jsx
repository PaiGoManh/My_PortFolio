import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaShareFromSquare } from "react-icons/fa6";

import nillq from '../assets/Projects/NillQ.png'
import feedfox from '../assets/Projects/feedfx.png'

const Projects = () => {
  return (
    <>
      <div className='mt-[17%]'>
      <h1 className=' text-blue-500 font-bold md:ml-[13%] ml-3'>PROJECTS</h1>
      <h1 className='md:ml-[13%] ml-3 mt-1'>Each project is a uinque piece of Development 🌿 </h1>
      <h1 className='md:text-right md:mr-[27%] text-left  mt-3 ml-3 '>NillQ 🏥 </h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div>
            <img src={nillq} alt='nillq' width={500} height={600} className='border-2 border-black'/>
        </div>
        <div >
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
                <a href='https://github.com/PaiGoManh/Nillq.com' className='flex items-center gap-1'>
                    <h1>Code</h1>
                    <IoLogoGithub/>
                </a>
                <a href='https://www.nillq.com' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
          </div>
        </div>
      </div>



      <div className='mt-[5%]'>
      <h1 className=' md:ml-[27%] text-left ml-3  '>FeedFox 🦊</h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div >
            <p className='w-[400px] text-justify mt-5'>
              FeedFox is a news aggregator platform for Web3 enthusiasts, offering curated updates from the decentralized space.
              During my one-month internship, I contributed to building the responsive frontend using Next.js, 
              enhancing user engagement with an intuitive interface. The platform provides a seamless browsing experience for both desktop and mobile users, 
              making it easier for Web3 enthusiasts to stay informed on the latest news and developments.
            </p>
            <div className='mt-3 text-center'>
                NextJs Tailwind
            </div>
            <div className='flex mt-5 ml-[30%] gap-10'>
                <a href='https://feedfox.live' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
        </div>
        <div>
            <img src={feedfox} alt='nillq' width={500} height={600} className='border-2 border-black'/>
        </div>
      </div>
    </div>


    <div className='mt-[5%]'>
      <h1 className='md:text-right md:mr-[27%] text-left  mt-3 ml-3 font-bold'>Certi Dapp <span className='text-xl'>🎓</span> </h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div>
            <img src={nillq} alt='nillq' width={500} height={600} className='border-2 border-black'/>
        </div>
        <div >
            <p className='w-[400px] text-justify'>
              I developed a decentralized application (DApp) for managing and verifying digital certificates using Solidity and Ethereum. 
              The DApp allows secure issuance, storage, and verification of certificates on the blockchain, ensuring authenticity and tamper-resistance. 
              The frontend was built with React.js, providing users with a simple and intuitive interface for certificate management.
            </p>
            <div className='mt-3 text-center'>
                React Tailwind Solidity Hardhat
            </div>
            <div className='flex mt-5 ml-[30%] gap-10'>
                <a href='https://github.com/PaiGoManh/Certificate-DApp_Blockchain' className='flex items-center gap-1'>
                    <h1>Code</h1>
                    <IoLogoGithub/>
                </a>
                <a href='' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
          </div>
        </div>
      </div>



      <div className='mt-[5%]'>
      <h1 className=' md:ml-[27%] text-left  mt-3 ml-3 '>Easy Split 💸 </h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div >
            <p className='w-[400px] text-justify'>
              I created a MERN stack application for managing and splitting group expenses among multiple users. 
              The app allows users to add groups, track expenses, and split costs either equally or based on custom input for each member. 
              It features a responsive React frontend with MongoDB and Express on the backend to ensure efficient data storage and real-time updates.
            </p>
            <div className='mt-3 text-center'>
                MongoDB Express Nodejs React Tailwind 
            </div>
            <div className='flex mt-5 ml-[30%] gap-10'>
                <a href='https://github.com/PaiGoManh/EasySplit' className='flex items-center gap-1'>
                    <h1>Code</h1>
                    <IoLogoGithub/>
                </a>
                <a href='' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
        </div>
        <div>
            <img src={nillq} alt='nillq' width={500} height={600} className='border-2 border-black'/>
        </div>
      </div>
    </div>

    <div className='mt-[5%]'>
      <h1 className='md:text-right md:mr-[27%] text-left  mt-3 ml-3 '>Quiz App 🧑‍💻 </h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div>
            <img src={nillq} alt='nillq' width={500} height={600} className='border-2 border-black'/>
        </div>
        <div >
            <p className='w-[400px] text-justify'>
              I developed a blockchain-related quiz app using Next.js, designed to educate users on Web3 concepts through interactive quizzes. 
              The app dynamically fetches quiz questions, tracks scores, and provides instant feedback to enhance the learning experience. 
              With a responsive design, the app ensures a seamless user experience across all devices, helping users learn about blockchain technology in a fun and engaging way.
            </p>
            <div className='mt-3 text-center'>
                NextJs Tailwind 
            </div>
            <div className='flex mt-5 ml-[30%] gap-10'>
                <a href='https://github.com/PaiGoManh/Quiz-app-NextJs' className='flex items-center gap-1'>
                    <h1>Code</h1>
                    <IoLogoGithub/>
                </a>
                <a href='https://www.nillq.com' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
          </div>
        </div>
      </div>



      <div className='mt-[5%]'>
      <h1 className=' md:ml-[27%] text-left  mt-3 ml-3 '>CinemaStack 🎥 </h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div >
            <p className='w-[400px] text-justify'>
              The Movie Watchlist Web Application is a platform designed to help users discover, select, and organize their favorite movies with ease. 
              Leveraging TMDB ratings and algorithms, it recommends similar films based on user preferences, enhancing the movie discovery process. 
              The app's interactive features, including personalized watchlists, movie trailers, and categories like trending and upcoming films, provide an engaging and streamlined experience for movie enthusiasts.
            </p>
            <div className='mt-3 text-center'>
                MongoDB Express React NodeJs Tailwind 
            </div>
            <div className='flex mt-5 ml-[30%] gap-10'>
                <a href='https://github.com/PaiGoManh/Cinemastack' className='flex items-center gap-1'>
                    <h1>Code</h1>
                    <IoLogoGithub/>
                </a>
                <a href='https://www.nillq.com' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
        </div>
        <div>
            <img src={nillq} alt='nillq' width={500} height={600} className='border-2 border-black'/>
        </div>
      </div>
    </div>






    </>
  )
}

export default Projects
