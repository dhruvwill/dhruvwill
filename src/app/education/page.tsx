"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading";
import { HiArrowUpRight } from "react-icons/hi2";

const educationData = [
  {
    year: "'25",
    period: "2022 – 2025",
    title: "BTech in Computer Science & Engineering",
    institution: "Pandit Deendayal Energy University",
    location: "Gandhinagar",
    institutionLink: "https://pdpu.ac.in",
    accentColor: "from-blue-500/20 to-indigo-500/20",
    dotColor: "bg-blue-400",
    score: "9 CGPA",
    subjects: [
      "DSA",
      "Discrete Mathematics",
      "OOPs with Java",
      "Design & Analysis of Algorithm",
      "Design Patterns",
      "DBMS",
      "Operating Systems",
      "TOC",
      "Advance Python",
      "Computer Networks",
      "Cryptography & Information Security",
      "Web Technology",
      "Software Engineering",
      "System Software & Compiler Design",
      "Artificial Intelligence",
      "Cloud Computing",
      "Big Data Analytics",
      "Industry 4.0",
      "Financial Management",
    ],
  },
  {
    year: "'22",
    period: "2019 – 2022",
    title: "Diploma in Computer Engineering",
    institution: "VPMP Polytechnic",
    location: "Gandhinagar",
    institutionLink: "https://vpmp.ac.in/",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    dotColor: "bg-emerald-400",
    score: "9.9 CGPA",
    scoreNote: "ACPC D2D Rank 49",
    subjects: [
      "DSA",
      "OOPs (Java)",
      "DBMS",
      "Operating Systems",
      "Computer Network Security",
      "Web Development",
      "App Development",
      "Software Engineering",
      "Computer Maintenance & Troubleshooting",
      "Network Management",
    ],
  },
  {
    year: "'19",
    period: "2019",
    title: "SSC (10th Grade)",
    institution: "Amrut High School",
    location: "Ahmedabad",
    institutionLink: "https://amrutschool.edu.in/",
    accentColor: "from-amber-500/20 to-orange-500/20",
    dotColor: "bg-amber-400",
    score: "71%",
    scoreNote: "",
    subjects: [],
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

        <div className="flex flex-col gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.18,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
            >
              {/* Subtle gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${edu.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Large watermark year */}
              <span className="absolute -top-6 -right-2 font-cal text-[140px] md:text-[180px] leading-none text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-500 select-none pointer-events-none">
                {edu.year}
              </span>

              {/* Content */}
              <div className="relative z-10 p-5 md:p-7">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-2 w-2 h-2 rounded-full ${edu.dotColor} shrink-0`}
                    />
                    <div>
                      <h3 className="font-cal text-xl md:text-2xl text-foreground leading-tight">
                        {edu.title}
                      </h3>
                      <a
                        href={edu.institutionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors mt-0.5 group/link"
                      >
                        {edu.institution}, {edu.location}
                        <HiArrowUpRight
                          size={10}
                          className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                        />
                      </a>
                    </div>
                  </div>
                  <time className="text-xs text-muted-foreground/60 font-mono tracking-tight whitespace-nowrap pl-5 sm:pl-0">
                    {edu.period}
                  </time>
                </div>

                {/* Score */}
                <div className="pl-5 mb-5 flex items-baseline gap-2">
                  <span className="font-cal text-2xl text-foreground">
                    {edu.score}
                  </span>
                  {edu.scoreNote && (
                    <span className="text-xs text-muted-foreground/50">
                      {edu.scoreNote}
                    </span>
                  )}
                </div>

                {/* Subjects */}
                {edu.subjects.length > 0 && (
                  <div className="pl-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 mb-2.5">
                      Coursework
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-muted-foreground/80 transition-colors duration-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
