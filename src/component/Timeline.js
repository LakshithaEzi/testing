import React from "react";

const VerticalTimeline = () => {
  return (
    <section class="dark:bg-white dark:text-gray-800  font-poppins">
      <div class="container max-w-5xl px-4 py-12 mx-auto">
        <div class="grid gap-4 mx-4 sm:grid-cols-12">
          <div class="col-span-12 sm:col-span-3">
            <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-green-700">
              <h3 class="text-3xl font-semibold">Education</h3>
              <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                qualifications
              </span>
            </div>
          </div>
          <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-600">
                <h3 class="text-xl font-semibold tracking-wide">
                  Information Technology{" "}
                </h3>
                <time class="text-xs tracking-wide uppercase dark:text-gray-600">
                  2020 - 2023
                </time>
                <p class="mt-3">
                  I studied IT fundamentals, programming, and additional related
                  subjects at the Institute of Technology, University of
                  Moratuwa.
                </p>
              </div>
              <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-600">
                <h3 class="text-xl font-semibold tracking-wide">
                  Biyagama central college
                </h3>
                <time class="text-xs tracking-wide uppercase dark:text-gray-600">
                  till AUG 2018
                </time>
                <p class="mt-3">
                  I completed my GCE Advanced Level (A/L) examination in the
                  Physical Science stream.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTimeline;
