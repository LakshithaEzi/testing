import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import an icon for the button

const Navbar2 = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 flex items-center justify-between  text-black border-[.5px] rounded-[5px] m-4 backdrop-blur-lg bg-green/50 transition-opacity z-50 align-middle">
      <div className="relative z-20 flex space-x-4 text-xl align-middle">
  <img src="https://i.postimg.cc/Jz9PWbSF/s-2-removebg-preview.png" alt="Logo" className="w-[80px] h-[80px]" />
  
</div>

      {/* Desktop Navbar Links */}
      <div className="relative z-20 hidden gap-5 mr-5 space-x-4 text-xl lg:flex font-poppins">
        <a
          href="#about"
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:text-green-700 hover:scale-110"
        >
          About
        </a>
        <a
          href="#experience"
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:text-green-700 hover:scale-110"
        >
          Education
        </a>
        <a
          href="#skills"
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:text-green-700 hover:scale-110"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:text-green-700 hover:scale-110"
        >
          Projects
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="relative z-20 flex lg:hidden">
        <button onClick={toggleMenu} className="p-2 text-2xl text-green-700">
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
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
            href="#experience"
            className="text-xl text-green-700 font-poppins"
            onClick={toggleMenu}
          >
            Education
          </a>
          <a
            href="#skills"
            className="text-xl text-green-700 font-poppins"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-xl text-green-700 font-poppins"
            onClick={toggleMenu}
          >
            Projects
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-black rounded-full bg-gradient-to-r opacity-30"></div>
    </nav>
  );
};

export default Navbar2;
