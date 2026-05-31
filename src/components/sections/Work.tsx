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
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const work = {
  workHistory: [
    {
      role: "Software Engineer",
      company: "Design Instantly (Founder)",
      duration: "Jan 2026 - Present",
      additionalInfo:
        "Founded and built a design automation platform with AI-powered template generation. Architected a full-stack system with Next.js, NestJS, AWS, and AI integrations using LangChain, OpenRouter, and Fal.ai.",
    },
    {
      role: "Full Stack Developer",
      company: "Quicko",
      duration: "Jan 2025 - Dec 2025",
      additionalInfo:
        "Worked on the Income Tax Mobile App and Glyde platform, built features for tax computation, foreign income, tax relief, and loss adjustment. Developed Crypto PnL and Tax PnL calculator APIs.",
    },
    {
      role: "App Developer Intern",
      company: "Prasad Group of Companies",
      duration: "May 2024 - Aug 2024",
      additionalInfo:
        "Developed cross-platform mobile app using React Native (Expo). Created backend with Node.js, Express & JWT. 100% adoption in 2 weeks across 50+ users.",
    },
    {
      role: "Web Developer Intern",
      company: "PDEU Admin",
      duration: "Jan 2023 - Jul 2023",
      additionalInfo:
        "Built web portal for university employee appraisal using Django, Bootstrap, and JavaScript. Deployed on private Linux VM.",
    },
    {
      role: "Instructor (Volunteer)",
      company: "CDAC",
      duration: "Aug 2022 - Jan 2023",
      additionalInfo:
        "Taught 30+ students web development, programming basics, and React.js. Created curriculum and led group projects.",
    },
  ],
  workSummary: {
    totalExperience: "3+ yrs",
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
