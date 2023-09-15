
import { FaXTwitter } from "react-icons/fa6";
import {
  FaBars,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaReddit,
} from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  function handleNav() {
    setnav(!nav);
    setTimeout(()=>{
      setnav(false  )
    },5000)
  }
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-800/70">
      <ul className="hidden sm:flex px-4 ">
        <li className="border-b-2 border-b-transparent hover:border-b-2 hover:border-primaryDark duration-150 ease-out">
          <a href="/" className="">
            Home
          </a>
        </li>
        <li className="border-b-2 border-b-transparent hover:border-b-2 hover:border-primaryDark duration-150 ease-out">
          <a href="#Gallary">Gallary</a>
        </li>
        <li className="border-b-2 border-b-transparent hover:border-b-2 hover:border-primaryDark duration-150 ease-out">
          <a href="#deals">Deals</a>
        </li>
        <li className="border-b-2 border-b-transparent hover:border-b-2 hover:border-primaryDark duration-150 ease-out">
          <a href="#contact">Contact</a>
        </li>
        <li className="border-b-2 border-b-transparent hover:border-b-2 hover:border-primaryDark duration-150 ease-out">
          <a href="#about">About</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebook className="mx-4 hover:scale-110 duration-200 cursor-pointer" />
        <FaXTwitter className="mx-4 hover:scale-110 duration-200 cursor-pointer" />
        <FaLinkedin className="mx-4 hover:scale-110 duration-200 cursor-pointer" />
        <FaReddit className="mx-4 hover:scale-110 duration-200 cursor-pointer" />
        <FaInstagram className="mx-4 hover:scale-110 duration-200 cursor-pointer" />
      </div>
      {/* Hamburger Menu */}
      <div className="sm:hidden z-10 pr-3">
        <FaBars
          size={25}
          className="cursor-pointer hover:scale-105 duration-100"
          onClick={handleNav}
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? " overflow-y-hidden md:hidden absolute ease-in duration-300 text-gray-300 top-0 left-0 h-screen bg-black/95 px-4 py-7 flex flex-col w-full text-center"
            : "top-0 left-[-100%] ease-in-out duration-150 absolute"
        }
      >
        <ul className="h-full w-full text-center pt-2 ">
          <li className="text-xl py-8 hover:scale-105 duration-100 ease-out ">
            <a className="" href="/">Home</a>
          </li>
          <li className="text-xl py-8 hover:scale-105 duration-100 ease-out">
            <a href="#Gallary">Gallary</a>
          </li>
          <li className="text-xl py-8 hover:scale-105 duration-100 ease-out">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-xl py-8 hover:scale-105 duration-100 ease-out">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-xl py-8 hover:scale-105 duration-100 ease-out">
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
