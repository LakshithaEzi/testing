import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-1 flex items-center justify-between p-6 text-white  border-[.5px] rounded-md m-4 hover:bg-black/30 backdrop-blur-xl bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="space-x-3 text-2xl font-bold font-poppins">
        SL<span className="text-green-700 font-Manrope">.</span>
      </div>
      <div className="flex gap-5 mr-5 space-x-4 text-xl font-Manrope">
        <a href="#about" className="hover:text-green-400">
          About
        </a>
        <a href="#experience" className="hover:text-green-400">
          Experience
        </a>
        <a href="#skills" className="hover:text-green-400">
          Skills
        </a>
        <a href="#projects" className="hover:text-green-400">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
