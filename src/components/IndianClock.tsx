"use client";
import React, { useState, useEffect } from "react";

type IndianTimeProps = {
  className?: string;
};

const IndianTimeDisplay = ({ className }: IndianTimeProps) => {
  const [time, setTime] = useState({ h: "00", m: "00", s: "00" });

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const utc = date.getTime() + date.getTimezoneOffset() * 60000;
      const offset = 5.5; // IST
      const indiaTime = new Date(utc + 3600000 * offset);
      // format time with leading zero
      const formatTime = (t: number) => (t < 10 ? "0" : "") + t;
      setTime({
        h: formatTime(indiaTime.getHours()),
        m: formatTime(indiaTime.getMinutes()),
        s: formatTime(indiaTime.getSeconds()),
      });
    };

    // Update time immediately
    updateTime();

    // Set up interval
    const intervalId = setInterval(updateTime, 1000);

    // Clean up function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <span className={className}>
      {time.h}:{time.m}:{time.s}
    </span>
  );
};

export default IndianTimeDisplay;
