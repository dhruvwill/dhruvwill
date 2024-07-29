import Tag3d from "@/components/3dtag";
import React from "react";
type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="md:ml-64">
      {/* <div className="absolute top-0 left-0 h-full w-full opacity-20 flex justify-end">
        <Tag3d />
      </div> */}
      {children}
    </div>
  );
};

export default layout;
