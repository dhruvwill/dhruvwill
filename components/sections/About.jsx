import React from "react";
import AboutCard from "../AboutCard";

const About = () => {
  return (
    <div className="w-screen min-h-[calc(100vh-64px)] bg-foreground" id="about">
      <div className="w-full min-h-[calc(100vh-64px)] py-10 bg-background">
        <div className="sm:w-4/5 p-2 sm:p-0 mx-auto ">
          <h1 className="mb-10 ms-4 sm:ms-0 text-4xl font-medium tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white font-degular">
            ...About
          </h1>
          <AboutCard />
        </div>
      </div>
    </div>
  );
};

export default About;
