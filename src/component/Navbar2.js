import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";

const Navbar2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between m-3 text-black align-middle transition-opacity backdrop-blur-lg">
      <div className="relative z-20 flex space-x-4 text-xl align-middle">
        <img
          src="https://i.postimg.cc/Jz9PWbSF/s-2-removebg-preview.png"
          alt="SL"
          className="w-[80px] h-[80px]"
        />
      </div>

      <div className="relative z-20 hidden gap-5 mr-5 space-x-4 text-xl lg:flex font-poppins">
        <a
          href="#about"
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:bg-black/50 hover:p-[2px] hover:text-white hover:rounded-full text-lg"
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

      <div className="relative z-20 flex items-center lg:hidden">
        <button
          onClick={toggleDropdown}
          className="p-2 m-3 text-2xl text-black"
        >
          <IoMdMore />
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 z-50 w-48 mt-2 bg-white rounded-lg shadow-lg top-full lg:hidden">
          <div className="flex flex-col items-center py-2 space-y-2">
            <a
              href="#about"
              className="w-full px-4 py-2 text-lg text-green-700 font-poppins hover:bg-gray-200"
              onClick={closeDropdown}
            >
              About
            </a>
            <a
              href="#skills"
              className="w-full px-4 py-2 text-lg text-green-700 font-poppins hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="w-full px-4 py-2 text-lg text-green-700 font-poppins hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Education
            </a>
            <a
              href="#projects"
              className="w-full px-4 py-2 text-lg text-green-700 font-poppins hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Projects
            </a>
          </div>
        </div>
      )}

      <div className="absolute inset-0 z-10 bg-black rounded-[10px] bg-gradient-to-r opacity-50 border-spacing-[.2px]"></div>
    </nav>
  );
};

export default Navbar2;
