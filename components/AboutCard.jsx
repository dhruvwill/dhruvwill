"use client";
import React, { useState, useEffect } from "react";

const AboutCard = () => {
  const [activeTab, setActiveTab] = useState("tabs-profile");

  return (
    <div className="md:flex my-3" key={activeTab}>
      <ul
        className="mr-4 flex list-none md:flex-col flex-wrap md:justify-start pl-0"
        role="tablist"
      >
        <li
          role="presentation"
          className="flex-grow md:flex-grow-0 text-center"
        >
          <a
            role="tab"
            tabIndex={0}
            onClick={(e) => {
              setActiveTab("tabs-profile");
            }}
            className={`my-2 block border-2  ${
              activeTab == "tabs-profile"
                ? "border-inherit"
                : "border-transparent"
            } rounded-md px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent`}
            aria-controls="tabs-profile"
            aria-selected={activeTab === "tabs-profile"}
          >
            Profile
          </a>
        </li>
        <li
          role="presentation"
          className="flex-grow md:flex-grow-0 text-center"
        >
          <a
            role="tab"
            tabIndex={0}
            onClick={(e) => {
              setActiveTab("tabs-education");
            }}
            className={`my-2 block border-2  ${
              activeTab == "tabs-education"
                ? "border-inherit"
                : "border-transparent"
            } rounded-md px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent`}
            aria-controls="tabs-education"
            aria-selected={activeTab === "tabs-education"}
          >
            Education
          </a>
        </li>
        <li
          role="presentation"
          className="flex-grow md:flex-grow-0 text-center"
        >
          <a
            role="tab"
            tabIndex={0}
            onClick={(e) => {
              setActiveTab("tabs-work");
            }}
            className={`my-2 block border-2 ${
              activeTab == "tabs-work" ? "border-inherit" : "border-transparent"
            } rounded-md px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent`}
            aria-controls="tabs-work"
            aria-selected={activeTab === "tabs-work"}
          >
            Experience
          </a>
        </li>
        <li
          role="presentation"
          className="flex-grow md:flex-grow-0 text-center"
        >
          <a
            role="tab"
            tabIndex={0}
            onClick={(e) => {
              setActiveTab("tabs-achievements");
            }}
            className={`my-2 block border-2  ${
              activeTab == "tabs-achievements"
                ? "border-inherit"
                : "border-transparent"
            } rounded-md px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent`}
            aria-controls="tabs-achievements"
            aria-selected={activeTab === "tabs-achievements"}
          >
            Achievements
          </a>
        </li>
      </ul>

      <div className="my-2 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        {activeTab === "tabs-profile" && (
          <div
            className="opacity-100 transition-opacity duration-150 ease-linear"
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            Polyglot developer, specializing in full-stack proficiency.
            Passionate about crafting practical solutions to real-world
            problems, I seamlessly navigate between diverse technologies to
            deliver high-impact, user-centric applications. My track record
            reflects a commitment to excellence in project execution, making me
            a valuable asset to dynamic teams seeking innovative and efficient
            development. I primarily follow MVC Architecture for my
            applications, but I can easily adjust to other architectures. Stacks
            I can skillfully work on - MERN, PERN, SERN, LAMP.
          </div>
        )}
        {activeTab === "tabs-education" && (
          <div
            className="opacity-100 transition-opacity duration-150 ease-linear"
            id="tabs-education"
            role="tabpanel"
            aria-labelledby="tabs-education-tab"
          >
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-5 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  BTech in Computer Science & Engineering
                </h3>
                <h3 className="text-sm my-1 font-normal font-acumin text-gray-900 dark:text-white">
                  <a
                    href="https://pdpu.ac.in"
                    target="_blank"
                    className="flex gap-1 items-center"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <g opacity="0.5">
                        <path
                          d="M19.7388 4.26118C17.0572 1.57961 12.7095 1.57961 10.0279 4.26118L9.30707 4.98203C9.01418 5.27492 9.01418 5.7498 9.30707 6.04269C9.59997 6.33558 10.0748 6.33558 10.3677 6.04269L11.0886 5.32184C13.1844 3.22605 16.5823 3.22605 18.6781 5.32184C20.7739 7.41763 20.7739 10.8156 18.6781 12.9114L17.9573 13.6322C17.6644 13.9251 17.6644 14.4 17.9573 14.6929C18.2502 14.9858 18.725 14.9858 19.0179 14.6929L19.7388 13.972C22.4203 11.2905 22.4203 6.94276 19.7388 4.26118Z"
                          fill="#1C274C"
                        />
                        <path
                          d="M6.04269 9.30707C6.33558 9.59997 6.33558 10.0748 6.04269 10.3677L5.32184 11.0886C3.22605 13.1844 3.22605 16.5823 5.32184 18.6781C7.41763 20.7739 10.8156 20.7739 12.9114 18.6781L13.6322 17.9573C13.9251 17.6644 14.4 17.6644 14.6929 17.9573C14.9858 18.2501 14.9858 18.725 14.6929 19.0179L13.972 19.7388C11.2905 22.4203 6.94276 22.4203 4.26118 19.7388C1.57961 17.0572 1.57961 12.7095 4.26118 10.0279L4.98203 9.30707C5.27492 9.01418 5.7498 9.01418 6.04269 9.30707Z"
                          fill="#1C274C"
                        />
                      </g>
                      <path
                        d="M14.6933 9.30707C14.9862 9.59997 14.9862 10.0748 14.6933 10.3677L10.3682 14.6928C10.0753 14.9857 9.60045 14.9857 9.30756 14.6928C9.01467 14.3999 9.01467 13.9251 9.30756 13.6322L13.6327 9.30707C13.9255 9.01418 14.4004 9.01418 14.6933 9.30707Z"
                        fill="#1C274C"
                      />
                    </svg>
                    Pandit Deendayal Energy University, Gandhinagar
                  </a>
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  <b>9</b> CGPA (Till 6th Semester)
                  <br /> Learnings: DSA (Data Structure and Algorithm), Discrete
                  Mathematics, OOPs with Java, Design and Analysis of Algorithm,
                  Design Pattern,Database Management System (DBMS), Operating
                  System (OS), Theory of Computation (TOC), Advance Python,
                  Computer Networks, Cryptography and Information Security, Web
                  Technology, Software Engineering, System Software & Compiler
                  Design, Artifical Intelligence (Ai), Cloud Computing, Big Data
                  Analytics, Industry 4.0, Financial Management.
                </p>
                {/* <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg
                    className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a> */}
              </li>
              <li className="mb-5 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2022
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Diploma in Computer Engineering
                </h3>
                <h3 className="text-sm my-1 font-normal font-acumin text-gray-900 dark:text-white">
                  <a
                    href="https://vpmp.ac.in/"
                    target="_blank"
                    className="flex gap-1 items-center"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <g opacity="0.5">
                        <path
                          d="M19.7388 4.26118C17.0572 1.57961 12.7095 1.57961 10.0279 4.26118L9.30707 4.98203C9.01418 5.27492 9.01418 5.7498 9.30707 6.04269C9.59997 6.33558 10.0748 6.33558 10.3677 6.04269L11.0886 5.32184C13.1844 3.22605 16.5823 3.22605 18.6781 5.32184C20.7739 7.41763 20.7739 10.8156 18.6781 12.9114L17.9573 13.6322C17.6644 13.9251 17.6644 14.4 17.9573 14.6929C18.2502 14.9858 18.725 14.9858 19.0179 14.6929L19.7388 13.972C22.4203 11.2905 22.4203 6.94276 19.7388 4.26118Z"
                          fill="#1C274C"
                        />
                        <path
                          d="M6.04269 9.30707C6.33558 9.59997 6.33558 10.0748 6.04269 10.3677L5.32184 11.0886C3.22605 13.1844 3.22605 16.5823 5.32184 18.6781C7.41763 20.7739 10.8156 20.7739 12.9114 18.6781L13.6322 17.9573C13.9251 17.6644 14.4 17.6644 14.6929 17.9573C14.9858 18.2501 14.9858 18.725 14.6929 19.0179L13.972 19.7388C11.2905 22.4203 6.94276 22.4203 4.26118 19.7388C1.57961 17.0572 1.57961 12.7095 4.26118 10.0279L4.98203 9.30707C5.27492 9.01418 5.7498 9.01418 6.04269 9.30707Z"
                          fill="#1C274C"
                        />
                      </g>
                      <path
                        d="M14.6933 9.30707C14.9862 9.59997 14.9862 10.0748 14.6933 10.3677L10.3682 14.6928C10.0753 14.9857 9.60045 14.9857 9.30756 14.6928C9.01467 14.3999 9.01467 13.9251 9.30756 13.6322L13.6327 9.30707C13.9255 9.01418 14.4004 9.01418 14.6933 9.30707Z"
                        fill="#1C274C"
                      />
                    </svg>
                    VPMP Polytechnic, Gandhinagar
                  </a>
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  <b>9.9</b> CGPA, ACPC D2D <b>Rank 49</b>
                  <br /> Learnings: DSA (Data Structure and Algorithm), OOPs
                  (Java), DBMS (Database Management System), OS (Operating
                  System), Computer Network Security, Web Development, App
                  Development, Software Engineering, Computer Maintainence and
                  Troubleshooting, Network Management and more.
                </p>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2022
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  SSC (10th Grade)
                </h3>
                <h3 className="text-sm my-1 font-normal font-acumin text-gray-900 dark:text-white">
                  <a
                    href="https://amrutschool.edu.in/"
                    target="_blank"
                    className="flex gap-1 items-center"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <g opacity="0.5">
                        <path
                          d="M19.7388 4.26118C17.0572 1.57961 12.7095 1.57961 10.0279 4.26118L9.30707 4.98203C9.01418 5.27492 9.01418 5.7498 9.30707 6.04269C9.59997 6.33558 10.0748 6.33558 10.3677 6.04269L11.0886 5.32184C13.1844 3.22605 16.5823 3.22605 18.6781 5.32184C20.7739 7.41763 20.7739 10.8156 18.6781 12.9114L17.9573 13.6322C17.6644 13.9251 17.6644 14.4 17.9573 14.6929C18.2502 14.9858 18.725 14.9858 19.0179 14.6929L19.7388 13.972C22.4203 11.2905 22.4203 6.94276 19.7388 4.26118Z"
                          fill="#1C274C"
                        />
                        <path
                          d="M6.04269 9.30707C6.33558 9.59997 6.33558 10.0748 6.04269 10.3677L5.32184 11.0886C3.22605 13.1844 3.22605 16.5823 5.32184 18.6781C7.41763 20.7739 10.8156 20.7739 12.9114 18.6781L13.6322 17.9573C13.9251 17.6644 14.4 17.6644 14.6929 17.9573C14.9858 18.2501 14.9858 18.725 14.6929 19.0179L13.972 19.7388C11.2905 22.4203 6.94276 22.4203 4.26118 19.7388C1.57961 17.0572 1.57961 12.7095 4.26118 10.0279L4.98203 9.30707C5.27492 9.01418 5.7498 9.01418 6.04269 9.30707Z"
                          fill="#1C274C"
                        />
                      </g>
                      <path
                        d="M14.6933 9.30707C14.9862 9.59997 14.9862 10.0748 14.6933 10.3677L10.3682 14.6928C10.0753 14.9857 9.60045 14.9857 9.30756 14.6928C9.01467 14.3999 9.01467 13.9251 9.30756 13.6322L13.6327 9.30707C13.9255 9.01418 14.4004 9.01418 14.6933 9.30707Z"
                        fill="#1C274C"
                      />
                    </svg>
                    Amrut High School, Ahmedabad
                  </a>
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  High Schooling. passed 10th grade with 71%.
                </p>
              </li>
            </ol>
          </div>
        )}
        {activeTab === "tabs-work" && (
          <div
            className="opacity-100 transition-opacity duration-150 ease-linear"
            id="tabs-messages"
            role="tabpanel"
            aria-labelledby="tabs-work-tab"
          >
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-5 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  January 2023 - July 2023
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Web Development Intern @{" "}
                  <a
                    href="https://pdpu.ac.in"
                    target="_blank"
                    className="underline underline-offset-2"
                  >
                    PDEU HR
                  </a>
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Designed and developed 50+ pages for an Appraisal System used
                  for tracking and analyzing the faculty&apos;s annual
                  performance and raising them based on performance and certain
                  parameters. I used HTML, CSS, Javascript, and BootstrapCSS for
                  the front end. The backend consisted of Django.
                </p>
                {/* <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg
                    className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a> */}
              </li>
              <li className="mb-5 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  August 2022 - January 2023
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  Instructor (Part-time) @{" "}
                  <a
                    href="https://cdac.in"
                    target="_blank"
                    className="underline underline-offset-2"
                  >
                    CDAC
                  </a>{" "}
                  (Center for Development of Advanced Computing)
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Taught Various FrontEnd Technologies and Framework along with
                  programming.
                  <br /> • Frontend Technologies (HTML,CSS,JS, React) <br /> •
                  Programming Languages (C,C++, Java, Python)
                </p>
              </li>
              {/* <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2022
                </time>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  E-Commerce UI code in Tailwind CSS
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li> */}
            </ol>
          </div>
        )}
        {activeTab === "tabs-achievements" && (
          <div
            className="opacity-100 transition-opacity duration-150 ease-linear"
            id="tabs-contact"
            role="tabpanel"
            aria-labelledby="tabs-achievements-tab"
          >
            <ul className="list-circle pl-5 flex flex-col gap-3">
              <li>
                <b>SSIP Grantee</b>, have been granted 2 Lakh RS. by the
                government for the startup `<b>Flamedots</b>`{" "}
              </li>
              <li>
                <b>NCC &apos;A&apos; Certificate</b> Holder. Participated in
                various camps and activities.
              </li>
              <li>
                {" "}
                <b>3rd Rank GTU Techfest 2022 </b> Web-e-thon | GTU
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
