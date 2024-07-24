import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SmoothScroll from "./SmoothScroll";

type ProjectCardProps = {
  title: string;
  date: string;
  description: string;
  image: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="cursor-ne flex-shrink-0">
      <img
        src={props.image}
        alt={props.title}
        className="w-full aspect-video h-52 w-auto object-cover mb-2 pointer-events-none"
        draggable={false}
      />
    </div>
  );
};

type ProjectContainerProps = {
  children: React.ReactNode;
};

export const ProjectContainer = (props: ProjectContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerRef.current?.addEventListener("scroll", () => {
      // console.log("scrolled");
    });
    return () => {
      containerRef.current?.removeEventListener("scroll", () => {
        // console.log("scolled");
      });
    };
  });

  return (
    // <SmoothScroll>
    <div
      ref={containerRef}
      className="flex gap-2 w-full overflow-x-scroll scroll-smooth bg-scroll will-change-scroll select-none"
    >
      {props.children}
    </div>
    // </SmoothScroll>
  );
};
