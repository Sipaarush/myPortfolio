"use client";

import { useEffect, useRef } from "react";
import "./SkillOrb.css";

export default function SkillOrb() {
  const ref = useRef();

  useEffect(() => {
    const skills = ["ADS","MATLAB","CST","STM32","RF","LoRa"];
    const container = ref.current;

    let angle = 0;

    function animate() {
      angle += 0.01;

      [...container.children].forEach((el, i) => {
        const r = 120;
        const a = angle + (i / skills.length) * Math.PI * 2;

        el.style.left = `calc(50% + ${Math.cos(a) * r}px)`;
        el.style.top = `calc(50% + ${Math.sin(a) * r}px)`;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="orbit" ref={ref}>
      <div className="center">RF CORE</div>

      {["ADS","MATLAB","CST","STM32","RF","LoRa"].map((s,i)=>(
        <div key={i} className="orb">{s}</div>
      ))}
    </div>
  );
}