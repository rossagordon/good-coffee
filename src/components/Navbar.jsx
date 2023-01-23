import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 m-w-[1240px] mx-auto px-4 bg-[#bg-gray-100]">
      <h1 className="w-full text-3xl font-bold">GOOD COFFEE.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:underline hover:font-bold">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:underline hover:font-bold">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:underline hover:font-bold">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-black bg-black text-white ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">COFFEE SHOP.</h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b cursor-pointer hover:underline hover:font-bold">
            <Link to="home" smooth={true} duration={500} onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b cursor-pointer hover:underline hover:font-bold">
            <Link to="about" smooth={true} duration={500} onClick={handleNav}>
              About
            </Link>
          </li>
          <li
            className="p-4 border-b cursor-pointer hover:underline hover:font-bold"
            o
          >
            <Link to="contact" smooth={true} duration={500} onClick={handleNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
