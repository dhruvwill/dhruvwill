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
          title="Introduction to Next.js 13"
          date={new Date("2023-07-15")}
          link="/blog/intro-to-nextjs-13"
        />
        <SidebarBlogItem
          title="Mastering TypeScript: Advanced Techniques"
          date={new Date("2023-07-10")}
          link="/blog/mastering-typescript"
        />
        <SidebarBlogItem
          title="React Server Components Explained"
          date={new Date("2023-07-05")}
          link="/blog/react-server-components"
        />
        <SidebarBlogItem
          title="Introduction to Next.js 13"
          date={new Date("2023-07-15")}
          link="/blog/intro-to-nextjs-13"
        />
        <SidebarBlogItem
          title="Mastering TypeScript: Advanced Techniques"
          date={new Date("2023-07-10")}
          link="/blog/mastering-typescript"
        />
        <SidebarBlogItem
          title="React Server Components Explained"
          date={new Date("2023-07-05")}
          link="/blog/react-server-components"
        />
        <SidebarBlogItem
          title="Introduction to Next.js 13"
          date={new Date("2023-07-15")}
          link="/blog/intro-to-nextjs-13"
        />
        <SidebarBlogItem
          title="Mastering TypeScript: Advanced Techniques"
          date={new Date("2023-07-10")}
          link="/blog/mastering-typescript"
        />
        <SidebarBlogItem
          title="React Server Components Explained"
          date={new Date("2023-07-05")}
          link="/blog/react-server-components"
        />
        <SidebarBlogItem
          title="Introduction to Next.js 13"
          date={new Date("2023-07-15")}
          link="/blog/intro-to-nextjs-13"
        />
        <SidebarBlogItem
          title="Mastering TypeScript: Advanced Techniques"
          date={new Date("2023-07-10")}
          link="/blog/mastering-typescript"
        />
        <SidebarBlogItem
          title="React Server Components Explained"
          date={new Date("2023-07-05")}
          link="/blog/react-server-components"
        />
        <SidebarBlogItem
          title="Introduction to Next.js 13"
          date={new Date("2023-07-15")}
          link="/blog/intro-to-nextjs-13"
        />
        <SidebarBlogItem
          title="Mastering TypeScript: Advanced Techniques"
          date={new Date("2023-07-10")}
          link="/blog/mastering-typescript"
        />
        <SidebarBlogItem
          title="React Server Components Explained"
          date={new Date("2023-07-05")}
          link="/blog/react-server-components"
        />
        <SidebarBlogItem
          title="Introduction to Next.js 13"
          date={new Date("2023-07-15")}
          link="/blog/intro-to-nextjs-13"
        />
        <SidebarBlogItem
          title="Mastering TypeScript: Advanced Techniques"
          date={new Date("2023-07-10")}
          link="/blog/mastering-typescript"
        />
        <SidebarBlogItem
          title="React Server Components Explained"
          date={new Date("2023-07-05")}
          link="/blog/react-server-components"
        />
        <SidebarBlogItem
          title="Introduction to Next.js 13"
          date={new Date("2023-07-15")}
          link="/blog/intro-to-nextjs-13"
        />
        <SidebarBlogItem
          title="Mastering TypeScript: Advanced Techniques"
          date={new Date("2023-07-10")}
          link="/blog/mastering-typescript"
        />
        <SidebarBlogItem
          title="React Server Components Explained"
          date={new Date("2023-07-05")}
          link="/blog/react-server-components"
        />
      </SidebarBlogContainer>
    </>
  );
};

export default BlogSidebar;
