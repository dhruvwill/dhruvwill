"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HoverImageLinkProps {
  text: string;
  imageUrl: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

interface Position {
  x: number;
  y: number;
}

export const HoverImageLink: React.FC<HoverImageLinkProps> = ({
  text,
  imageUrl,
  imageAlt = "Hover image",
  imageWidth = 192, // 48px * 4 (default Tailwind w-48)
  imageHeight = 192, // 48px * 4 (default Tailwind h-48)
  className,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const linkRef = useRef<HTMLSpanElement | null>(null);

  const handleMouseEnter = (): void => {
    setIsHovering(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovering(false);
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top + 25,
      });
    }
  };

  useEffect(() => {
    const link = linkRef.current;
    if (link) {
      link.addEventListener("mousemove", handleMouseMove);
      return () => {
        link.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div className={cn("relative inline-block", className)}>
      <span
        ref={linkRef}
        className="cursor-pointer underline underline-offset-4 z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </span>
      {isHovering && (
        <div
          className="absolute z-50 pointer-events-none"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-cover rounded-lg shadow-lg brightness-75"
            priority
          />
        </div>
      )}
    </div>
  );
};

type ClickImageElementProps = {
  imageUrl: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  children: React.ReactNode;
};
export const ClickImageElement: React.FC<ClickImageElementProps> = ({
  imageUrl,
  imageAlt = "Click image",
  imageWidth = 192,
  imageHeight = 192,
  className,
  children,
}) => {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    const clickX = e.clientX;
    const clickY = e.clientY;
    setPosition({
      x: clickX - imageWidth / 2,
      y: clickY - imageHeight / 2,
    });
    setIsImageOpen(true);
  };

  const handleImageMouseLeave = (): void => {
    setIsImageOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (imageRef.current && !imageRef.current.contains(e.target as Node)) {
        setIsImageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cn("inline-block", className)}>
      <div ref={triggerRef} className="cursor-pointer" onClick={handleClick}>
        {children}
      </div>
      {isImageOpen && (
        <div
          ref={imageRef}
          className="fixed z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
          onMouseLeave={handleImageMouseLeave}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-cover rounded-lg shadow-lg brightness-75"
            priority
          />
        </div>
      )}
    </div>
  );
};
