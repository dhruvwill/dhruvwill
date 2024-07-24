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
          <ProjectCard image="/ahmd.png" />
          <ProjectCard image="/ahmd.png" />
          <ProjectCard image="/me.jpg" />
          <ProjectCard image="/ahmd.png" />
          <ProjectCard image="/me.jpg" />
          <ProjectCard image="/me.jpg" />
          <ProjectCard image="/ahmd.png" />
          <ProjectCard image="/me.jpg" />
        </ProjectContainer>
      </div>
    </main>
  );
};

export default page;
