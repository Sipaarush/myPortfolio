import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
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