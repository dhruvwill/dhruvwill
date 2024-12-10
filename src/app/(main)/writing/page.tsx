"use client";
import {
  SidebarBlogContainer,
  SidebarBlogItem,
  SidebarContainer,
  SidebarItem,
  SidebarSeperatorWithTitle,
} from "@/components/primitives/SidebarPrimitives";
import BlogSidebar from "@/components/sections/BlogSidebar";
import { useAppStore } from "@/hooks/useAppStore";
import React, { useEffect } from "react";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { MdFeaturedPlayList } from "react-icons/md";

type Props = {};

const Writing = (props: Props) => {
  const { openBlogSidebar } = useAppStore((state) => state);
  useEffect(() => {
    openBlogSidebar();
  }, []);
  return (
    <main className="relative h-screen overflow-scroll">
      {/* <BlogSidebar /> */}
      <div className="w-full h-full">
        <div className="flex flex-col gap-2 items-center justify-center h-full">
          <h1 className="text-2xl font-semibold">Writing</h1>
          <p className="text-sm text-gray-500">
            My thoughts on tech, finance, and life.
          </p>
          <button
            onClick={() => {
              openBlogSidebar();
            }}
            className="my-5 border-2 p-2 text-sm flex gap-2 md:hidden"
          >
            <MdFeaturedPlayList size={20} />
            Select a blog
          </button>
        </div>
      </div>
    </main>
  );
};

export default Writing;
