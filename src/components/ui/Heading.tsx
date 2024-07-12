import { cn } from "@/lib/utils";
import { Ubuntu } from "next/font/google";
import React from "react";

type Props = {
  heading: string;
  subHeading: string;
};

const ubuntu = Ubuntu({ weight: "500", subsets: ["latin"] });
const Heading = ({ heading, subHeading }: Props) => {
  return (
    <div>
      <h2 className="text-md text-accent mb-2 tracking-wider">{heading}</h2>

      <h2
        className={cn(
          "text-2xl md:text-2xl font-semibold pb-4 bg-gray_gradient text-neutral-600 dark:text-white",
          ubuntu.className
        )}
      >
        {subHeading}
      </h2>
    </div>
  );
};

export default Heading;
