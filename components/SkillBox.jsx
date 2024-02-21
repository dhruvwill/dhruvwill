import React from "react";
import Draggable from "react-draggable";
import Skill from "./Skill";

const SkillBox = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-1 font-serif rounded-md p-2 cursor-move w-full">
      {skills.map((skill, index) => (
        <Skill key={skill.id} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default SkillBox;
