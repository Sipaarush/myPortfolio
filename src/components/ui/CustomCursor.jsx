"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
    });

    function animate() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <>
      <div id="cursor-dot" className="fixed w-2 h-2 bg-purple-400 rounded-full z-50 pointer-events-none" />
      <div id="cursor-ring" className="fixed w-8 h-8 border border-purple-300 rounded-full z-40 pointer-events-none" />
    </>
  );
}