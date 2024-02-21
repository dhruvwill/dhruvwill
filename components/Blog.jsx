"use client";
import React from "react";
import { useState } from "react";
const Blog = ({ title, date, description }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="blog min-w-[380px] p-5 flex flex-col justify-between h-full cursor-pointer"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <h2
        className={`text-2xl font-medium font-degular my-2 ${
          hovered ? "underline underline-offset-2 decoration-slate-400" : ""
        }`}
      >
        {title.length > 100 ? title.slice(0, 100) + "..." : title}
      </h2>
      <p className="publish-date text-gray-400">{date}</p>
      <p className="text-gray-500 my-3">
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </p>
      <div className={`w-full flex justify-end  ${hovered ? "pe-0" : "pe-3"}`}>
        <svg
          className="w-6 h-6 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Blog;
