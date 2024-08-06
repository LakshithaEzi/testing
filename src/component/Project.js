import React, { forwardRef } from "react";

const Project = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="project">
      <section className="dark:bg-white dark:text-gray-800 font-poppins">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-green-700">
                <h3 className="text-3xl font-semibold">Projects</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                  in university
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-600 hover:bg-black hover:text-white hover:p-2 rounded-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Medmaster
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    2022-Present
                  </time>
                  <p className="mt-3">
                    This project seeks to revolutionize health care with a
                    digital prescription system built with JavaScript and
                    MongoDB. This will streamline medication access for patients
                    and increase efficiency for pharmacists.
                  </p>
                  <br />
                  <p className="font-bold">
                    MongoDB | Express.js | React | Node.js (MERN)
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-600 hover:bg-black hover:text-white hover:p-2 rounded-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Calculator-ESD
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    2022
                  </time>
                  <p className="mt-3">
                    This project modifies a basic calculator using MVC
                    architecture, improving the separation of concerns,
                    testability, and flexibility. It allows for easier
                    integration of advanced features like complex operations,
                    memory functions, and error handling. This enhances the
                    code's maintainability and facilitates future development.
                  </p>
                  <br />
                  <p className="font-bold">JAVA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
});

export default Project;
