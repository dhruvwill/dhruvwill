"use client";
import React from "react";
import { ClickImageElement, HoverImageLink } from "@/components/HoveringImage";
import IndianTime from "@/components/IndianClock";
import QuickLinks, { QLink } from "@/components/sections/QuickLinks";
import { motion } from "framer-motion";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { GoProjectRoadmap } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { TbWriting } from "react-icons/tb";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 border-gray-200 rounded-lg dark:border-gray-700">
      <div>
        <h1 className="text-4xl mt-6 tracking-wider font-cal font-medium text-neutral-600 dark:text-white">
          <span className="block">
            <span className="inline-block relative -left-3 my-1 wave">👋</span>
          </span>
          Hi, I&apos;m Dhruv
          {/* <span className="underline underline-offset-4">will</span>. */}
          <HoverImageLink
            text="will"
            imageUrl="/me.jpg"
            className="text-accent"
          />
          .
        </h1>
        <div className="flex flex-col xl:flex-row xl:divide-x dark:divide-gray-700 divide-gray-200">
          <div className="max-w-xl flex flex-col gap-7 pt-6 pr-6">
            <p className="text-neutral-600 dark:text-gray-100">
              I&apos;m a Full Stack Developer and Cloud Engineer, currently
              building{" "}
              <a
                href="https://designinstantly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Design Instantly
              </a>
              . I have expertise in building scalable web and mobile apps, AI
              integrations, and cloud infrastructure. Passionate about creating
              highly functional products that make a significant impact.
            </p>
            <p className="text-neutral-600 dark:text-gray-100 italic border-l-2 pl-3">
              &quot; From the shadows, until I get there. &quot;
            </p>
            <ClickImageElement
              imageUrl="/ahmd.png"
              imageWidth={300}
              imageHeight={200}
              className="max-w-max"
            >
              <motion.span
                className="shining-button inline-block border-2 bg-background p-3 text-sm font-medium dark:text-white text-neutral-600 transition hover:bg-accent/20 focus:outline-none focus:ring focus:ring-accent relative overflow-hidden cursor-crosshair"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                Based in India <span className="text-accent">🇮🇳</span> →{" "}
                <IndianTime />
              </motion.span>
            </ClickImageElement>
          </div>
          <QuickLinks>
            <QLink
              href="/"
              text="Learn More about me"
              icon={
                <CgProfile className="h-10 w-10 border border-foreground/20 rounded-sm p-2 text-neutral-400" />
              }
            />
            <QLink
              href="/writing"
              text="Read a recent blog"
              icon={
                <TbWriting className="h-10 w-10 border border-foreground/20 rounded-sm p-2 text-neutral-400" />
              }
            />
            <QLink
              href="/work"
              text="Browse my work history"
              icon={
                <MdWorkOutline className="h-10 w-10 border border-foreground/20 rounded-sm p-2 text-neutral-400" />
              }
            />
            <QLink
              href="/projects"
              text="See my projects"
              icon={
                <GoProjectRoadmap className="h-10 w-10 border border-foreground/20 rounded-sm p-2 text-neutral-400" />
              }
            />
          </QuickLinks>
        </div>
      </div>
    </div>
  );
};

export default Hero;
