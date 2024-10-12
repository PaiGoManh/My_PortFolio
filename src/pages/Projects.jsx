import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaShareFromSquare } from "react-icons/fa6";

import nillq from '../assets/Projects/NillQ.png'
import feedfox from '../assets/Projects/feedfx.png'
import certi from '../assets/Projects/certiapp.png'
import split from '../assets/Projects/EasySplit.png'
import quiz from '../assets/Projects/QuizApp.png'
import cinema from '../assets/Projects/cinemastack.png'
import daapzon from '../assets/Projects/Daapzon.png'

const Projects = () => {
  return (
    <>
      <div id='projects' ></div>
      <div className='mt-[15%]' >
      <h1 className=' text-blue-500 font-bold md:ml-[13%] ml-2'>PROJECTS</h1>
      <h1 className='md:ml-[13%] ml-2 mt-1 md:mb-[5%] mb-[10%] mb:mx-0 mx-1'>Each project is a uinque piece of Development 🌿</h1>
      <h1 className='md:text-right md:mr-[27%] text-left md:mb-[-13px]  mt-3 ml-2 font-extrabold'>NillQ 🏥 </h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div>
            <img src={nillq} alt='nillq' className='border-2 border-black md:w-[500px] md:h-[300px] md:mt-[-30px] w-[370px] ml-[px] '/>
        </div>
        <div >
            <p className='md:w-[400px] w-[350px] md:ml-0 ml-3 text-justify'>
                NillQ is a medical appointment booking system that streamlines healthcare for
                hospitals and clinics. It features web dashboards for admins, hospitals, and
                doctors, alongside mobile apps for doctors to manage appointments and for
                patients to book, pay, and provide feedback. NillQ ensures seamless scheduling
                and an intuitive interface for enhanced patient engagement.
            </p>
            <div className='md:mt-3 mt-5 text-center'>
              <img src="https://skillicons.dev/icons?i=react,tailwind" alt="skill-icon" className='w-20 mx-40'/>
            </div>
            <div className='flex mt-5 ml-[30%] gap-5'>
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



      <div className='md:mt-[7%] mt-[15%]'>
      <h1 className=' md:ml-[27%] text-left ml-3  md:mb-[-10px] text-l font-extrabold'>FeedFox 🦊</h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div >
            <p className='md:w-[400px] w-[350px] ml-2 md:ml-0 text-justify'>
              FeedFox is a news aggregator platform for Web3 enthusiasts, offering curated updates from the decentralized space.
              During my one-month internship, I contributed to building the responsive frontend using Next.js, 
              enhancing user engagement with an intuitive interface. The platform provides a seamless browsing experience for both desktop and mobile users, 
              making it easier for Web3 enthusiasts to stay informed on the latest news and developments.
            </p>
            <div className='mt-3 text-center'>
              <img src="https://skillicons.dev/icons?i=nextjs,tailwind" alt="skill-icon" className='w-20 mx-40'/>
            </div>
            <div className='flex mt-5 ml-[40%]  gap-5 '>
                <a href='https://feedfox.live' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
        </div>
        <div className='md:mt-[-60px]'>
            <img src={feedfox} alt='nillq' className='border-2 border-black md:w-[500px] md:h-[300px]'/>
        </div>
      </div>
    </div>


    <div className='md:mt-[7%] mt-[15%]'>
      <h1 className='md:text-right md:mr-[27%] text-left md:mb-[-13px]  mt-3 ml-2 font-extrabold'>Daapzon <span className='text-xl'>🛒</span> </h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div className='md:mt-[-30px]'>
            <img src={daapzon} alt='daapzon' className='border-2 border-black md:w-[500px] md:h-[300px]'/>
        </div>
        <div >
            <p className='md:w-[400px] w-[350px] md:ml-0 ml-3 text-justify'>             
                I developed Daapzon, a decentralized e-commerce platform that replicates Amazon’s functionality using Solidity and 
                Hardhat on the Ethereum blockchain. The frontend was built with React.js and Vite, offering a fast and intuitive user experience, 
                while Tailwind CSS ensured modern styling. Daapzon provides secure, transparent transactions and tamper-resistant product management through blockchain technology.
            </p>
            <div className='md:mt-3 mt-5 text-center md:ml-0 -ml-7'>
              <img src="https://skillicons.dev/icons?i=vite,react,tailwind,solidity" alt="skill-icon" className='w-[120px] mx-40'/>
            </div>
            <div className='flex mt-5 md:ml-[30%] ml-[26%] gap-5'>
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

      <div className='md:mt-[7%] mt-[15%]'>
      <h1 className=' md:ml-[27%] text-left ml-3  md:mb-[-10px] text-l font-extrabold'>Certi Dapp 🎓</h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div >
            <p className='md:w-[400px] w-[350px] ml-2 md:ml-0 text-justify'>
            I developed a decentralized application (DApp) for managing and verifying digital certificates using Solidity and Ethereum. 
              The DApp allows secure issuance, storage, and verification of certificates on the blockchain, ensuring authenticity and tamper-resistance. 
              The frontend was built with React.js, providing users with a simple and intuitive interface for certificate management.
            </p>
            <div className='md:mt-3 mt-5 md:ml-0 -ml-7 text-center'>
            <img src="https://skillicons.dev/icons?i=react,tailwind,solidity" alt="skill-icon" className='md:w-[100px] w-[120px] mx-40'/>
            </div>
            <div className='flex mt-5 md:ml-[30%] ml-[25%] gap-5'>
                <a href='https://github.com/PaiGoManh/Certificate-DApp_Blockchain'  className='flex items-center gap-1'>
                    <h1>Code</h1>
                    <IoLogoGithub/>
                </a>
                <a href='' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
        </div>
        <div className='md:mt-[-60px]'>
            <img src={certi} alt='nillq' className='border-2 border-black md:w-[500px] md:h-[300px]'/>
        </div>
      </div>
    </div>

    <div className='md:mt-[7%] mt-[15%]'>
      <h1 className='md:text-right md:mr-[27%] text-left md:mb-[-13px]  mt-3 ml-2 font-extrabold'>Easy Split   <span className='text-xl'>💸</span> </h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div className='md:mt-[-30px]'>
            <img src={split} alt='split app' className='border-2 border-black md:w-[500px] md:h-[300px]'/>
        </div>
        <div >
            <p className='md:w-[400px] w-[350px] md:ml-0 ml-3 text-justify'>             
              I created a MERN stack application for managing and splitting group expenses among multiple users. 
              The app allows users to add groups, track expenses, and split costs either equally or based on custom input for each member. 
              It features a responsive React frontend with MongoDB and Express on the backend to ensure efficient data storage and real-time updates.
            </p>
            <div className='md:mt-3 mt-5 md:ml-0 -ml-5 text-center'>
              <img src="https://skillicons.dev/icons?i=mongodb,express,nodejs,react,tailwind" alt="skill-icon" className='md:w-[150px] md:mx-40 w-[170px] mx-32'/>
            </div>
            <div className='flex mt-5 md:ml-[30%] ml-[28%] gap-5'>
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
        </div>
    </div>


    <div className='md:mt-[7%] mt-[15%]'>
      <h1 className=' md:ml-[27%] text-left ml-3  md:mb-[-10px] text-l font-extrabold'>Quiz App 🧑‍💻</h1>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center gap-10 mt-5'>
        <div >
            <p className='md:w-[400px] w-[350px] ml-2 md:ml-0 text-justify'>
            I developed a blockchain-related quiz app using Next.js, designed to educate users on Web3 concepts through interactive quizzes. 
              The app dynamically fetches quiz questions, tracks scores, and provides instant feedback to enhance the learning experience. 
              With a responsive design, the app ensures a seamless user experience across all devices, helping users learn about blockchain technology in a fun and engaging way.
            </p>
            <div className='md:mt-3 mt-5 text-center'>
            <img src="https://skillicons.dev/icons?i=nextjs,tailwind"  alt="skill-icon" className='w-20 mx-40'/>
            </div>
            <div className='flex mt-5 ml-[30%] gap-5'>
                <a href='https://github.com/PaiGoManh/Quiz-app-NextJs' className='flex items-center gap-1'>
                    <h1>Code</h1>
                    <IoLogoGithub/>
                </a>
                <a href='' className='flex items-center gap-1'>
                    <h1>Live Demo</h1>
                    <FaShareFromSquare/>
                </a>
            </div>
        </div>
        <div className='md:mt-[-60px]'>
          <img src={quiz} alt='quiz'  className='border-2 border-black md:w-[500px] md:h-[300px]'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects
