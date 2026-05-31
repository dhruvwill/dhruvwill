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
          title={"WritesLike.ai"}
          date={"2024"}
          description={
            "AI-powered LinkedIn content creator. Turn raw ideas or audio notes into polished, scroll-stopping posts using style mimicry, dynamic tone adjustment, and a RAG-based voice training system. Built with Next.js, TypeScript, OpenAI & Anthropic APIs."
          }
          src={"/projects/writeslike_ai_showcase.mp4"}
        />
        <ProjectCard
          title={"GTFO dApp"}
          date={"2024"}
          description={
            "Decentralized bulk asset transfer platform. Send 40+ ERC-20 tokens and NFTs (ERC-721 & ERC-1155) in a single transaction across Ethereum, Polygon, BSC, Optimism & Arbitrum. Built with Next.js, TypeScript, ethers.js & Solidity smart contracts."
          }
          src={"/projects/gtfo_dapp_showcase.mp4"}
        />
        <ProjectCard
          title={"APAS"}
          date={"2024"}
          description={
            "Annual Performance Assessment System. A web-based application for evaluating employees based on their performance throughout the year."
          }
          src={"/projects/APAS_Showcase.mp4"}
        />
        <ProjectCard
          title={"Moveon | Web3"}
          date={"2023"}
          description={
            "Decentralized incentivized game that allows users to earn rewards by participating. Uses blockchain technology for a secure and transparent gaming experience."
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
