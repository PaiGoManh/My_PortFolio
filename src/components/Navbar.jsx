import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false); 

  const toggleNav = () => {
    setNavOpen(!navOpen); 
  };

  return (
    <div className='bg-white text-black h-20 w-full'>
      <div className='flex justify-between items-center px-10 h-full'>
        <div className='font-bold text-lg'>
          <h1>Rahul Sajeevan</h1>
        </div>
        <div className='hidden md:flex gap-5 font-bold'>
          <h1 className='cursor-pointer'>Home</h1>
          <h1 className='cursor-pointer'>About</h1>
          <h1 className='cursor-pointer'>Projects</h1>
          <h1 className='cursor-pointer'>Contact</h1>
        </div>

        <div className='md:hidden flex'>
          {!navOpen ? (
            <AiOutlineMenu size={25} className='cursor-pointer' onClick={toggleNav} />
          ) : (
            <AiOutlineClose size={25} className='cursor-pointer' onClick={toggleNav} />
          )}
        </div>
      </div>

      <div
        className={`${
          navOpen ? 'block' : 'hidden'
        } md:hidden bg-white text-black h-screen w-full fixed top-20 left-0 flex flex-col items-center gap-5 font-bold text-xl pt-10 transition-all duration-300`}>
        <h1 className='cursor-pointer'>Home</h1>
        <h1 className='cursor-pointer'>About</h1>
        <h1 className='cursor-pointer'>Projects</h1>
        <h1 className='cursor-pointer'>Contact</h1>
      </div>
    </div>
  );
};

export default Navbar;
