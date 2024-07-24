"use client";
import { BrowserComponent } from "@/components/Browser";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { CgMediaLive } from "react-icons/cg";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="relative h-[calc(100vh-64px)] overflow-scroll mt-16">
      <div className="w-full h-full flex flex-col items-center lg:flex-row p-5">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-semibold font-cal tracking-wider">
            Vault
          </h1>
          <p className="max-w-md text-center">
            Introducing Vault - the premium template for Fintech companies.
            Vault is a professional and cutting-edge website template designed
            specifically for Fintech companies.
          </p>
          <div className="flex gap-2 my-3">
            <motion.button
              className="flex items-center gap-3 shining-button border-2 bg-background p-3 text-sm font-medium dark:text-white text-neutral-600 transition hover:bg-accent/20 focus:outline-none focus:ring focus:ring-accent relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Live preview
              <CgMediaLive size={20} />
            </motion.button>
            <motion.button
              className="flex gap-3 items-center border-2 bg-background p-3 text-sm font-medium dark:text-white text-neutral-600 transition hover:bg-accent/20 focus:outline-none focus:ring focus:ring-accent relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Github
              <RiGithubLine size={20} />
            </motion.button>
          </div>
        </div>
        <div className="w-full h-auto max-h-full flex flex-col gap-4 overflow-y-scroll">
          <style>
            {`
             ::-webkit-scrollbar {
                display: none;
              }
          `}
          </style>
          <img src="/ahmd.png" alt="me" className="h-auto w-full" />
          <img src="/ahmd.png" alt="me" className="h-auto w-full" />
          <img src="/ahmd.png" alt="me" className="h-auto w-full" />
          <img src="/ahmd.png" alt="me" className="h-auto w-full" />
          {/* <BrowserComponent
            url="localhost"
            className="max-w-2xl aspect-video min-h-96"
          >
            <img
              src="/ahmd.png"
              alt="me"
              className="h-full w-full object-contain"
            />
          </BrowserComponent>
          <BrowserComponent
            url="localhost"
            className="max-w-2xl aspect-video min-h-96"
          >
            <img src="/ahmd.png" alt="me" className="h-auto w-full" />
          </BrowserComponent>
          <BrowserComponent
            url="localhost"
            className="max-w-2xl aspect-video min-h-96"
          >
            <img src="/ahmd.png" alt="me" className="h-auto w-full" />
          </BrowserComponent> */}
        </div>
      </div>
    </main>
  );
};

export default Page;
