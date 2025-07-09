import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GiFarmer } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const StickyNavbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    // { id: 1, text: 'Home', path:'/' },
    { id: 2, text: 'About', path:'/about' },
    { id: 3, text: 'Chat', path:'/chat' },
    { id: 4, text: 'Login', path:'/login' },
    { id: 5, text: 'Contact', path:'/contact' },
  ];

  return (
    <div className='backdrop-blur-md bg-white/10 border border-black/20 shadow-lg flex justify-between items-center h-20 max-w-[1300px] mx-auto px-4 text-black rounded-3xl sticky top-5 z-50 '>
      {/* Logo */}
      
      
      <GiFarmer className='text-3xl w-[10%] font-bold text-green-600' /><h1 className='w-full text-3xl font-bold text-green-600'>Krishi Chat.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <NavLink to={`/${item.text.toLowerCase()}`} className='capitalize'>
            {item.text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden rounded-xl right-0 top-20 w-[40%] h-full ease-in-out duration-500'
            : 'ease-in-out w-[40%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className='w-full text-3xl font-bold text-green-600 m-4'>Krishi Chat.</h1> */}

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 backdrop-blur-md bg-white/60 hover:bg-[#00df9a] rounded-xl duration-300 hover:text-black cursor-pointer border-gray-600'
            onClick={() => setNav(false)}
          >
            <NavLink to={`/${item.text.toLowerCase()}`} className="capitalize">
            {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default StickyNavbar;