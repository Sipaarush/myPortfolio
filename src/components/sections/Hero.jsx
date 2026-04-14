"use client";

import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W, H, t = 0;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < 4; i++) {
        ctx.beginPath();

        for (let x = 0; x < W; x += 5) {
          const y =
            H * 0.6 +
            Math.sin(x * 0.01 + t + i) * (30 + i * 10);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(124,106,247,0.${i + 2})`;
        ctx.stroke();
      }

      t += 0.05;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef}></canvas>

      <div className="hero-content">
        <h1>
          Priyanshu <br />
          Kumar Singh
        </h1>

        <p>RF · UAV · 6G Systems</p>
      </div>
    </section>
  );
}