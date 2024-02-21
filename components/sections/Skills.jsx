"use client";
import React, { useState } from "react";
import SkillBox from "../SkillBox";
import skills from "@/public/skills";
const Skills = () => {
  const [reset, setReset] = useState(false);
  return (
    // okay so i want to create a skills section for my website,
    // user can drag any skill box, we'll use react-draggable.
    // when the user takes the box out of bounding wrapper the element stays
    // on screen place even when the user scrolls to the bottom of website,
    // but when user take the skills inside the bounding box and drops the box it
    // automatically fits in place

    <div className="w-screen min-h-[calc(100vh-64px)] py-10" id="skills">
      <div className="wrapper sm:w-4/5 mx-auto h-auto z-0">
        <h1 className="mb-4 ms-4 sm:ms-0 text-4xl font-medium tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white font-degular">
          ...Skills
        </h1>
        <div className="flex items-center flex-wrap border rounded-lg flex-grow px-5 sm:p-0 gap-2 h-full my-5 relative z-0">
          <SkillBox skills={skills} rerender={reset} />
        </div>
        {/* <button
          className="mx-4 sm:mx-0 border-background bg-foreground text-background font-medium font-acumin tracking-wider py-2 px-4 rounded-md flex gap-1"
          onClick={() => {
            alert("done");
            setReset(!reset);
          }}
        >
          <svg className="h-6 w-6" viewBox="0 0 192 192">
            <g fill="none" fillRule="evenodd">
              <path
                className="dark:stroke-black stroke-white"
                strokeWidth="12"
                d="M61.126 56c10.798 0 20.571 4.418 27.646 11.554 7.094 7.155 11.478 17.04 11.478 27.956 0 10.915-4.384 20.8-11.478 27.954-7.075 7.136-16.849 11.554-27.646 11.554-10.798 0-20.572-4.418-27.648-11.554C26.384 116.31 22 106.425 22 95.51c0-10.916 4.384-20.801 11.478-27.956C40.553 60.418 50.328 56 61.126 56Zm72.062 2.666c1.766 0 3.404.768 4.92 1.96 2.18 1.716 4.087 4.273 5.726 7.384 3.706 7.038 5.917 16.775 5.917 27.5 0 10.723-2.21 20.46-5.917 27.498-1.638 3.112-3.545 5.67-5.726 7.385-1.515 1.192-3.153 1.96-4.919 1.96-1.765 0-3.403-.768-4.918-1.96-2.181-1.716-4.088-4.273-5.727-7.384-3.706-7.039-5.917-16.776-5.917-27.5 0-10.722 2.21-20.46 5.917-27.499 1.638-3.111 3.545-5.668 5.726-7.384 1.515-1.192 3.152-1.96 4.918-1.96Z"
              />

              <path
                className="dark:fill-black fill-white"
                fillRule="nonzero"
                d="M168.065 57.128c4.381 0 7.935 17.184 7.935 38.382 0 21.191-3.552 38.381-7.935 38.381-4.384 0-7.934-17.185-7.934-38.381s3.552-38.382 7.934-38.382Z"
              />
            </g>
          </svg>
          ↗
        </button> */}
      </div>
    </div>
  );
};

export default Skills;
