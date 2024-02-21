"use client";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import React from "react";
import { useState, useEffect } from "react";
import { wrapGrid } from "animate-css-grid";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const [isItemActive, setItemActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const grid = document.getElementsByClassName("md:grid")[0];
    wrapGrid(grid, { duration: 300 });
  }, []);

  return (
    <div className="w-screen h-auto py-10" id="projects">
      <div className="wrapper sm:w-4/5 mx-auto h-auto">
        <h1 className="mb-4 ms-4 sm:ms-0 text-4xl font-medium tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white font-degular">
          ...Projects
        </h1>
        <div className="flex items-center flex-nowrap h-full my-5">
          <style scoped>
            {`
              .blogs::-webkit-scrollbar {
                display : none;
              }
              .blogs {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}
          </style>
          <div
            className={`md:grid md:grid-cols-12 flex flex-wrap md:gap-2 box-border w-full mx-5 sm:mx-0`}
          >
            <div
              onClick={() => {
                setItemActive(!isItemActive);
                setActiveIndex(1);
              }}
              className={`relative overflow-hidden rounded-xl object-cover object-center transition-all duration-500 border-2 border-foreground ${
                isItemActive
                  ? activeIndex === 1
                    ? "col-start-1 col-end-13 row-start-1 md:max-h-[19rem] group"
                    : "md:col-span-3 row-start-2 row-end-3 md:max-h-[8rem]"
                  : "md:col-span-6 md:max-h-[17rem]"
              } max-h-[10rem] w-1/2 md:w-full md:p-0 p-1`}
            >
              <div>
                <Image
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover object-top rounded-xl group-hover:opacity-25"
                  src="/projects/apas.png"
                  alt="APAS : Annual performance appraisal system"
                />
                <div
                  className={
                    "absolute top-0 left-0 hidden group-hover:flex flex-col gap-3 items-center justify-center bg-black opacity-75 w-full h-full"
                  }
                >
                  <h1
                    className={"text-white text-3xl font-degular font-medium"}
                  >
                    APAS - Annual Performance Assessment System
                  </h1>
                  <div className={"w-4/5 font-acumin"}>
                    <p className={"text-white text-center"}>
                      Built and Deployed a sophisticated software to identify
                      the annual performance of faculty based on complex
                      parameters identified Devs and HR combined. Faculty&apos;s
                      are appraised based on the results displayed on
                      comprehensive dashboard developed by us. <br />{" "}
                      <a
                        className={"text-blue-300 underline"}
                        href={"http://apas.pdpu.ac.in/"}
                        target={"_blank"}
                      >
                        [Link]
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setItemActive(!isItemActive);
                setActiveIndex(2);
              }}
              className={`relative overflow-hidden rounded-xl object-cover object-center transition-all duration-500 border-2 border-foreground ${
                isItemActive
                  ? activeIndex === 2
                    ? "col-start-1 col-end-13 row-start-1 md:max-h-[19rem] group"
                    : "md:col-span-3 row-start-2 row-end-3 md:max-h-[8rem]"
                  : "md:col-span-6 md:max-h-[17rem]"
              } max-h-[10rem] w-1/2 md:w-full md:p-0 p-1`}
            >
              <div>
                <Image
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover object-top rounded-xl group-hover:opacity-25"
                  src="/projects/flamedots.png"
                  alt="APAS : Annual performance appraisal system"
                />
                <div
                  className={
                    "absolute top-0 left-0 hidden group-hover:flex flex-col gap-3 items-center justify-center bg-black opacity-75 w-full h-full"
                  }
                >
                  <h1
                    className={"text-white text-3xl font-degular font-medium"}
                  >
                    Flamedots : Customized Sneakers Ecom
                  </h1>
                  <div className={"w-4/5"}>
                    <p className={"text-white text-center"}>
                      SSIP Phase 2.0 Granted Startup. Exports Customized
                      Sneakers. Custom Made <br />{" "}
                      <a
                        className={"text-blue-300 underline"}
                        href={"https://flamedots.com"}
                        target={"_blank"}
                      >
                        [Link]
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setItemActive(!isItemActive);
                setActiveIndex(3);
              }}
              className={`relative overflow-hidden rounded-xl object-cover object-center transition-all duration-500 border-2 border-foreground ${
                isItemActive
                  ? activeIndex === 3
                    ? "col-start-1 col-end-13 row-start-1 md:max-h-[19rem] group"
                    : "md:col-span-3 row-start-2 row-end-3 md:max-h-[8rem]"
                  : "md:col-span-4"
              } max-h-[10rem] w-1/2 md:w-full md:p-0 p-1`}
            >
              <div>
                <Image
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover object-top rounded-xl group-hover:opacity-25"
                  src="/projects/studydx.png"
                  alt="APAS : Annual performance appraisal system"
                />
                <div
                  className={
                    "absolute top-0 left-0 hidden group-hover:flex flex-col gap-3 items-center justify-center bg-black opacity-75 w-full h-full"
                  }
                >
                  <h1
                    className={"text-white text-3xl font-degular font-medium"}
                  >
                    Study/dx - Find best University Notes and PYQ Solutions
                  </h1>
                  <div className={"w-4/5"}>
                    <p className={"text-white text-center"}>
                      Built with Next.JS and React-markdown. Helps student
                      access best university specific notes and previous year
                      paper solutios. <br />{" "}
                      <a
                        className={"text-blue-300 underline"}
                        href={"https://studydx.com"}
                        target={"_blank"}
                      >
                        [Link]
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setItemActive(!isItemActive);
                setActiveIndex(4);
              }}
              className={`relative overflow-hidden rounded-xl object-cover object-center border-2 border-foreground ${
                isItemActive
                  ? activeIndex === 4
                    ? "col-start-1 col-end-13 row-start-1 md:max-h-[19rem] group"
                    : "md:col-span-3 row-start-2 row-end-3 md:max-h-[8rem] "
                  : "md:col-span-4"
              } max-h-[10rem] w-1/2 md:w-full md:p-0 p-1`}
            >
              <div>
                <Image
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover object-top rounded-xl group-hover:opacity-25"
                  src="/projects/medway.png"
                  alt=""
                />
                <div
                  className={
                    "absolute top-0 left-0 hidden group-hover:flex flex-col gap-3 items-center justify-center bg-black opacity-75 w-full h-full"
                  }
                >
                  <h1
                    className={"text-white text-3xl font-degular font-medium"}
                  >
                    Medway : Appointment Scheduling
                  </h1>
                  <div className={"w-4/5"}>
                    <p className={"text-white text-center"}>
                      Built for Hospitals to help them efficiently manage
                      patients appointments. Under the hood it uses genetic
                      algorithm which takes parameters such as urgency, wait
                      time etc.., Built on Django Stack.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setItemActive(!isItemActive);
                setActiveIndex(5);
              }}
              className={`relative overflow-hidden rounded-xl object-cover object-center transition-transform duration-500 border-2 border-foreground ${
                isItemActive
                  ? activeIndex === 5
                    ? "col-start-1 col-end-13 row-start-1 md:max-h-[19rem] group"
                    : "md:col-span-3 row-start-2 row-end-3 md:max-h-[8rem] "
                  : "md:col-span-4"
              } max-h-[10rem] w-1/2 md:w-full md:p-0 p-1`}
            >
              <div>
                <Image
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover object-top rounded-xl group-hover:opacity-25"
                  src="/projects/cas.png"
                  alt=""
                />
                <div
                  className={
                    "absolute top-0 left-0 hidden group-hover:flex flex-col gap-3 items-center justify-center bg-black opacity-75 w-full h-full"
                  }
                >
                  <h1
                    className={"text-white text-3xl font-degular font-medium"}
                  >
                    CAS : Cv Based Attendance System
                  </h1>
                  <div className={"w-4/5"}>
                    <p className={"text-white text-center"}>
                      Built With Flask. Uses Dlib. Faculty upload the video and
                      verifies the calculated attendance for the particular
                      class.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href={"https://github.com/dhruvwill/"}
          target="_blank"
          className="inline-block mx-4 sm:mx-0 border-background bg-foreground text-background font-medium font-acumin tracking-wider py-2 px-4 rounded-md"
        >
          <div className="flex items-center gap-1">
            <svg className="h-6 w-6" viewBox="0 0 291.32 291.32">
              <g>
                <path
                  // fill="#2B414D"
                  className="fill-current"
                  d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66
		s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235
		c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3
		c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0
		c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572
		c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425
		c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263
		c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184
		C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66
		C264.008,196.668,231.69,239.992,186.462,256.625z"
                />
              </g>
            </svg>
            ↗
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
