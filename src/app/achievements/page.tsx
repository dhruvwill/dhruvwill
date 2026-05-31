"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading";

const achievements = [
  {
    icon: "📚",
    title: "Certified Taxation Practitioner",
    detail: "Professional certification in Indian taxation law and practice",
    accentColor: "from-yellow-500/20 to-amber-500/20",
    dotColor: "bg-yellow-400",
  },
  {
    icon: "🚀",
    title: "SSIP Grantee 2022",
    detail: "Awarded 2L+ grant under Gujarat's Student Startup & Innovation Policy for a startup venture",
    accentColor: "from-cyan-500/20 to-teal-500/20",
    dotColor: "bg-cyan-400",
  },
  {
    icon: "🎖️",
    title: "NCC 'A' Certificate Holder",
    detail: "National Cadet Corps. Completed training and earned the 'A' certificate",
    accentColor: "from-green-500/20 to-emerald-500/20",
    dotColor: "bg-green-400",
  },
  {
    icon: "🏆",
    title: "ACPC D2D, Rank 49",
    detail: "Secured 49th state rank in the Diploma-to-Degree admission process (2022)",
    accentColor: "from-red-500/20 to-orange-500/20",
    dotColor: "bg-red-400",
  },
];

const Page = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] overflow-scroll mt-16">
      <div className="p-2 md:p-5 max-w-4xl mx-auto">
        <Heading
          heading="Milestones"
          subHeading="Little Moments of Glory"
          className="border-b mb-8"
        />

        <div className="flex flex-col gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Large watermark emoji */}
              <span className="absolute -bottom-4 -right-2 text-[100px] md:text-[120px] leading-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 select-none pointer-events-none">
                {item.icon}
              </span>

              {/* Content */}
              <div className="relative z-10 p-5 md:p-7 flex items-start gap-4">
                <span
                  className={`mt-1.5 w-2 h-2 rounded-full ${item.dotColor} shrink-0`}
                />
                <div>
                  <h3 className="font-cal text-lg md:text-xl text-foreground leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/60 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
