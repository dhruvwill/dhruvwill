import React from "react";
import Heading from "@/components/ui/Heading";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="py-6 sm:ml-64">
      <div className="max-w-4xl mx-auto p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <Heading heading="By the Night" subHeading="More About Me" />
      </div>
    </div>
  );
};

export default About;
