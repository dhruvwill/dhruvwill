"use client";
import React from "react";
import { motion } from "framer-motion";
import { url } from "inspector";

type ProjectCardProps = {
  image: string;
  className?: string;
};

export const ProjectCard = ({ image, className }: ProjectCardProps) => {
  return (
    <motion.div
      className="break-inside-avoid"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: Math.random() * 0.3,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing function
      }}
      // whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <img
        src={image}
        className={`w-full opacity-75 hover:opacity-100 dark:opacity-50 dark:hover:opacity-75 transition-all duration-300 rounded-sm border border-black shadow-md hover:shadow-lg ${className}`}
        alt="Project image"
      />
    </motion.div>
  );
};

type ProjectContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const ProjectContainer = ({
  className,
  children,
}: ProjectContainerProps) => {
  return (
    <motion.div className={`w-full ${className}`}>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 mx-auto space-y-2">
        {children}
      </div>
      <motion.h6
        className="text-md text-center my-5 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        🚧 More awesomeness under construction 🚧
      </motion.h6>
    </motion.div>
  );
};
