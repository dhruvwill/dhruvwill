"use client";
import { useAppStore } from "@/hooks/useAppStore";
import React from "react";
import {
  SidebarContainer,
  SidebarItem,
  SidebarSeperator,
  SidebarSeperatorWithTitle,
} from "@/components/primitives/SidebarPrimitives";
import {
  HiArrowUpRight,
  HiHome,
  HiBriefcase,
  HiMiniRectangleStack,
  HiTrophy,
  HiMiniDocumentDuplicate,
} from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";
import { GrProjects, GrMail } from "react-icons/gr";
import { MdDocumentScanner } from "react-icons/md";
import { usePathname } from "next/navigation";

type Props = {};

const Sidebar = (props: Props) => {
  const path = usePathname();
  const { sidebarOpen, closeSidebar } = useAppStore((state) => state);
  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background bg-opacity-50 z-30 sm:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <SidebarContainer>
        {/* Single Sidebar Item */}
        {/* 
          - To add a custom icon
          - Go to react-icons website 
          - Search for the icon you want
          - Import it at the top of the file
          - Add it to the SidebarItem component 
        */}
        <SidebarItem
          title="About"
          link="/"
          icon={<HiHome size={16} />}
          className="mt-4"
          active={path === "/"}
        />
        <SidebarItem
          title="Writing"
          link="/writing"
          icon={<HiMiniDocumentDuplicate size={16} />}
          endIcon={
            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-accent bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
              3
            </span>
          }
          active={path === "/writing"}
        />
        <SidebarItem
          title="Projects"
          link="/projects"
          icon={<GrProjects size={16} />}
          active={path === "/projects"}
        />
        <SidebarSeperatorWithTitle title="Me" />
        <SidebarItem
          title="Skills"
          link="/skills"
          icon={<HiMiniRectangleStack size={16} />}
          endIcon={
            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
              Pro
            </span>
          }
          active={path === "/skills"}
        />
        <SidebarItem
          title="Education"
          link="/education"
          icon={<PiGraduationCapFill size={16} />}
          active={path === "/education"}
        />
        <SidebarItem
          title="Experience"
          link="/work"
          icon={<HiBriefcase size={16} />}
          active={path === "/work"}
        />
        <SidebarItem
          title="Achievements"
          link="/achievements"
          icon={<HiTrophy size={16} />}
          active={path === "/achievements"}
        />
        <SidebarSeperatorWithTitle title="Socials" />
        <SidebarItem
          title="Resume"
          link="https://drive.google.com/file/d/180Z3Mpf4osta0POa_IhVOdxmlzBB8LTv/view?usp=drive_link"
          icon={<MdDocumentScanner size={16} />}
          endIcon={<HiArrowUpRight size={16} />}
          externalLink
        />
        <SidebarItem
          title="LinkedIn"
          link="https://linkedin.com/in/dhruvwill"
          icon={<FaLinkedin size={16} />}
          endIcon={<HiArrowUpRight size={16} />}
          externalLink
        />
        <SidebarItem
          title="Github"
          link="https://github.com/dhruvwill"
          icon={<FaGithub size={16} />}
          endIcon={<HiArrowUpRight size={16} />}
          externalLink
        />
        <SidebarItem
          title="Mail"
          link="mailto:d@dhruvwill.com"
          icon={<GrMail size={16} />}
          endIcon={<HiArrowUpRight size={16} />}
          externalLink
        />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
