"use client";
import React from "react";
import Heading from "@/components/ui/Heading";
import { motion } from "motion/react";
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
          title={"APAS | Annual Performance Assessment System"}
          date={"21 Jan, 2024"}
          description={
            "APAS is a system that helps in the annual performance assessment of employees. It is a web-based application that helps in the evaluation of employees based on their performance throughout the year."
          }
          src={"/projects/APAS_Showcase.mp4"}
        />
        <ProjectCard
          title={"Flamedots | Customized Sneakers"}
          date={"21 Jan, 2024"}
          description={
            "Flamedots is a platform that allows users to customize their sneakers. It is a web-based application that helps users to design their sneakers according to their preferences. SSIP Funded Project"
          }
          src={"/projects/Flamedots_Showcase.mp4"}
        />
        <ProjectCard
          title={"Studydx | Helping Students Study Better"}
          date={"21 Jan, 2024"}
          description={
            "Studydx is a platform that helps students study better. It is a web-based application that provides students with resources and tools to help them study effectively. Currently sharing the PYQ for the students. 5k Peak monthly active users."
          }
          src={"/projects/Studydx_Showcase.mp4"}
        />
        <ProjectCard
          title={"Scribbd | Draw and Guess Multiplayer game"}
          date={"21 Jan, 2024"}
          description={
            "Scribbd is a multiplayer game where players take turns drawing and guessing words. It is a web-based application that allows users to play with their friends and family. Scribbl Clone"
          }
          src={"/projects/Scribbd_Showcase.mp4"}
        />
        <ProjectCard
          title={"Moveon | Web3"}
          date={"21 Jan, 2024"}
          description={
            "Moveon is a decentralized incentivized game that allows users to earn rewards by participating in the game. It is a web-based application that uses blockchain technology to provide users with a secure and transparent gaming experience."
          }
          src={"/projects/Moveon_Showcase.mp4"}
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
