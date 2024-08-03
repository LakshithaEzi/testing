import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between text-black align-middle transition-opacity backdrop-blur-lg">
      <div className="relative z-20 flex space-x-4 text-xl align-middle">
        <img
          src="https://i.postimg.cc/Jz9PWbSF/s-2-removebg-preview.png"
          alt="SL"
          className="w-[80px] h-[80px]"
        />
      </div>

      {}
      <div className="relative z-20 hidden gap-5 mr-5 space-x-4 text-xl lg:flex font-poppins ">
        <a
          href="#about"
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:bg-black/50 hover:p-[2px] hover:text-white hover:rounded-full text-lg "
        >
          About
        </a>
        <a
          href="#skills"
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:text-green-700 hover:scale-110"
        >
          Skills
        </a>
        <a
          href="#experience"
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:text-green-700 hover:scale-110"
        >
          Education
        </a>
      
        <a
          href="#projects"
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:text-green-700 hover:scale-110"
        >
          Projects
        </a>
      </div>

      {}
      <div className="relative z-20 flex overflow-hidden lg:hidden ">
        <button
          onClick={toggleMenu}
          className="p-2 m-3 text-2xl text-green-700"
        >
          <FaBars />
        </button>
      </div>

      {}
      <div
        className={`absolute top-0 right-0 w-full bg-green-50 border-t border-gray-200 lg:hidden transition-transform duration-200 transform backdrop-blur-xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-[80px] bg-transparent">
          <a
            href="#about"
            className="text-xl text-green-700 font-poppins"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/skills"
            className="text-xl text-green-700 font-poppins"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-xl text-green-700 font-poppins"
            onClick={toggleMenu}
          >
            Education
          </a>

          <a
            href="#projects"
            className="text-xl text-green-700 font-poppins"
            onClick={toggleMenu}
          >
            Project
          </a>
        </div>
      </div>

      <div className="m-2 absolute inset-0 z-10 bg-black rounded-[10px] bg-gradient-to-r opacity-50 border-spacing-[.2px]"></div>
    </nav>
  );
};

export default Navbar2;
