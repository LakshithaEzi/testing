import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 font-Manrope">
      <div className="flex flex-col items-center justify-center p-8 m-4 bg-gray-800 rounded-lg shadow-lg md:flex-row md:items-center">
        <div className="w-full md:w-[45%] flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://i.postimg.cc/W3LjyyCz/profile-pic_(5).png" 
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-[40%] mt-8 md:mt-0 md:ml-8 flex flex-col items-center md:items-start">
          <h1 className="mb-2 text-6xl text-center text-white md:text-left">
            Hello I'm <br />
            <span className="font-bold text-green-400">Sameera lakshitha</span>
          </h1>
          <p className="mt-4 text-xl text-center text-gray-300 md:text-left">
            A responsible and skilled undergraduate with strong self-learning
            abilities, dedication, teamwork, and leadership qualities. I am
            eager to take on challenges and seeking an opportunity as a trainee
            software engineer to apply and explore both current and emerging
            technologies in the field of Information Technology.
          </p>
          <div className="flex flex-col items-center mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <a
              href="#"
              className="px-6 py-3 font-semibold text-gray-900 transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500"
            >
              Download CV
            </a>
            <a
              href="#"
              className="px-6 py-3 font-semibold text-green-400 transition-colors duration-300 border border-green-400 rounded-full hover:bg-green-400 hover:text-gray-900"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 space-y-4 md:space-y-2 md:justify-end">
          <a
            href="#"
            className="text-green-400 transition-colors duration-300 hover:text-green-500"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            className="text-green-400 transition-colors duration-300 hover:text-green-500"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            className="text-green-400 transition-colors duration-300 hover:text-green-500"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
