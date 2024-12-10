"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import Heading from "@/components/ui/Heading";
import { motion } from "motion/react";
import { HiArrowUpRight } from "react-icons/hi2";

const work = {
  workHistory: [
    {
      role: "App Developer Intern",
      company: "Prashant Gamatex (Prasad Group)",
      duration: "May 2024 - Aug 2024",
      additionalInfo:
        "Developed cross platform mobile application using React Native (Expo). Created a robust backend using Node.js, Express, Multer & JWT. 100% Adoption in 2 weeks. ",
    },
    {
      role: "Web Developer Intern",
      company: "PDEU Admin",
      duration: "Jan 2023 - July 2023",
      additionalInfo:
        "Developed a web-based application for the university admin and HR department for annual evaluation of the employees using Django, BootstrapCSS, Javascript, and SQLite. Deployed on Private VM using Nginx and Gunicorn.",
    },
    {
      role: "Instructor (Volunteer)",
      company: "CDAC Govt.",
      duration: "Sep 2022 - Jan 2023",
      additionalInfo:
        "Conducted programming workshops for beginners. Taught fundamentals of web development including HTML, CSS, JavaScript & React. Taught Programming using C, C++, Java and Python.",
    },
  ],
  workSummary: {
    totalExperience: "1.5 yrs",
  },
};

type Props = {};

const Work = (props: Props) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (index: number) => {
    setExpandedRows((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [index];
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 border-gray-200 rounded-lg dark:border-gray-700">
      <Heading heading="Experience" subHeading="Professional Experience" />
      <Table className="my-5 min-w-[380px] select-none">
        <TableBody>
          {work.workHistory.map((work, index) => (
            <React.Fragment key={index}>
              <TableRow
                className="whitespace-nowrap cursor-pointer hover:bg-background/20"
                onClick={() => toggleRow(index)}
              >
                <TableCell className="font-medium">{work.role}</TableCell>
                <TableCell>{work.company}</TableCell>
                <TableCell className="text-right">{work.duration}</TableCell>
              </TableRow>
              <TableRow className="expandable-row hover:bg-background/20">
                <TableCell colSpan={2} className="p-0">
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedRows.includes(index) ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 ps-16">
                      <p>{work.additionalInfo}</p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
        <TableFooter className="bg-transparent">
          {work.workSummary.totalExperience && (
            <TableRow className="bg-transparent hover:bg-transparent">
              <TableCell colSpan={2}>Total Experience</TableCell>
              <TableCell className="text-right">
                {work.workSummary.totalExperience}
              </TableCell>
            </TableRow>
          )}
        </TableFooter>
      </Table>
      <motion.button
        className="my-5 w-44 text-center inline-block border-2 p-3 text-sm font-medium dark:text-white text-neutral-600 transition focus:outline-none focus:ring focus:ring-accent relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <span className="sr-only">Browse All Work Experience</span>
        <span className="mx-1">*</span> Experience{" "}
        <HiArrowUpRight className="inline-block mx-1" />
      </motion.button>
    </div>
  );
};

export default Work;
