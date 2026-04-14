// src/components/Projects.js
'use client';
import { useState, useEffect, useRef } from 'react';

// ── Bar chart that animates when scrolled into view ──────────────────────────
function AnimatedBar({ label, targetWidth, gradient, value }) {
  const fillRef = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          el.style.width = '0';
          setTimeout(() => { el.style.width = targetWidth; }, 100);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [targetWidth]);

  return (
    <div className="bar-item">
      <div className="bar-lbl">{label}</div>
      <div className="bar-track">
        <div
          ref={fillRef}
          className="bar-fill"
          style={{ background: gradient, width: 0 }}
        >
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
}

// ── Expandable project card ───────────────────────────────────────────────────
function ProjCard({ children, featured, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`proj-card reveal${featured ? ' featured' : ''}${open ? ' open' : ''}`}
      style={delay ? { transitionDelay: delay } : {}}
      onClick={() => setOpen((v) => !v)}
    >
      {children}
    </div>
  );
}

// ── Expand button (stops event bubbling so card click works) ─────────────────
function ExpandBtn({ label }) {
  return (
    <button className="expand-btn">
      {label} <span className="eico">+</span>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects">
      <div className="grid-bg" style={{ opacity: 0.15 }} />
      <div className="s-label">What I&apos;ve Built</div>
      <h2 className="s-heading">
        <span className="hl">5 Projects.</span>
        <br />One Vision.
      </h2>
      <hr className="s-rule" />

      <div className="proj-grid">

        {/* ── P1 FEATURED ─────────────────────────────────────────────────── */}
        <ProjCard featured>
          <div className="proj-card-inner" style={{ position: 'relative', overflow: 'visible' }}>
            <div className="proj-glow" style={{ background: 'radial-gradient(circle at 30% 50%,rgba(124,106,247,.09),transparent)' }} />
            <span className="float-sticker fs-a" style={{ fontSize: '1.9rem', top: -18, left: '1.5rem' }}>🛸</span>
            <span className="float-sticker fs-b" style={{ fontSize: '1.3rem', top: -12, left: '4.5rem', animationDelay: '.9s' }}>📡</span>
            <span className="float-sticker fs-c" style={{ fontSize: '1rem',  top: 8,   left: '6.5rem', animationDelay: '1.8s' }}>⚡</span>

            <div className="proj-card-top" style={{ paddingTop: '2.2rem' }}>
              <div className="proj-badge" style={{ background: 'rgba(124,106,247,.12)', border: '1px solid rgba(124,106,247,.35)', color: 'var(--violet3)' }}>
                🛸 UAV · IRS · 6G · RSMA
              </div>
              <div className="proj-title">Hybrid RSMA-IRS for UAV Communication Networks</div>
              <div className="proj-period">Jan 2025 — Mar 2026</div>
              <p className="proj-desc">
                Designed a hybrid Rate-Splitting Multiple Access + Intelligent Reflecting Surface framework for
                UAV-assisted MU-MISO networks. MATLAB-optimized beamforming achieving breakthrough spectral efficiency.
              </p>
            </div>

            <div className="proj-card-bot">
              {['MATLAB','MU-MISO','Rayleigh Fading','Beamforming','RSMA','IRS Opt'].map((t) => (
                <div key={t} className="proj-tool">{t}</div>
              ))}
            </div>
          </div>

          <div className="feat-right">
            <div className="metrics-row">
              {[['4.7','MOS Score'],['40%','Throughput ↑'],['25dB','SINR Gain'],['>95%','PDR']].map(([v,l]) => (
                <div key={l} className="mc">
                  <span className="mv">{v}</span>
                  <span className="ml">{l}</span>
                </div>
              ))}
            </div>
            <div className="chart-area">
              <div className="chart-ttl">vs Conventional Schemes</div>
              <div className="bar-row">
                <AnimatedBar label="Throughput" targetWidth="82%" gradient="linear-gradient(90deg,#5c4de0,#a78bfa)" value="+40%" />
                <AnimatedBar label="SINR"       targetWidth="91%" gradient="linear-gradient(90deg,#0ab8e8,#22d4fd)" value="25dB" />
                <AnimatedBar label="PDR"        targetWidth="78%" gradient="linear-gradient(90deg,#5c4de0,#22d4fd)" value=">95%" />
                <AnimatedBar label="QoE (MOS)"  targetWidth="94%" gradient="linear-gradient(90deg,#7c6af7,#22d4fd)" value="4.7/5" />
              </div>
            </div>
          </div>
        </ProjCard>

        {/* ── P2 ──────────────────────────────────────────────────────────── */}
        <ProjCard delay=".08s">
          <div className="proj-card-inner" style={{ overflow: 'visible' }}>
            <div className="proj-glow" style={{ background: 'radial-gradient(circle at 50% 30%,rgba(34,212,253,.07),transparent)' }} />
            <span className="float-sticker fs-b" style={{ fontSize: '1.8rem', top: -16, left: '1.5rem' }}>⚡</span>
            <span className="float-sticker fs-c" style={{ fontSize: '1.1rem', top: -8,  left: '4rem',   animationDelay: '1.2s' }}>📶</span>

            <div className="proj-card-top" style={{ paddingTop: '2.2rem' }}>
              <div className="proj-badge" style={{ background: 'rgba(34,212,253,.1)', border: '1px solid rgba(34,212,253,.3)', color: 'var(--cyan)' }}>
                ⚡ RF Harvesting · IoT
              </div>
              <div className="proj-title">Efficient RF Energy Harvesting — 2.4 GHz &amp; 5 GHz</div>
              <div className="proj-period">Jan 2024 — Nov 2024</div>
              <p className="proj-desc">
                Dual-band rectenna using Schottky diodes and microstrip T-networks. 70–72% PCE converting ambient RF to
                DC for battery-free IoT. Validated in Keysight ADS.
              </p>
            </div>

            <div className="proj-card-bot">
              {['Keysight ADS','Microstrip','Schottky','Radial Stubs'].map((t) => (
                <div key={t} className="proj-tool">{t}</div>
              ))}
            </div>
          </div>

          <ExpandBtn label="Metrics + Details" />
          <div className="expand-wrap">
            <div className="inner-exp">
              <div className="metrics-row">
                {[['1.7V','Output @2.4GHz'],['70%','PCE @2.4GHz'],['1.6V','Output @5GHz'],['71.95%','PCE @5GHz']].map(([v,l]) => (
                  <div key={l} className="mc"><span className="mv">{v}</span><span className="ml">{l}</span></div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text2)', lineHeight: 1.75 }}>
                Wearables, smart textiles, medical implants, low-power IoT. Stable DC output across varying input power levels.
              </p>
            </div>
          </div>
        </ProjCard>

        {/* ── P3 ──────────────────────────────────────────────────────────── */}
        <ProjCard delay=".16s">
          <div className="proj-card-inner" style={{ overflow: 'visible' }}>
            <div className="proj-glow" style={{ background: 'radial-gradient(circle at 50% 30%,rgba(245,158,11,.06),transparent)' }} />
            <span className="float-sticker fs-a" style={{ fontSize: '1.8rem', top: -16, left: '1.5rem' }}>🚀</span>
            <span className="float-sticker fs-c" style={{ fontSize: '1.2rem', top: -8,  left: '4.2rem', animationDelay: '1.5s' }}>🛰️</span>

            <div className="proj-card-top" style={{ paddingTop: '2.2rem' }}>
              <div className="proj-badge" style={{ background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.3)', color: '#fbbf24' }}>
                🚀 Avionics · STM32
              </div>
              <div className="proj-title">Sounding Rocket Avionics — Telemetry &amp; Recovery</div>
              <div className="proj-period">Jul 2024 — Nov 2024</div>
              <p className="proj-desc">
                Complete avionics stack: STM32 ARM Cortex-M4 with GPS, BMP280, DHT11, MPU6050. Real-time encrypted RF
                telemetry, remote launch control + parachute recovery.
              </p>
            </div>

            <div className="proj-card-bot">
              {['STM32','Embedded C','RF Comms','GPS','IMU'].map((t) => (
                <div key={t} className="proj-tool">{t}</div>
              ))}
            </div>
          </div>

          <ExpandBtn label="Details" />
          <div className="expand-wrap">
            <div className="inner-exp">
              <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '1rem' }}>
                AeroHack 2025 Finalist (Electronics). Full avionics stack from scratch — multi-sensor pipeline, encrypted
                RF link, post-flight recovery for aerospace research.
              </p>
              <div className="proj-badge" style={{ background: 'rgba(245,158,11,.12)', border: '1px solid rgba(245,158,11,.35)', color: '#fbbf24' }}>
                🏆 Collins Aerospace AeroHack 2025 Finalist
              </div>
            </div>
          </div>
        </ProjCard>

        {/* ── P4 ──────────────────────────────────────────────────────────── */}
        <ProjCard delay=".24s">
          <div className="proj-card-inner" style={{ overflow: 'visible' }}>
            <div className="proj-glow" style={{ background: 'radial-gradient(circle at 50% 30%,rgba(74,222,128,.05),transparent)' }} />
            <span className="float-sticker fs-c" style={{ fontSize: '1.8rem', top: -16, left: '1.5rem' }}>🔬</span>
            <span className="float-sticker fs-a" style={{ fontSize: '1.1rem', top: -8,  left: '4.2rem', animationDelay: '2s' }}>📟</span>

            <div className="proj-card-top" style={{ paddingTop: '2.2rem' }}>
              <div className="proj-badge" style={{ background: 'rgba(74,222,128,.1)', border: '1px solid rgba(74,222,128,.3)', color: '#4ade80' }}>
                🔬 RFID · Sensing
              </div>
              <div className="proj-title">Smart RFID-Based Ammonia Detection Tag</div>
              <div className="proj-period">Oct 2024 — May 2025</div>
              <p className="proj-desc">
                Low-power RFID sensing tag with STM32 for wireless ammonia detection. Custom antenna, ~95% accuracy
                post-calibration. Compact battery-free chemical sensing.
              </p>
            </div>

            <div className="proj-card-bot">
              {['STM32','RFID','Custom Antenna','Sensor Calib'].map((t) => (
                <div key={t} className="proj-tool">{t}</div>
              ))}
            </div>
          </div>

          <ExpandBtn label="Details" />
          <div className="expand-wrap">
            <div className="inner-exp">
              <div className="metrics-row">
                {[['95%','Detection Accuracy'],['Low','Power Draw']].map(([v,l]) => (
                  <div key={l} className="mc"><span className="mv">{v}</span><span className="ml">{l}</span></div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text2)', lineHeight: 1.75 }}>
                Water quality, industrial safety, smart agriculture. Eliminates wired connections for hazardous sensing.
              </p>
            </div>
          </div>
        </ProjCard>

        {/* ── P5 ──────────────────────────────────────────────────────────── */}
        <ProjCard delay=".32s">
          <div className="proj-card-inner" style={{ overflow: 'visible' }}>
            <div className="proj-glow" style={{ background: 'radial-gradient(circle at 50% 30%,rgba(34,212,253,.06),transparent)' }} />
            <span className="float-sticker fs-b" style={{ fontSize: '1.8rem', top: -16, left: '1.5rem' }}>🚗</span>
            <span className="float-sticker fs-a" style={{ fontSize: '1.1rem', top: -9,  left: '4.2rem', animationDelay: '.6s' }}>🌧️</span>
            <span className="float-sticker fs-c" style={{ fontSize: '.9rem',  top: -6,  left: '6.2rem', animationDelay: '1.4s' }}>📡</span>

            <div className="proj-card-top" style={{ paddingTop: '2.2rem' }}>
              <div className="proj-badge" style={{ background: 'rgba(34,212,253,.08)', border: '1px solid rgba(100,200,255,.3)', color: 'var(--cyan3)' }}>
                🚗 V2V · LoRa · Cloud
              </div>
              <div className="proj-title">Advanced V2V Weather &amp; Road Condition System</div>
              <div className="proj-period">Jun 2025 — Jan 2026</div>
              <p className="proj-desc">
                Raspberry Pi Nano broadcasting road &amp; weather data via LoRa/NRF24 to nearby vehicles, mirroring to
                cloud via Wi-Fi for global access and real-time safety alerts.
              </p>
            </div>

            <div className="proj-card-bot">
              {['Raspberry Pi','Python','LoRa','NRF24','DHT22'].map((t) => (
                <div key={t} className="proj-tool">{t}</div>
              ))}
            </div>
          </div>

          <ExpandBtn label="Details" />
          <div className="expand-wrap">
            <div className="inner-exp">
              <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text2)', lineHeight: 1.75 }}>
                Hybrid V2V + cloud architecture. Real-time rain, humidity and road wetness alerts. Smart transportation,
                autonomous vehicles, intelligent traffic management.
              </p>
            </div>
          </div>
        </ProjCard>

      </div>
    </section>
  );
}
