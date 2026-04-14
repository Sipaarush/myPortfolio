// src/components/Hero.js
'use client';
import { useEffect, useRef } from 'react';

const WAVES = [
  { f: 0.007, a: 55, sp: 0.3, r: 124, g: 106, b: 247 },
  { f: 0.011, a: 35, sp: 0.5, r: 34,  g: 212, b: 253 },
  { f: 0.005, a: 70, sp: 0.2, r: 124, g: 106, b: 247 },
  { f: 0.009, a: 22, sp: 0.7, r: 240, g: 62,  b: 110 },
];

export default function Hero() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let W, H, T = 0, rafId;

    const resize = () => {
      W = cv.width = cv.offsetWidth;
      H = cv.height = cv.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX / W, y: e.clientY / H };
    };
    document.addEventListener('mousemove', onMove);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      WAVES.forEach((w, i) => {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 4) {
          const y =
            H * 0.64 +
            Math.sin(x * w.f + T * w.sp + i * 0.7) * w.a +
            Math.sin((x / W) * Math.PI) * mouseRef.current.y * 16;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${w.r},${w.g},${w.b},${0.055 - i * 0.01})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });
      T += 0.38;
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <section id="hero">
      <div className="grid-bg" />
      <canvas id="waveCanvas" ref={canvasRef} />

      <div className="hero-content">
        <div className="hero-eyebrow">
          ECE · RF Engineering · Wireless Systems · Avionics
        </div>

        <div className="hero-name-row">
          {/* Animated Avatar */}
          <div className="hero-avatar">
            <div className="av-ring1" />
            <div className="av-ring2" />
            <div className="av-core">
            <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '75%', height: '75%' }}
      >
        {/* Base/Stand */}
        <path d="M35,85 L65,85 M50,85 L50,70" stroke="#8b92c4" strokeWidth="3" strokeLinecap="round" />
        
        {/* Rotating Dish Group */}
        <g>
          {/* The Dish Arc */}
          <path d="M30,50 Q50,20 70,50" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />
          {/* The Feed Horn (Receiver) */}
          <line x1="50" y1="35" x2="50" y2="45" stroke="#22d4fd" strokeWidth="2" strokeLinecap="round" />
          <circle cx="50" cy="32" r="2.5" fill="#22d4fd">
            <animate attributeName="fill" values="#22d4fd;#ffffff;#22d4fd" dur="1.5s" repeatCount="indefinite" />
          </circle>

          {/* Animation: Rotation of the dish */}
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="-15 50 70" 
            to="15 50 70" 
            dur="3s" 
            repeatCount="indefinite" 
            additive="replace"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0; 0.5; 1"
          />
        </g>

        {/* Signal Waves (Emanating from the center) */}
        <g stroke="#22d4fd" fill="none" strokeLinecap="round">
          <path d="M40,20 Q50,5 60,20" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="d" values="M40,20 Q50,5 60,20; M30,10 Q50,-10 70,10" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M42,25 Q50,15 58,25" strokeWidth="1" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="d" values="M42,25 Q50,15 58,25; M35,15 Q50,0 65,15" dur="2s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
            </div>
          </div>

          <div className="hero-name">
            <span className="ln1">Priyanshu</span>
            <span className="ln2">Kumar Singh</span>
            <span className="ln3">Designing Tomorrow's World</span>
          </div>
        </div>

        <p className="hero-desc">
          B.Tech ECE @ Amrita School of Engineering · Specialist in{' '}
          <strong style={{ color: 'var(--violet3)' }}>RF Circuits, Antenna Design, Embedded System, Circuit Design</strong>{' '}
          &amp; <strong style={{ color: 'var(--cyan)' }}>Communication Network</strong>. Building systems at the frontier of next gen technologies.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-p">
            <span>Explore Projects</span>
          </a>
          <a href="mailto:priyanshusingh20031130@gmail.com" className="btn-s">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hs"><div className="sv">5+</div><div className="sl">Projects</div></div>
        <div className="hs"><div className="sv">72%</div><div className="sl">RF PCE</div></div>
        <div className="hs"><div className="sv">25dB</div><div className="sl">SINR Gain</div></div>
        <div className="hs"><div className="sv">95%</div><div className="sl">PDR</div></div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <div className="scroll-txt">scroll</div>
      </div>
    </section>
  );
}
