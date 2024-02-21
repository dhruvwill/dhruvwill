"use client";
import { useEffect, useState } from "react";

const IndianTime = () => {
  const [indianTime, setIndianTime] = useState("");

  useEffect(() => {
    const getIndianTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
      };

      const timeString = now.toLocaleTimeString("en-IN", options);
      setIndianTime(timeString);
    };

    // Update time every second
    const intervalId = setInterval(getIndianTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className="font-semibold uppercase">{indianTime}</span>;
};

export default IndianTime;
