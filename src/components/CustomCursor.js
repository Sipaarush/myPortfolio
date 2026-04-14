// src/components/CustomCursor.js
'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const curRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const rng = ringRef.current;
    if (!cur || !rng) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      cur.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`;
    };

    const animRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x - 14) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y - 14) * 0.1;
      rng.style.transform = `translate(${ring.current.x}px,${ring.current.y}px)`;
      rafRef.current = requestAnimationFrame(animRing);
    };
    rafRef.current = requestAnimationFrame(animRing);

    const enter = () => {
      cur.style.transform = `translate(${mouse.current.x - 4}px,${mouse.current.y - 4}px) scale(2.5)`;
      rng.style.borderColor = 'var(--cyan)';
    };
    const leave = () => {
      cur.style.transform = `translate(${mouse.current.x - 4}px,${mouse.current.y - 4}px) scale(1)`;
      rng.style.borderColor = 'var(--violet3)';
    };

    document.addEventListener('mousemove', onMove);

    const targets = document.querySelectorAll('a,button,.proj-card,.r-node,.c-card');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
