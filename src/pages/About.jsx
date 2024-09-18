import React from 'react'
import about from '../assets/about.jpeg'

const About = () => {
  return (
   <>
     <div id='about'></div>
      <div className='md:mt-[10%] mt-[15%] md:flex  items-center justify-center md:gap-10'>

      <div>
          <h1 className='text-blue-500 font-bold md:mb-2 mb-4 ml-2 md:ml-0'>ABOUT ME</h1>
          <img src={about} alt='about' className='rounded-md md:w-[400px] md:h-[340px] w-[340px] '/>
      </div>
      <div>
          <h1 className='md:text-2xl text-xl mt-7 ml-2 font-bold'>A Dedicated Full-Stack Developer</h1>
          <h1 className='md:text-2xl text-xl ml-2 font-bold'>based in Kerala, India 👨‍💻</h1>
          <p className='md:w-[400px] w-[330px] md:mt-2 mt-4 ml-2 text-justify'>
              I’m a frontend developer with a strong background in React, Next.js, and Tailwind CSS. Currently, 
              I’m diving into blockchain development with Solidity, working on smart contracts and decentralized applications. 
              My current focus is on mastering smart contract development and contributing to innovative blockchain projects
              I’m passionate about building user-friendly interfaces and exploring new technologies, and I’m always eager to tackle new challenges in both web and blockchain development."
          </p>
      </div>
      </div>
   </>
  )
}

export default About