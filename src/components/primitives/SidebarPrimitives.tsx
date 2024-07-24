import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { useAppStore } from "@/hooks/useAppStore";
import { HiArrowRight } from "react-icons/hi2";

type SidebarSeperatorWithTitleProps = {
  title: string;
};
export const SidebarSeperatorWithTitle = ({
  title,
}: SidebarSeperatorWithTitleProps) => {
  return (
    <li className="font-light text-sm w-full flex items-center my-3">
      <div className="flex relative items-center w-full">
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full" />
        <span className="absolute px-3 text-xs text-gray-900 bg-background dark:text-white rounded-sm">
          <span className="my-2">{title}</span>
        </span>
      </div>
    </li>
  );
};

export const SidebarSeperator = () => {
  return (
    <li className="font-light text-sm w-full flex items-center">
      <hr className="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
    </li>
  );
};

type SidebarItemProps = {
  icon?: React.ReactNode;
  title: string;
  link: string;
  externalLink?: boolean;
  endIcon?: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
};
export const SidebarItem = ({
  icon,
  title,
  link,
  externalLink,
  endIcon,
  className,
  active,
  onClick,
}: SidebarItemProps) => {
  const { closeSidebar } = useAppStore((state) => state);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    closeSidebar();
  };
  return (
    <li
      className={cn(
        `font-light text-sm w-full flex items-center ps-2`,
        className
      )}
      onClick={handleClick}
    >
      <Link
        href={link}
        {...(externalLink
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="flex items-center w-full m-2 rounded-sm text-gray-900 dark:text-white"
      >
        {icon && (
          <span className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-sm me-3">
            {icon}
          </span>
        )}
        <span className="font-medium">{title}</span>
        {endIcon && <span className="ms-auto">{endIcon}</span>}
      </Link>
      {active && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="w-1 rounded-s-xl bg-accent"
        ></motion.div>
      )}
    </li>
  );
};

type SidebarBlogItemProps = {
  title: string;
  date: Date;
  link: string;
  className?: string;
};

export const SidebarBlogItem = ({
  title,
  date,
  link,
  className,
}: SidebarBlogItemProps) => {
  return (
    <li className={cn("font-light text-sm w-full", className)}>
      <Link
        href={link}
        className="flex items-center justify-between transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-3"
      >
        <div className="flex flex-col gap-1">
          <span className="font-medium text-gray-900 dark:text-white line-clamp-2">
            {title}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            {format(date, "MMMM d, yyyy")}
          </span>
        </div>
        <HiArrowRight size={16} className="min-w-4" />
      </Link>
    </li>
  );
};

type SidebarBlogContainerProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const SidebarBlogContainer = ({
  title,
  children,
  className,
}: SidebarBlogContainerProps) => {
  const { blogSidebarOpen } = useAppStore((state) => state);
  return (
    <aside
      className={cn(
        `fixed top-0 left-0 z-40 w-64 h-screen mt-16 transition-transform border-r border-gray-200 lg:translate-x-0 dark:border-gray-700 slim-scrollbar`,
        className,
        { "-translate-x-full": !blogSidebarOpen }
      )}
      aria-label="Sidebar"
    >
      <div className="h-full w-full pb-1 overflow-y-auto bg-background bg-starry">
        <ul className="font-medium space-y-2 mt-2 px-2 relative">{children}</ul>
      </div>
    </aside>
  );
};

type SidebarContainerProps = {
  className?: string;
  children: React.ReactNode;
};
export const SidebarContainer = ({
  className,
  children,
}: SidebarContainerProps) => {
  const { sidebarOpen } = useAppStore((state) => state);
  return (
    <aside
      className={cn(
        `fixed top-0 left-0 z-40 w-64 h-screen mt-16 transition-transform border-r border-gray-200 md:translate-x-0 dark:border-gray-700 slim-scrollbar`,
        className,
        { "-translate-x-full": !sidebarOpen }
      )}
      aria-label="Sidebar"
    >
      <div className="h-full pb-1 overflow-y-auto bg-background bg-starry">
        <ul className="font-medium">{children}</ul>
      </div>
    </aside>
  );
};
