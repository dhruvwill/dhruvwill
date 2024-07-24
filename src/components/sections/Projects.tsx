"use client";
import React from "react";
import Heading from "@/components/ui/Heading";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { ProjectCard, ProjectContainer } from "../Project";
import { useRouter } from "next/navigation";

type Props = {};

const Projects = (props: Props) => {
  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 border-gray-200 rounded-lg dark:border-gray-700">
      <Heading heading="Skillset in action" subHeading="Featured Projects" />
      <ProjectContainer>
        <ProjectCard
          title={"A Few Thoughts on Spending Money"}
          date={"21 Jan, 2024"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
          }
          image={"https://via.placeholder.com/150"}
        />
        <ProjectCard
          title={"A Few Thoughts on Spending Money"}
          date={"21 Jan, 2024"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
          }
          image={"https://via.placeholder.com/150"}
        />
        <ProjectCard
          title={"A Few Thoughts on Spending Money"}
          date={"21 Jan, 2024"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
          }
          image={"https://via.placeholder.com/150"}
        />
        <ProjectCard
          title={"A Few Thoughts on Spending Money"}
          date={"21 Jan, 2024"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
          }
          image={"https://via.placeholder.com/150"}
        />
        <ProjectCard
          title={"A Few Thoughts on Spending Money"}
          date={"21 Jan, 2024"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
          }
          image={"https://via.placeholder.com/150"}
        />
        <ProjectCard
          title={"A Few Thoughts on Spending Money"}
          date={"21 Jan, 2024"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
          }
          image={"https://via.placeholder.com/150"}
        />
        <ProjectCard
          title={"A Few Thoughts on Spending Money"}
          date={"21 Jan, 2024"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
          }
          image={"https://via.placeholder.com/150"}
        />
        <ProjectCard
          title={"A Few Thoughts on Spending Money"}
          date={"21 Jan, 2024"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
          }
          image={"https://via.placeholder.com/150"}
        />
        <ProjectCard
          title={"A Few Thoughts on Spending Money"}
          date={"21 Jan, 2024"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
          }
          image={"https://via.placeholder.com/150"}
        />
      </ProjectContainer>

      <motion.button
        className="my-5 w-44 text-center inline-block border-2 p-3 text-sm font-medium dark:text-white text-neutral-600 transition focus:outline-none focus:ring focus:ring-accent relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onClick={() => router.push("/projects")}
      >
        <span className="sr-only">All Projects</span>
        <span className="mx-1">*</span> Projects{" "}
        <HiArrowUpRight className="inline-block mx-1" />
      </motion.button>
    </div>
  );
};

export default Projects;
