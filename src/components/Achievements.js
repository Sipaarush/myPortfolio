// src/components/Achievements.js
export function Achievements() {
  return (
    <section id="achievements">
      <div className="s-label">Recognition</div>
      <h2 className="s-heading">
        Awards &amp;
        <br /><span className="hl">Achievements</span>
      </h2>
      <hr className="s-rule" />

      <div className="ach-grid reveal">
        <div className="ach-card">
          <div className="ach-ico" style={{ background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.3)' }}>🏆</div>
          <div>
            <div className="ach-title">AeroHack 2025 — Electronics Finalist</div>
            <div className="ach-org">Collins Aerospace Initiative</div>
            <div className="ach-desc">
              Finalist in Electronics for the sounding rocket avionics project. Complete real-time avionics stack
              competing nationally.
            </div>
            <span className="ach-badge" style={{ borderColor: 'rgba(245,158,11,.4)', color: '#fbbf24', background: 'rgba(245,158,11,.08)' }}>
              FINALIST
            </span>
          </div>
        </div>

        <div className="ach-card">
          <div className="ach-ico" style={{ background: 'rgba(124,106,247,.1)', border: '1px solid rgba(124,106,247,.3)' }}>💡</div>
          <div>
            <div className="ach-title">HP Dreams Unlocked — Business Semi-Finalist</div>
            <div className="ach-org">HP Inc.</div>
            <div className="ach-desc">
              Top 25 nationally in Business category. Cross-disciplinary thinking bridging engineering and innovation —
              rare for core ECE.
            </div>
            <span className="ach-badge" style={{ borderColor: 'var(--violet2)', color: 'var(--violet3)', background: 'rgba(124,106,247,.08)' }}>
              TOP 25
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact section ──────────────────────────────────────────────────────────
export function Contact() {
  return (
    <section id="contact">
      <div className="bg-word">CONNECT</div>
      <div className="s-label" style={{ justifyContent: 'center' }}>Let&apos;s Connect</div>
      <h2 className="s-heading" style={{ fontSize: 'clamp(2.5rem,5.5vw,5.5rem)' }}>
        Open to<br /><span className="hl">Opportunities</span>
      </h2>
      <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--text2)', maxWidth: '460px', margin: '1.5rem auto 0', lineHeight: 1.9 }}>
        Internships, research collaborations, and projects in RF engineering, wireless systems &amp; embedded hardware.
      </p>

      <div className="c-grid">
        <a href="mailto:priyanshusingh20031130@gmail.com" className="c-card">
          <div className="c-ico">✉️</div>
          <div className="c-lbl">Email</div>
          <div className="c-val">priyanshusingh20031130<br />@gmail.com</div>
        </a>
        <a href="https://www.linkedin.com/in/priyanshuks2510/" target="_blank" rel="noopener noreferrer" className="c-card">
          <div className="c-ico">🔗</div>
          <div className="c-lbl">LinkedIn</div>
          <div className="c-val">/in/priyanshuks2510</div>
        </a>
        <div className="c-card">
          <div className="c-ico">📍</div>
          <div className="c-lbl">Location</div>
          <div className="c-val">Bengaluru, India<br />Open to relocation</div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer>
      <div className="fl">© 2025 Priyanshu Kumar Singh · All rights reserved</div>
      <div className="fr">
        <div className="nav-dot" />
        Available for opportunities
      </div>
    </footer>
  );
}
