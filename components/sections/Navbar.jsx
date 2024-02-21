"use client";
import Link from "next/link";
import React from "react";
import ThemeToggler from "../ThemeToggler";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <nav className="h-16 z-50 p-4 bg-background text-black border-b dark:text-white border-black dark:border-white fixed top-0 w-full">
      <div className="wrapper flex items-center justify-between flex-nowrap sm:w-4/5 h-full mx-auto">
        <h1 className="name font-degular font-semibold text-2xl text-nowrap md:mr-8 mr-4">
          Dhruvil S Shah
        </h1>
        <div className="flex items-center justify-end md:justify-between w-10/12 h-full font-degular text-md">
          <div className="hidden md:flex gap-4">
            <button
              href={"/"}
              onClick={() => {
                scrollToSection("about");
              }}
              className="group transition-all duration-300 ease-in-out"
            >
              <span className="pb-1 bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About
              </span>
            </button>
            <button
              href={"/"}
              onClick={() => {
                scrollToSection("blogs");
              }}
              className="group transition-all duration-300 ease-in-out"
            >
              <span className="pb-1 bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Blogs
              </span>
            </button>
            <button
              href={"/"}
              onClick={() => {
                scrollToSection("projects");
              }}
              className="group transition-all duration-300 ease-in-out"
            >
              <span className="pb-1 bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Projects
              </span>
            </button>
            <button
              href={"/"}
              onClick={() => {
                scrollToSection("social");
              }}
              className="group transition-all duration-300 ease-in-out"
            >
              <span className="pb-1 bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Social
              </span>
            </button>
          </div>
          {isOpen && (
            <div className="mobile-nav dark:bg-black bg-white absolute top-0 left-0 h-screen w-screen -z-1 flex flex-col items-center justify-center md:hidden gap-6">
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsOpen(false);
                }}
                className="group transition-all duration-300 ease-in-out text-2xl"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  About
                </span>
              </button>
              <button
                onClick={() => {
                  scrollToSection("blogs");
                  setIsOpen(false);
                }}
                className="group transition-all duration-300 ease-in-out text-2xl"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Blogs
                </span>
              </button>
              <button
                onClick={() => {
                  scrollToSection("projects");
                  setIsOpen(false);
                }}
                className="group transition-all duration-300 ease-in-out text-2xl"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Projects
                </span>
              </button>
              <button
                onClick={() => {
                  scrollToSection("social");
                  setIsOpen(false);
                }}
                className="group transition-all duration-300 ease-in-out text-2xl"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Social
                </span>
              </button>
              <div className={"mobile-nav-footer absolute bottom-0 w-full xs:hidden flex justify-center p-2"}>
                <ThemeToggler />
              </div>
            </div>
          )}
          <div className="flex items-center gap-3">
            <Link
              href={
                "https://drive.google.com/file/d/180Z3Mpf4osta0POa_IhVOdxmlzBB8LTv/view?usp=drive_link"
              }
              target="_blank"
              title="See Resume"
              className="px-5 py-2 font-medium border border-b-4 border-r-4 hover:border-b hover:border-r border-black dark:border-white rounded-lg shadow-lg hover:shadow-sm"
            >
              Resume&nbsp;↗
            </Link>
            <div className={"hidden xs:block"}>
                <ThemeToggler />
            </div>
            {/*<ThemeToggler />*/}
            <div className="md:hidden block">
              <button
                className="relative group"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent duration-200">
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div
                      className={`bg-black dark:bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        isOpen ? "rotate-[42deg]" : ""
                      }`}
                    ></div>
                    <div
                      className={`bg-black dark:bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                        isOpen ? "-translate-x-10" : ""
                      }`}
                    ></div>
                    <div
                      className={`bg-black dark:bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        isOpen ? "-rotate-[42deg]" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
