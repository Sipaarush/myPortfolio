// src/components/About.js
'use client';
import { useEffect, useRef } from 'react';

const SKILLS = [
  { t: 'ADS',      c: '#a78bfa' },
  { t: 'MATLAB',   c: '#22d4fd' },
  { t: 'CST',      c: '#a78bfa' },
  { t: 'STM32',    c: '#22d4fd' },
  { t: 'RF PCB',   c: '#c4b5fd' },
  { t: 'Altium',   c: '#67e8f9' },
  { t: 'Simulink', c: '#a78bfa' },
  { t: 'C++',      c: '#22d4fd' },
  { t: 'Python',   c: '#c4b5fd' },
  { t: 'LoRa',     c: '#67e8f9' },
  { t: 'Antenna',  c: '#a78bfa' },
  { t: 'RFID',     c: '#22d4fd' },
];
const RADII  = [74, 127, 172];
const GROUPS = [[0,1,2,3],[4,5,6,7],[8,9,10,11]];

export default function About() {
  const orbitRef = useRef(null);
  const pillRefs = useRef([]);
  const tRef     = useRef(0);
  const rafRef   = useRef(null);

  useEffect(() => {
    const wrapper = orbitRef.current;
    if (!wrapper) return;

    // Create pill elements
    pillRefs.current = SKILLS.map((s) => {
      const el = document.createElement('div');
      el.className = 'sk-pill';
      el.textContent = s.t;
      el.style.cssText = `background:rgba(14,16,41,.94);border:1px solid ${s.c}33;color:${s.c};font-size:10px`;
      wrapper.appendChild(el);
      return el;
    });

    const animate = () => {
      tRef.current += 0.0025;
      const cx = wrapper.offsetWidth  / 2;
      const cy = wrapper.offsetHeight / 2;

      GROUPS.forEach((group, gi) => {
        group.forEach((si, j) => {
          const ang = tRef.current * (gi % 2 ? -1 : 1) + (j / group.length) * Math.PI * 2;
          const x   = cx + RADII[gi] * Math.cos(ang);
          const y   = cy + RADII[gi] * Math.sin(ang);
          const p   = pillRefs.current[si];
          p.style.left = x - p.offsetWidth  / 2 + 'px';
          p.style.top  = y - p.offsetHeight / 2 + 'px';
        });
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      pillRefs.current.forEach((p) => p.remove());
      pillRefs.current = [];
    };
  }, []);

  return (
    <section id="about">
      <div>
        <div className="s-label">Who I Am</div>
        <h2 className="s-heading">
          Building the <span className="hl">Signal</span>
          <br />of the Future
        </h2>
        <hr className="s-rule" />

        <div className="about-text reveal">
          <p>
            I&apos;m a final-year{' '}
            <strong>Electronics &amp; Communication Engineering</strong> student at Amrita School of
            Engineering, deeply passionate about pushing the boundaries of wireless systems.
          </p>
          <p>
            My work spans high-efficiency{' '}
            <strong>RF energy harvesting circuits</strong> to complex{' '}
            <strong>UAV-IRS-RSMA frameworks</strong> for next-gen 6G networks.
          </p>
          <p>
            I thrive at the intersection of{' '}
            <strong>theoretical signal processing</strong> and hands-on hardware — from optimizing
            Schottky diode matching networks in ADS to programming STM32 for encrypted telemetry.
          </p>
        </div>

        <div className="skills-cats reveal" style={{ transitionDelay: '.15s' }}>
          <div className="sk-cat">
            <div className="sk-cat-t">Software</div>
            <div className="sk-tags">
              {['Keysight ADS','CST Studio','Altium','MATLAB','Simulink'].map((t) => (
                <span key={t} className="sk-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="sk-cat">
            <div className="sk-cat-t">Design &amp; HW</div>
            <div className="sk-tags">
              {['RF PCB','Impedance Match','Antenna Tuning','STM32','RPi'].map((t) => (
                <span key={t} className="sk-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="sk-cat">
            <div className="sk-cat-t">Programming</div>
            <div className="sk-tags">
              {['C++','Python','Embedded C','LoRa','NRF24'].map((t) => (
                <span key={t} className="sk-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skill orbit */}
      <div>
        <div className="skills-orbit-wrapper" ref={orbitRef} id="skillOrbit">
          <div className="sk-ring" style={{ width: 148, height: 148, border: '1px dashed rgba(124,106,247,.2)' }} />
          <div className="sk-ring" style={{ width: 252, height: 252, border: '1px dashed rgba(34,212,253,.14)' }} />
          <div className="sk-ring" style={{ width: 348, height: 348, border: '1px dashed rgba(124,106,247,.08)' }} />
          <div className="sk-center">RF<br />CORE</div>
        </div>
      </div>
    </section>
  );
}
