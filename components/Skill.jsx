"use client";
import Image from "next/image";
import React from "react";
import Draggable from "react-draggable";
import { useState, useRef } from "react";

const Skill = ({ skill, index }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const timeoutRef = useRef(null);

    const handleMouseDown = () => {
        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null;
        }, 1000); // 1000 milliseconds for 1 second delay
    };

    const handleMouseUp = () => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
            setPosition({ x: 0, y: 0 }); // Reset position if not dragged
        }
    };

    const handleDrag = (e, ui) => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        const { x, y } = position;
        setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
    };

    return (
    <Draggable
        key={skill.id} bounds="parent"
        onStart={handleMouseDown}
        onDrag={handleDrag}
        onStop={handleMouseUp}>
      <div className="flex flex-wrap gap-1 h-full font-serif border-2 border-foreground rounded-md p-2 cursor-move">
        {/* {skill.icon == undefined ? (
          ""
        ) : (
          <Image
            src={skill.icon}
            alt={skill.mainSkill}
            width={24}
            height={24}
            className="object-contain"
          />
        )} */}
        <p className="font-semibold">{skill.mainSkill}</p>
        {skill.subSkill == undefined ? " " : " (" + skill.subSkill + ") "}
      </div>
    </Draggable>
  );
};

export default Skill;
