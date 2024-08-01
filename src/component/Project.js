import React from "react";

const Project = ({ title, description, imageUrl }) => {
  return (
    <section class="dark:bg-white dark:text-gray-800  font-poppins">
      <div class="container max-w-5xl px-4 py-12 mx-auto">
        <div class="grid gap-4 mx-4 sm:grid-cols-12">
          <div class="col-span-12 sm:col-span-3">
            <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-green-700">
              <h3 class="text-3xl font-semibold">Projects</h3>
              <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                in university
              </span>
            </div>
          </div>
          <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-600">
                <h3 class="text-xl font-semibold tracking-wide">Medmaster </h3>
                <time class="text-xs tracking-wide uppercase dark:text-gray-600">
                  2022-Present
                </time>
                <p class="mt-3">
                  This project seeks to revolutionize health care with a digital
                  prescription system built with JavaScript and MongoDB.This
                  will stream line medication access for patients and increase
                  efficiency for pharmacists.
                </p>
                <br />
                <p className="font-bold">
                  Mongodb | Expressjs | React | Nodejs (MERN)
                </p>
              </div>
              <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-600">
                <h3 class="text-xl font-semibold tracking-wide">
                  Calculator-ESD
                </h3>
                <time class="text-xs tracking-wide uppercase dark:text-gray-600">
                  2022
                </time>
                <p class="mt-3">
                  This project modifies a basic calculator using MVC
                  architecture,improving the separation of
                  concerns,testability,and flexibility.It allows for easier
                  integration of advanced features like complex
                  operations,memory functions, and error handling.This enhances
                  the code's maintain ability and facilitates future
                  development.
                </p>
                <br />
                <p className="font-bold">JAVA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
