"use client";
import React from "react";
import Heading from "@/components/ui/Heading";
import { Blog, BlogContainer } from "@/components/Blog";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="py-6 sm:ml-64">
      <div className="max-w-4xl mx-auto p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <Heading heading="Ink" subHeading="Writings" />
        <BlogContainer>
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
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
