"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SmoothScrollProps = {
  className?: string;
  children: React.ReactNode;
};

const SmoothScroll = ({ children, className }: SmoothScrollProps) => {
  const scrollContainer = useRef(null);
  useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      const scroll = new Locomotive({
        el: scrollContainer.current!,
        smooth: true,
      });
    }

    getLocomotive();
  }, []);

  return (
    <div ref={scrollContainer} className={cn("relative", className)}>
      {children}
    </div>
  );
};

export default SmoothScroll;
