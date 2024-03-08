"use client";
import { useState, useEffect } from "react";
import ClockStyle from "./clockStyle";
import "./clockStyle.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="absolute  my-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <ClockStyle />
      <p className="text-4xl">
        {new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Europe/Stockholm",
        }).format(date)}
      </p>
    </div>
  );
};

export default Clock;
