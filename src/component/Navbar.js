import React, { useState, useRef, useEffect } from "react";
import { IoMdMore } from "react-icons/io";

const Navbar2 = ({ scrollToSelection, refs }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between m-3 text-white align-middle transition-opacity backdrop-blur-lg">
      <div className="relative z-20 flex space-x-4 text-xl align-middle">
        <img
          src="https://i.postimg.cc/Jz9PWbSF/s-2-removebg-preview.png"
          alt="SL"
          className="w-[80px] h-[80px]"
        />
      </div>

      <div className="relative z-20 hidden gap-5 mr-5 space-x-4 text-xl lg:flex font-poppins">
        <button
          onClick={() => scrollToSelection(refs.profileRef)}
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:bg-black/50 hover:p-[2px] hover:text-white hover:rounded-full text-lg"
        >
          About
        </button>
        <button
          onClick={() => scrollToSelection(refs.skillsRef)}
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:bg-black/50 hover:p-[2px] hover:text-white hover:rounded-full text-lg"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSelection(refs.timelineRef)}
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:bg-black/50 hover:p-[2px] hover:text-white hover:rounded-full text-lg"
        >
          Timeline
        </button>
        <button
          onClick={() => scrollToSelection(refs.projectRef)}
          className="relative z-20 transition-transform duration-300 ease-in-out transform hover:bg-black/50 hover:p-[2px] hover:text-white hover:rounded-full text-lg"
        >
          Projects
        </button>
      </div>

      <div className="relative z-20 lg:hidden">
        <button onClick={toggleDropdown} className="text-2xl text-white">
          <IoMdMore />
        </button>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 text-black bg-white rounded-md shadow-lg"
          >
            <button
              onClick={() => {
                scrollToSelection(refs.profileRef);
                closeDropdown();
              }}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSelection(refs.skillsRef);
                closeDropdown();
              }}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Skills
            </button>
            <button
              onClick={() => {
                scrollToSelection(refs.timelineRef);
                closeDropdown();
              }}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Timeline
            </button>
            <button
              onClick={() => {
                scrollToSelection(refs.projectRef);
                closeDropdown();
              }}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Projects
            </button>
          </div>
        )}
      </div>

      <div className="absolute inset-0 z-10 bg-black rounded-[10px] bg-gradient-to-r opacity-50 border-spacing-[.2px]"></div>
    </nav>
  );
};

export default Navbar2;
