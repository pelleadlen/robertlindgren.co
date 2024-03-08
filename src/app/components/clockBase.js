"use client";
import Image from "next/image";
import Clock from "../../../public/images/clocker.svg";
import "./clockStyle.css";
import { useEffect, useState } from "react";

const ClockBase = () => {
  return (
    <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex items-center justify-center min-h-80 min-w-80">
        <Image
          className="h-full w-full"
          alt="analog clock with book a meeting as time"
          src={Clock}
        />
        <Hands />
      </div>
    </div>
  );
};

export default ClockBase;

const Hands = () => {
  const [hourDegree, setHourDegree] = useState(0);
  const [minuteDegree, setMinuteDegree] = useState(0);
  const [secondDegree, setSecondDegree] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      const swedenTime = new Date().toLocaleTimeString("sv-SE", {
        timeZone: "Europe/Stockholm",
      });

      const [hour, minute, second] = swedenTime.split(/[:\s]/);

      setHourDegree(((hour % 12) / 12) * 360);
      setMinuteDegree((minute / 60) * 360);
      setSecondDegree((second / 60) * 360);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="indicator">
      <span
        className="hand hour h-[100px] md:h[120px] lg:h-[180px]"
        style={{ transform: `rotate(${hourDegree}deg)` }}
      />
      <span
        className="hand minute h-[120px] md:h[140px] lg:h-[200px]"
        style={{ transform: `rotate(${minuteDegree}deg)` }}
      />
      <span
        className="hand second h-[140px] md:h[160px] lg:h-[220px]"
        style={{ transform: `rotate(${secondDegree}deg)` }}
      />
    </div>
  );
};
