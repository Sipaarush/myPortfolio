// src/app/page.js
// Server component by default — imports client components where needed

import Navigation          from '../components/Navigation';
import Hero                from '../components/Hero';
import About               from '../components/About';
import Projects            from '../components/Projects';
import Research            from '../components/Research';
import Education           from '../components/Education';
import { Achievements, Contact, Footer } from '../components/Achievements';
import CustomCursor        from '../components/CustomCursor';
import ScrollReveal        from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* Aurora background blobs */}
      <div className="aurora">
        <div className="aurora-blob" />
        <div className="aurora-blob" />
        <div className="aurora-blob" />
      </div>

      {/* Client-side interactive layers */}
      <CustomCursor />
      <ScrollReveal />

      {/* Page sections */}
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
