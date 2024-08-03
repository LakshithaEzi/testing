import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { GrLinkedinOption } from "react-icons/gr";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


function ProfileCard() {
  const [text] = useTypewriter({
    words: ["Developer.", "Undergraduate."],
    loop: true,
  });

  return (
    <div className="flex flex-col items-center p-4 lg:flex-row m-9">
      <img
        src="https://i.postimg.cc/k4YLdJVw/profile-pic-12.png"
        alt="Avatar"
        className="w-40 h-40 md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] rounded-full mb-4 lg:mb-0 lg:mr-4"
      />
      <div className="flex-1">
        <div className="space-y-4 text-center font-poppins lg:text-left">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Hello, It's <br />
            Sameera Lakshitha
          </h2>
          <p className="text-xl lg:text-2xl">
            I am a{" "}
            <span>
              {text}
              <Cursor />
            </span>
          </p>
          <p className="max-w-lg mx-auto text-gray-500 lg:mx-0">
            A responsible and skilled undergraduate with strong self-learning
            abilities, dedication, teamwork, and leadership qualities. I am
            eager to take on challenges and seeking an opportunity as a trainee
            software engineer to apply and explore both current and emerging
            technologies in the field of Information Technology.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-4 lg:justify-start">
            <a
              href="path/to/your/cv.pdf"
              download
              className="relative flex items-center justify-center w-40 h-12 overflow-hidden text-white transition-all bg-green-700 border border-green-700 rounded-md shadow-2xl before:ease before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-700 hover:before:-translate-x-40"
            >
              Download CV <GoDownload />
            </a>

            <a href="mailto:lakshithasameera71@gmail.com">
              <button className="relative flex items-center justify-center w-40 h-12 overflow-hidden text-white transition-all bg-green-700 border border-green-700 rounded-md shadow-2xl before:ease before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-700 hover:before:-translate-x-40">
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mt-4 space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4 lg:mt-0 lg:ml-6">
        <a
          href="https://www.linkedin.com/in/sameera-lakshitha-029038182/"
          className="text-2xl text-green-700"
        >
          <GrLinkedinOption />
        </a>
        <a
          href="https://github.com/LakshithaEzi"
          className="text-2xl text-green-700"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:lakshithasameera71@gmail.com"
          className="text-2xl text-green-700"
        >
          <MdOutlineAlternateEmail />
        </a>
        <a href="#" className="text-2xl text-green-700">
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/94713428961"
          className="text-2xl text-green-700"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
