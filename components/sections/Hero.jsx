"use client";
import React from "react";
import IndianClock from "../IndianClock";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="h-screen z-0 flex items-center justify-center w-full">
        <div className="flex justify-around sm:w-4/5 px-4 py-8 mx-auto">
          <div className="hidden md:mt-0 md:flex justify-center">
            <img src="/illustration.png" alt="mockup" className="w-84" />
          </div>
          <div className="place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white font-degular">
              Hi, I am{" "}
              <span className="tracking-wide">
                Dhruv<span className="underline underline-offset-4">will</span>.
              </span>
            </h1>
            <p className="max-w-2xl mb-3 font-acumin font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 border-b pb-3">
              Building software empires, analyzing real ones.
              <br /> Software Engineer by profession; Finance Enthusiast at
              heart.
            </p>
            <p className="max-w-2xl font-light font-acumin text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
              Based in India → <IndianClock />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
