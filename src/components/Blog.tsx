"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useState } from "react";
type BlogProps = {
  title: string;
  date: string;
  description: string;
};
export const Blog = ({ title, date, description }: BlogProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="blog min-w-[360px] max-w-xl flex-grow p-5 flex flex-col justify-between h-full cursor-pointer"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <h2
        className={`text-lg font-medium font-degular my-2 ${
          hovered ? "underline underline-offset-2 decoration-slate-400" : ""
        }`}
      >
        {title.length > 100 ? title.slice(0, 100) + "..." : title}
      </h2>
      <p className="publish-date text-gray-400 text-sm my-2">{date}</p>
      <p className="text-gray-500 my-3 text-md">
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

type BlogContainerProps = {
  className?: string;
  children: React.ReactNode;
};
export const BlogContainer = ({ className, children }: BlogContainerProps) => {
  return (
    <div
      className={cn(
        "blogs flex items-center flex-nowrap overflow-x-scroll border-double border-y-4 h-full my-5 px-3 divide-x",
        className
      )}
    >
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
      {children}
    </div>
  );
};
