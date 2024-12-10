"use client";
import { ProjectCard, ProjectContainer } from "@/components/projects/Project";
import Heading from "@/components/ui/Heading";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="relative h-[calc(100vh-64px)] overflow-scroll mt-16">
      <div className="p-2 md:p-5">
        <Heading
          heading="Project Gallery"
          subHeading="Bringing Ideas to Life"
          className="border-b mb-5"
        />
        <ProjectContainer>
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/APAS_Showcase.mp4"
            title="APAS"
            description="Annual Performance Assessment System"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/Flamedots_Showcase.mp4"
            title="Flamedots"
            description="Customized Sneakers"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/Studydx_Showcase.mp4"
            title="Studydx"
            description="Helping Students Study Better"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/Odoo_Showcase.mp4"
            title="Odoo Hackathon | Finals"
            description="Library Management System (8 hrs)"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/Investify_Showcase.mp4"
            title="Investify"
            description="AU Hackathon | Finals"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/Moveon_Showcase.mp4"
            title="Moveon | Web3"
            description="Decentralized Incentivized Game"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/Scribbd_Showcase.mp4"
            title="Scribbd"
            description="Draw and Guess Multiplayer game"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/IamDonor_Showcase.mp4"
            title="IamDonor"
            description="Blood Donation Drive"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/Buzzfeed_Showcase.mp4"
            title="Buzzfeed"
            description="Which superhero are you?"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/SKI_Showcase.mp4"
            title="CKI"
            description="Symmetric Key Included | Cryptography"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/Medway_Showcase.mp4"
            title="Medway"
            description="Optimize Appointment Scheduling using AI | Smart India Hackathon (SIH)"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/SOU_Showcase.mp4"
            title="Statue of Unity"
            description="A tribute to Sardar Vallabhbhai Patel"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/CAS_Showcase.mp4"
            title="CAS"
            description="Cv Based Attendance System"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/Mathpoint_Showcase.mp4"
            title="Mathpoint"
            description="Student Management System"
          />
          <ProjectCard
            image="/me.png"
            videoSrc="/projects/MCCS_Showcase.mp4"
            title="MCCS"
            description="Startup Launch Website using Particle.js"
          />
        </ProjectContainer>
      </div>
    </main>
  );
};

export default page;
