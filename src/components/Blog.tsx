"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useState } from "react";

type BlogProps = {
  title: string;
  date: string;
  description: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Blog = ({
  title,
  date,
  description,
  disabled = false,
  onClick,
}: BlogProps) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        "blog min-w-[360px] max-w-xl flex-grow p-5 flex flex-col justify-between h-full",
        {
          "cursor-pointer": !disabled,
          "cursor-not-allowed opacity-50": disabled,
        }
      )}
      onMouseEnter={() => {
        if (!disabled) setHovered(true);
      }}
      onMouseLeave={() => {
        if (!disabled) setHovered(false);
      }}
      onClick={handleClick}
    >
      <h2
        className={cn("text-lg font-medium font-degular my-2", {
          "underline underline-offset-2 decoration-slate-400":
            hovered && !disabled,
        })}
      >
        {title.length > 100 ? title.slice(0, 100) + "..." : title}
      </h2>
      <p className="publish-date text-gray-400 text-sm my-2">{date}</p>
      <p className="text-gray-500 my-3 text-md">
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </p>
      <div
        className={cn("w-full flex justify-end", {
          "pe-0": hovered && !disabled,
          "pe-3": !hovered || disabled,
        })}
      >
        <svg
          className="w-6 h-6"
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
