"use client";
import React from "react";
import Heading from "@/components/ui/Heading";
import { Blog, BlogContainer } from "@/components/Blog";
import { motion } from "motion/react";
import { HiArrowUpRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

type Props = {};

const Blogs = (props: Props) => {
  const router = useRouter();
  return (
    <div className="py-6">
      <div className="h-full max-w-4xl mx-auto p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <Heading heading="Ink" subHeading="Recent Writings" />
        <BlogContainer>
          <Blog
            title="Node.js with TypeScript: The Correct Way"
            date="To be Released"
            description="Discover best practices for integrating TypeScript into your Node.js projects. From setup to advanced patterns, learn how to leverage type safety and modern JavaScript features to build robust, scalable applications."
            disabled
          />

          <Blog
            title="Semantic Software Versioning: A Comprehensive Guide"
            date="To be Released"
            description="Demystify the art of version numbering with our in-depth look at Semantic Versioning (SemVer). Learn how to effectively communicate changes, manage dependencies, and maintain backward compatibility in your software projects."
            disabled
          />
          <Blog
            title="Advanced VSCode Tips and Tricks"
            date="To be Released"
            description="Unlock the full potential of Visual Studio Code with our comprehensive guide. Learn keyboard shortcuts, powerful extensions, and customization techniques that will supercharge your coding efficiency."
            disabled
          />
        </BlogContainer>
        <motion.button
          className="my-5 w-44 text-center inline-block border-2 p-3 text-sm font-medium dark:text-white text-neutral-600 transition focus:outline-none focus:ring focus:ring-accent relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          onClick={() => router.push("/writing")}
        >
          <span className="sr-only">All Writing</span>
          <span className="mx-1">*</span>Writings{" "}
          <HiArrowUpRight className="inline-block mx-1" />
        </motion.button>
      </div>
    </div>
  );
};

export default Blogs;
