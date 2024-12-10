import React from "react";
import BlogSidebar from "@/components/sections/BlogSidebar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="md:ml-64">
      <BlogSidebar />
      <div className="lg:ml-80">{children}</div>
    </div>
  );
};

export default layout;
