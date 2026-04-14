// src/components/Research.js

const NODES = [
  '◈ Rate-Splitting Multiple Access',
  '⬡ Intelligent Reflecting Surfaces',
  '◎ UAV Communication Networks',
  '⚡ RF Energy Harvesting',
  '▦ 6G Wireless Systems',
  '◆ Beamforming Optimization',
  '○ RFID Sensor Systems',
  '▲ Antenna Design',
  '◇ Battery-Free IoT',
  '⬟ Embedded Avionics',
];

const RI_CARDS = [
  {
    accent: 'var(--violet)',
    ico: '📡',
    title: 'Next-Gen Multiple Access',
    desc: 'Investigating how RSMA supersedes NOMA/OMA in multi-user MIMO, particularly for heterogeneous networks where interference management is critical to achieving theoretical capacity.',
    badge: 'Active Research',
    badgeStyle: { borderColor: 'var(--violet2)', color: 'var(--violet3)', background: 'rgba(124,106,247,.08)' },
  },
  {
    accent: 'var(--cyan)',
    ico: '🪞',
    title: 'Reconfigurable Intelligent Surfaces',
    desc: 'Exploring IRS phase optimization for dynamic channel environments, focusing on low-complexity passive beamforming suitable for real-world 6G deployment.',
    badge: 'In Progress',
    badgeStyle: { borderColor: 'var(--cyan2)', color: 'var(--cyan)', background: 'rgba(34,212,253,.07)' },
  },
  {
    accent: 'var(--amber)',
    ico: '⚡',
    title: 'Battery-Free IoT via RF Harvesting',
    desc: 'Advancing multi-band rectenna designs approaching theoretical Friis limit. Targeting wearables and smart agriculture on ambient WiFi/cellular energy.',
    badge: 'Core Interest',
    badgeStyle: { borderColor: 'rgba(245,158,11,.4)', color: '#fbbf24', background: 'rgba(245,158,11,.08)' },
  },
  {
    accent: '#4ade80',
    ico: '🛸',
    title: 'UAV Emergency Networks',
    desc: 'Designing resilient UAV relay architectures for post-disaster scenarios. Combining mobility optimization with IRS link enhancement for maximum coverage.',
    badge: 'Future Work',
    badgeStyle: { borderColor: 'rgba(74,222,128,.35)', color: '#4ade80', background: 'rgba(74,222,128,.07)' },
  },
];

export default function Research() {
  return (
    <section id="research">
      <div className="s-label">Research Interests</div>
      <h2 className="s-heading">
        The <span className="hl">Frontier</span>
        <br />I&apos;m Exploring
      </h2>
      <hr className="s-rule" />

      <div className="r-nodes reveal">
        {NODES.map((n) => (
          <div key={n} className="r-node">{n}</div>
        ))}
      </div>

      <div className="ri-grid reveal" style={{ transitionDelay: '.15s' }}>
        {RI_CARDS.map((card) => (
          <div key={card.title} className="ri-card">
            <div className="ri-acc" style={{ background: card.accent }} />
            <div className="ri-ico">{card.ico}</div>
            <div className="ri-title">{card.title}</div>
            <p className="ri-desc">{card.desc}</p>
            <span className="ri-badge" style={card.badgeStyle}>{card.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
