"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading";

const workData = [
  {
    date: "May 2024 – August 2024",
    title: "App Developer Intern",
    institution: "Prasad group of companies, Ahmedabad",
    institutionLink: "https://prasadgroup.com",
    details:
      "React Native, Expo, React query, zustand, Node.js, express, multer, JWT, MsSQL ",
    description: `
        • Developed cross-platform app using React Native, Expo, Node.js; 40% faster development. <br/>
        • Implemented backend with Express, JWT, MSSQL; 99.9% uptime for 1000+ daily requests. <br/>
        • Created UI for marketing team; 50% boost in data entry efficiency. <br/>
        • Built task management system; 30% increase in team productivity. <br/>
        • Optimized on-premise deployment; 25% faster database queries. <br/>
        • Distributed to 50+ users; 100% adoption within 2 weeks.
      `,
  },
  {
    date: " January 2023 – July 2023",
    title: "Web Developer Intern",
    institution: "HR @ Pandit Deendayal Petroleum University, Gandhinagar",
    institutionLink: "https://pdpu.ac.in/hr-officer.html",
    details:
      "HTML, BootstrapCSS, Javascript, JQuery, Django, SQLite, Private Linux VM",
    description: `
        • Developed web portal using Django, HTML, BootstrapCSS, JavaScript, AJAX; deployed on private VM. <br/>
        • Created user-friendly interface for university employee appraisal, improving efficiency by 40%. <br/>
        • Collaborated with HR to tailor solution to workflow needs.<br/>
        • Implemented analytics dashboard for real-time performance insights.<br/>
        • Optimized system, reducing page load times by 30%.<br/>
      `,
  },
  {
    date: "August 2022 – January 2023",
    title: "Instructor (Volunteer)",
    institution: "CDAC",
    institutionLink: "https://cdac.in/",
    details:
      "HTML, CSS, BootstrapCSS, TailwindCSS, Javascript, C/C++, Java, Python, React.js",
    description: `
        • Taught 30+ students in web development, programming basics, and React.js. <br/>
        • Created and delivered lesson plans, assignments, and exams. <br/>
        • Developed curriculum for web development course, including HTML, CSS, and JavaScript. <br/>
        • Mentored students in programming basics, including C/C++, Java, and Python. <br/>
        • Led group projects, including a React.js app for local businesses. <br/>
      `,
  },
];

const WorkExperience = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] overflow-scroll mt-16">
      <div className="p-2 md:p-5 max-w-4xl mx-auto">
        <Heading
          heading="Work Experience"
          subHeading="A Journey thus far"
          className="border-b mb-8"
        />
        <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-4">
          {workData.map((work, index) => (
            <motion.li
              key={work.title}
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
                {work.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {work.date}
              </time>
              <a
                href={work.institutionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 dark:text-blue-500 hover:underline mb-2 inline-block"
              >
                {work.institution}
              </a>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                {work.details}
              </p>
              {work.description && (
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Details:
                  </h4>
                  <p
                    className="text-sm text-gray-600 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: work.description }}
                  ></p>
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;
