"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  VideoModal,
  VideoModalContent,
  VideoModalDescription,
  VideoModalTitle,
  VideoModalTrigger,
  VideoModalVideo,
  VideoPlayButton,
  VideoPlayer,
  VideoPreview,
} from "@/components/ui/video-modal";
import { PlayCircle } from "lucide-react";
import { Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  image: string;
  videoSrc: string;
  title: string;
  description: string;
  className?: string;
};

const ubuntu = Ubuntu({ weight: "500", subsets: ["latin"] });
export const ProjectCard = ({
  image,
  videoSrc,
  title,
  description,
  className,
}: ProjectCardProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  return (
    <VideoModal>
      <motion.div
        className="break-inside-avoid"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: Math.random() * 0.3,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <VideoModalTrigger>
          {/* <img
            src={image}
            className={cn(
              "w-full opacity-75 hover:opacity-100 dark:opacity-50 dark:hover:opacity-75 transition-all duration-300 rounded-sm border border-black shadow-md hover:shadow-lg",
              className
            )}
            alt="Project thumbnail"
          /> */}
          <video
            ref={videoRef}
            className={cn(
              "w-full opacity-75 hover:opacity-100 dark:opacity-50 dark:hover:opacity-75 transition-all duration-300 rounded-sm border border-black shadow-md hover:shadow-lg",
              className
            )}
            preload="metadata"
            onMouseEnter={() => {
              videoRef.current?.play();
            }}
            onMouseLeave={() => {
              videoRef.current?.pause();
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </VideoModalTrigger>
      </motion.div>
      <VideoModalContent>
        <VideoModalTitle className={cn("text-3xl", ubuntu.className)}>
          {title}
        </VideoModalTitle>
        <VideoModalDescription className="text-lg">
          {description}
        </VideoModalDescription>
        <VideoModalVideo>
          <VideoPlayer>
            {/* <VideoPreview>
              <img
                src={image}
                alt="Video preview"
                className="w-full h-full brightness-50"
              />
            </VideoPreview> */}
            <VideoPlayButton
              onClick={() => {
                videoRef.current?.play();
                videoRef.current?.classList.remove("brightness-75");
              }}
              className="shadow-md"
            >
              <button className="absolute inset-0 m-auto flex size-32 items-center justify-center rounded-full border border-white border-white/10 bg-white/50 transition duration-300 hover:bg-white/75">
                <PlayCircle className="size-20 stroke-1 text-white" />
              </button>
            </VideoPlayButton>
            <video
              ref={videoRef}
              className="size-full brightness-75"
              src={videoSrc}
              controls
              preload="metadata"
            />
          </VideoPlayer>
        </VideoModalVideo>
      </VideoModalContent>
    </VideoModal>
  );
};

type ProjectContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const ProjectContainer = ({
  className,
  children,
}: ProjectContainerProps) => {
  return (
    <motion.div className={`w-full ${className}`}>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 mx-auto space-y-2">
        {children}
      </div>
      <motion.h6
        className="text-md text-center mt-5 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        🚧 More awesomeness under construction 🚧
      </motion.h6>
    </motion.div>
  );
};
