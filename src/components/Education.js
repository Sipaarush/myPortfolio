// src/components/Education.js

const COURSES_BTech = [
  'RF Communication','Microcontrollers','Analog Circuits','Network Theory',
  'Satellite Comms','Linear IC','Computer Architecture','Project Management',
];
const COURSES_HSC = ['Physics','Mathematics','Chemistry','71.11%'];

export default function Education() {
  return (
    <section id="education">
      <div className="s-label">Academic Background</div>
      <h2 className="s-heading">
        Education <span className="hl">&amp;</span>
        <br />Formation
      </h2>
      <hr className="s-rule" />

      <div className="timeline reveal">
        {/* B.Tech */}
        <div className="tl-item">
          <div className="tl-dot" />
          <div className="tl-when">2022 — 2026 · Current</div>
          <div className="tl-inst">Amrita School of Engineering</div>
          <div className="tl-deg">B.Tech — Electronics &amp; Communication Engineering</div>
          <div className="cgpa">
            <span className="gv">7.52</span>
            <span className="gl">CGPA</span>
          </div>
          <div className="tl-courses">
            {COURSES_BTech.map((c) => (
              <span key={c} className="tl-course">{c}</span>
            ))}
          </div>
        </div>

        {/* HSC */}
        <div className="tl-item">
          <div
            className="tl-dot"
            style={{ borderColor: 'var(--cyan)', boxShadow: '0 0 12px rgba(34,212,253,.4)' }}
          />
          <div className="tl-when">2020 — 2022</div>
          <div className="tl-inst">Techno India Group Public School, Hooghly</div>
          <div className="tl-deg">Higher Secondary — Science Stream</div>
          <div className="tl-courses">
            {COURSES_HSC.map((c) => (
              <span key={c} className="tl-course">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
