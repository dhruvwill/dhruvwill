import React from "react";

type Props = {
  title: string;
  accent: string;
  icon?: React.ReactNode;
};

const AchievementItem = (props: Props) => {
  return (
    <div
      className="relative border-l-4 rounded-lg p-2 transition-all duration-300 ease-in-out overflow-hidden"
      style={{
        borderColor: props.accent,
        backgroundColor: props.accent + "20",
      }}
    >
      {props.icon && <span className="p-1 text-xl">{props.icon}</span>}
      <span className="relative z-10">{props.title}</span>
    </div>
  );
};

export default AchievementItem;
