import React, { useEffect, useRef } from "react";
import SeolyuMouseSVG from "./SeolyuMouseSvg";

export default function SeolyuMouse() {
  const seolyuMicRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const seolyuMicElem = seolyuMicRef.current;
    if (!seolyuMicElem) return;

    const targetPos = {
      x: 0,
      y: 0,
    };
    const easeValue = 0.09;
    const seolyuMicInfo = {
      x: 0,
      y: 0,
    };

    const onMouseMove = (e: MouseEvent) => {
      targetPos.x = e.clientX - window.innerWidth * 0.5;
      targetPos.y = e.clientY - window.innerHeight * 0.01;
    };

    window.addEventListener("mousemove", onMouseMove);

    let dx;
    let dy;

    function render() {
      dx = targetPos.x - seolyuMicInfo.x;
      dy = targetPos.y - seolyuMicInfo.y;

      seolyuMicInfo.x = seolyuMicInfo.x + dx * easeValue;
      seolyuMicInfo.y = seolyuMicInfo.y + dy * easeValue;
      if (seolyuMicElem) {
        seolyuMicElem.style.transform = `translate3d(${seolyuMicInfo.x}px, ${seolyuMicInfo.y}px, 0px)`;
      }
      requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={seolyuMicRef}>
      <SeolyuMouseSVG />
    </div>
  );
}
