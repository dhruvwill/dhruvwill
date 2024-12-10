"use client";
import AchievementItem from "@/components/Achievement";
import Heading from "@/components/ui/Heading";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="relative h-[calc(100vh-64px)] overflow-scroll mt-16">
      <div className="p-2 md:p-5 max-w-4xl mx-auto">
        <Heading
          heading="Milestones"
          subHeading="Little Moments of Glory"
          className="border-b mb-8"
        />
        <div className="flex flex-col gap-2">
          <AchievementItem
            title="Certified Taxation Practitioner"
            accent="#FFD700"
            icon={"📚"}
          />
          <AchievementItem
            title="SSIP Grantee 2022, 2L+ Grant for a Startup"
            accent="#00CED1"
            icon={"🚀"}
          />
          <AchievementItem
            title="NCC (National Cadet Corps) ’A’ Certificate Holder."
            accent="#32CD32"
            icon={"🎖️"}
          />
          <AchievementItem
            title="ACPC D2D 49th rank holder. (2022)"
            accent="#FF6347"
            icon={"🏆"}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
