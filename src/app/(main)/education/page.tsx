"use client";
import React from "react";
import { motion } from "motion/react";
import Heading from "@/components/ui/Heading";

const educationData = [
  {
    date: "February 2022",
    title: "BTech in Computer Science & Engineering",
    institution: "Pandit Deendayal Energy University, Gandhinagar",
    institutionLink: "https://pdpu.ac.in",
    details: "9 CGPA (Till 6th Semester)",
    learnings:
      "DSA, Discrete Mathematics, OOPs with Java, Design and Analysis of Algorithm, Design Pattern, DBMS, OS, TOC, Advance Python, Computer Networks, Cryptography and Information Security, Web Technology, Software Engineering, System Software & Compiler Design, AI, Cloud Computing, Big Data Analytics, Industry 4.0, Financial Management.",
  },
  {
    date: "March 2022",
    title: "Diploma in Computer Engineering",
    institution: "VPMP Polytechnic, Gandhinagar",
    institutionLink: "https://vpmp.ac.in/",
    details: "9.9 CGPA, ACPC D2D Rank 49",
    learnings:
      "DSA, OOPs (Java), DBMS, OS, Computer Network Security, Web Development, App Development, Software Engineering, Computer Maintenance and Troubleshooting, Network Management and more.",
  },
  {
    date: "April 2022",
    title: "SSC (10th Grade)",
    institution: "Amrut High School, Ahmedabad",
    institutionLink: "https://amrutschool.edu.in/",
    details: "High Schooling. Passed 10th grade with 71%.",
  },
];

const EducationPage = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] overflow-scroll mt-16">
      <div className="p-2 md:p-5 max-w-4xl mx-auto">
        <Heading
          heading="Education"
          subHeading="Where I learnt from"
          className="border-b mb-8"
        />
        <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-4">
          {educationData.map((edu, index) => (
            <motion.li
              key={edu.title}
              className="mb-10 ms-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-md font-semibold text-gray-900 dark:text-white">
                {edu.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {edu.date}
              </time>
              <a
                href={edu.institutionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 dark:text-blue-500 hover:underline mb-2 inline-block"
              >
                {edu.institution}
              </a>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                {edu.details}
              </p>
              {edu.learnings && (
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Learnings:
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.learnings}
                  </p>
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default EducationPage;
