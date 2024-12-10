import { cn } from "@/lib/utils";
import { Ubuntu } from "next/font/google";
import React from "react";
import { motion } from "motion/react";

type Props = {
  heading: string;
  subHeading: string;
  className?: string;
};

const ubuntu = Ubuntu({ weight: "500", subsets: ["latin"] });
const Heading = ({ heading, subHeading, className }: Props) => {
  return (
    <div className={className}>
      <motion.h2 className="text-sm md:text-md text-accent mb-2 tracking-wider">
        {heading}
      </motion.h2>
      <motion.h2
        className={cn(
          "text-xl md:text-2xl font-semibold pb-4 bg-gray_gradient text-neutral-600 dark:text-white",
          ubuntu.className
        )}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {subHeading}
      </motion.h2>
    </div>
  );
};

export default Heading;
