import React from "react";
type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <div className="md:ml-64">{children}</div>;
};

export default layout;
