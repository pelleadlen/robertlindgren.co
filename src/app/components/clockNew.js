"use client";
import "./clockStyle.css";
import { useState, useEffect } from "react";

const ClockNew = () => {
  const labels = ["O", "O", "K", "A", "M", "E", "E", "T", "I", "N", "G", "B"];
  const [cetTime, setCetTime] = useState("");
  const [estTime, setEstTime] = useState("");
  const [secondRotation, setSecondRotation] = useState(0);
  const [minuteRotation, setMinuteRotation] = useState(0);
  const [hourRotation, setHourRotation] = useState(0);

  const calculateTime = () => {
    const now = new Date();

    const secondsRatio = now.getSeconds() / 60;
    const minutesRatio = (secondsRatio + now.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + now.getHours()) / 12;

    setSecondRotation(secondsRatio * 360);
    setMinuteRotation(minutesRatio * 360);
    setHourRotation(hoursRatio * 360);

    const cet = new Date().toLocaleTimeString("sv-SE", {
      timeZone: "Europe/Stockholm",
      hour12: false,
    });
    const est = new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour12: false,
    });

    setCetTime(cet.split(":").slice(0, -1).join(":") + " CET");
    setEstTime(est.split(":").slice(0, -1).join(":") + " EST");
  };

  useEffect(() => {
    calculateTime();
    const interval = setInterval(() => {
      calculateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getStylesForLabel = (index) => {
    const baseRotation = (360 / 12) * (index + 1);
    const styles = {
      transform: `rotate(${baseRotation}deg)`,
      "--i": index + 1,
    };
    return styles;
  };

  const getStylesForText = (index) => {
    const baseRotation = (360 / 12) * (index + 1);
    const styles = {
      transform: `rotate(${-baseRotation}deg)`,
    };
    return styles;
  };

  return (
    <div className="absolute top-[62%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-screen max-w-[400px] max-h-[400px] md:max-w-[600px] md:max-h-[600px] lg:max-w-[700px] lg:max-h-[700px] xl:max-h-screen  xl:max-w-screen ">
      <div className="flex rounded-full  items-center justify-center relative w-full h-full text-[1.75rem] leading-[2rem]     md:text-5xl lg:text-6xl xl:text-[88px] -z-50   ">
        {labels.map((label, index) => (
          <label
            className=" absolute inset-[40px] text-center"
            style={getStylesForLabel(index)}
            key={index}
          >
            <span className="inline-block" style={getStylesForText(index)}>
              {label}
            </span>
          </label>
        ))}

        {/* Indicator Wrapper */}
        <div className="w-full h-full text-[64px]  flex relative items-center justify-center">
          {/* INDICATOR */}
          <div className=" h-4  w-4 md:h-9 md:w-9 border-[#FF0000] bg-black border-[2px] md:border-[5px] rounded-full z-50" />

          {/* HOUR CET */}
          <div
            style={{ transform: `rotate(${hourRotation}deg)` }}
            className="bg-black w-[80px] absolute flex items-center justify-center bottom-1/2 origin-bottom rotate-180  h-[40%]  md:h-2/4 text-[1.75rem] leading-[2rem] md:text-5xl lg:text-6xl xl:text-[88px]"
          >
            <p className="-rotate-90 text-left whitespace-nowrap  text-nowrap">
              {cetTime}
            </p>
          </div>

          {/* MINUTE EST */}
          <div
            style={{ transform: `rotate(${minuteRotation}deg)` }}
            className="bg-black w-[32px] md:w-[48px] lg:w-[80px] absolute flex items-center justify-center bottom-1/2 origin-bottom  h-[40%]  md:h-2/4 text-[1.75rem] leading-[2rem] md:text-5xl lg:text-6xl xl:text-[88px]"
          >
            <p className="-rotate-90 text-left whitespace-nowrap text-nowrap">
              {estTime}
            </p>
          </div>

          {/* SECONDS */}
          <div
            style={{ transform: `rotate(${secondRotation}deg)` }}
            className="bg-[#FF0000] w-[2px] md:w-[4px] h-[40%]  absolute flex items-center justify-center bottom-1/2 origin-bottom  rotate-[310deg]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ClockNew;
