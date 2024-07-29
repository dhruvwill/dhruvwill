import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SmoothScroll from "./SmoothScroll";
import {
  VideoModal,
  VideoModalContent,
  VideoModalDescription,
  VideoModalTitle,
  VideoModalTrigger,
  VideoModalVideo,
  VideoPlayButton,
  VideoPlayer,
} from "@/components/ui/video-modal";
import { cn } from "@/lib/utils";
import { Ubuntu } from "next/font/google";
import { PlayCircle } from "lucide-react";

const ubuntu = Ubuntu({ weight: "500", subsets: ["latin"] });

type ProjectCardProps = {
  title: string;
  date: string;
  description: string;
  src: string;
};

export const ProjectCard = ({
  title,
  date,
  description,
  src,
}: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <VideoModal>
      <div className="cursor-ne flex-shrink-0">
        <VideoModalTrigger>
          <video
            src={src}
            className="w-full aspect-video h-52 object-cover mb-2 pointer-events-none rounded-md"
            draggable={false}
          />
        </VideoModalTrigger>
      </div>
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
              src={src}
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
  children: React.ReactNode;
};

export const ProjectContainer = (props: ProjectContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerRef.current?.addEventListener("scroll", () => {
      // console.log("scrolled");
    });
    return () => {
      containerRef.current?.removeEventListener("scroll", () => {
        // console.log("scolled");
      });
    };
  });

  return (
    // <SmoothScroll>
    <div
      ref={containerRef}
      className="flex gap-2 w-full overflow-x-scroll scroll-smooth bg-scroll will-change-scroll select-none pt-7"
    >
      {props.children}
    </div>
    // </SmoothScroll>
  );
};
