"use client";
import React, { useEffect, useState } from "react";
import Heading from "@/components/ui/Heading";

const about = [
  { title: "Founder @ Design Instantly", accent: "#FF6B6B" },
  { title: "Certified Taxation Practitioner", accent: "#FFD700" },
  { title: "SSIP Grantee, 2L+ Startup Grant", accent: "#00CED1" },
  { title: "Loves Investments & Financial Analysis", accent: "#32CD32" },
];

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 border-gray-200 rounded-lg dark:border-gray-700">
      <Heading heading="The Other Side" subHeading="More About Me" />
      <div className="flex flex-wrap gap-2 my-5 bg-background select-none">
        {about.map((item, index) => (
          <div
            key={index}
            className="relative border-2 p-2 transition-all duration-300 ease-in-out overflow-hidden"
          >
            <span className="relative z-10">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
