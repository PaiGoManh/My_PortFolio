import React from 'react'
import about from '../assets/about.jpeg'

const About = () => {
  return (
    
    <div className='mt-[17%] flex items-center justify-center gap-10'>
        <div>
            <img src={about} alt='about' width={400} height={400} className='rounded-md'/>
        </div>
        <div>
            <h1 className='text-blue-500 font-bold mb-2'>ABOUT ME</h1>
            <h1 className='text-2xl font-bold'>A Dedicated Full-Stack Developer</h1>
            <h1 className='text-2xl font-bold'>based in Kerala, India 👨‍💻</h1>
            <p className='w-[400px] mt-2 text-justify'>
                I’m a frontend developer with a strong background in React, Next.js, and Tailwind CSS. Currently, 
                I’m diving into blockchain development with Solidity, working on smart contracts and decentralized applications. 
                My current focus is on mastering smart contract development and contributing to innovative blockchain projects
                I’m passionate about building user-friendly interfaces and exploring new technologies, and I’m always eager to tackle new challenges in both web and blockchain development."
            </p>
        </div>
    </div>
  )
}

export default About