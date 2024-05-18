import React, { useEffect, useState } from "react";
import styled from "styled-components";
import clockImage from "../../assets/clock.png";

const ClockContainer = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  width: 130px;
  height: 130px;
  background: url(${clockImage}) no-repeat;
  background-size: 100%;
`;

const Hour = styled.div`
  position: absolute;
  background: #ff1e9d;
  border-radius: 10px;
  transform-origin: bottom;
  width: 1.8%;
  height: 25%;
  top: 25%;
  left: 48.85%;
  opacity: 0.8;
`;

const Minute = styled.div`
  position: absolute;
  background: #00afff;
  border-radius: 10px;
  transform-origin: bottom;
  width: 1.6%;
  height: 30%;
  top: 19%;
  left: 48.9%;
  opacity: 0.8;
`;

const Second = styled.div`
  position: absolute;
  background: #afffee;
  border-radius: 10px;
  transform-origin: bottom;
  width: 1%;
  height: 40%;
  top: 9%;
  left: 49.25%;
  opacity: 0.8;
`;

function SeolyuClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getHandDegrees = (unit: "hour" | "minute" | "second") => {
    const now = time;

    let degrees = 0;

    switch (unit) {
      case "hour":
        degrees += (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;
        break;
      case "minute":
        degrees += now.getMinutes() * 6 + now.getSeconds() * 0.1;
        break;
      case "second":
        degrees += now.getSeconds() * 6;
        break;
      default:
        break;
    }

    return degrees;
  };

  const hourRotation = getHandDegrees("hour");
  const minuteRotation = getHandDegrees("minute");
  const secondRotation = getHandDegrees("second");

  return (
    <ClockContainer>
      <Hour style={{ transform: `rotate(${hourRotation}deg)` }}></Hour>
      <Minute style={{ transform: `rotate(${minuteRotation}deg)` }}></Minute>
      <Second style={{ transform: `rotate(${secondRotation}deg)` }}></Second>
    </ClockContainer>
  );
}

export default SeolyuClock;
