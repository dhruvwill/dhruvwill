import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/hooks/useAppStore";

type SidebarSeperatorWithTitleProps = {
  title: string;
};
export const SidebarSeperatorWithTitle = ({
  title,
}: SidebarSeperatorWithTitleProps) => {
  return (
    <li className="font-light text-sm w-full flex items-center my-3">
      <div className="flex relative items-center w-full">
        <hr className="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
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
};
export const SidebarItem = ({
  icon,
  title,
  link,
  externalLink,
  endIcon,
  className,
  active,
}: SidebarItemProps) => {
  return (
    <li
      className={cn(`font-light text-sm w-full flex items-center`, className)}
    >
      <Link
        href={link}
        {...(externalLink
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="flex items-center w-full m-2 rounded-sm text-gray-900 dark:text-white"
      >
        <span className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-sm">
          {icon}
        </span>
        <span className="ms-3 font-medium">{title}</span>
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
      id="logo-sidebar"
      className={cn(
        `fixed top-0 left-0 z-40 w-64 h-screen mt-16 transition-transform border-r border-gray-200 sm:translate-x-0 dark:border-gray-700 slim-scrollbar`,
        className,
        { "-translate-x-full": !sidebarOpen }
      )}
      aria-label="Sidebar"
    >
      <div className="h-full ps-2 pb-1 overflow-y-auto bg-background bg-starry">
        <ul className="font-medium">{children}</ul>
      </div>
    </aside>
  );
};
