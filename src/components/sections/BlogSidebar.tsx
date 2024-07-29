"use client";
import React from "react";
import {
  SidebarBlogContainer,
  SidebarBlogItem,
} from "@/components/primitives/SidebarPrimitives";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/hooks/useAppStore";
import { LucideChevronLeftSquare } from "lucide-react";

type Props = {};

const BlogSidebar = (props: Props) => {
  const { sidebarOpen, blogSidebarOpen, closeBlogSidebar } = useAppStore(
    (state) => state
  );
  return (
    <>
      {/* Overlay */}
      {blogSidebarOpen && (
        <div
          className="fixed inset-0 bg-background bg-opacity-50 z-30 lg:hidden"
          onClick={closeBlogSidebar}
        ></div>
      )}

      <SidebarBlogContainer
        title="Latest Blog Posts"
        className="lg:left-64 w-80"
      >
        <div className="lg:hidden p-3 border-b w-full bg-background sticky top-0">
          <button
            className="flex gap-1 items-center"
            onClick={() => {
              closeBlogSidebar();
            }}
          >
            <LucideChevronLeftSquare />
            Go back
          </button>
        </div>
        <SidebarBlogItem
          title="Advance VsCode Tips and Tricks"
          // date={new Date("2023-07-15")}
          date={"To be Released"}
          link="/"
        />
        <SidebarBlogItem
          title="Node with typescript (The correct way)"
          date={"To be Released"}
          // date={new Date("2023-07-10")}
          link="/"
        />
        <SidebarBlogItem
          title="Semantic Software versioning : A guide"
          date={"To be Released"}
          // date={new Date("2023-07-05")}
          link="/"
        />
      </SidebarBlogContainer>
    </>
  );
};

export default BlogSidebar;
