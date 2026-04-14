import SectionWrapper from "../ui/SectionWrapper";
import SkillOrb from "../ui/SkillOrb";

export default function About() {
  return (
    <SectionWrapper id="about" title="Building the Signal of the Future">
      
      <div className="grid md:grid-cols-2 gap-10">
        
        <div className="text-sm text-gray-400 font-mono leading-7">
          Final-year ECE student focused on RF systems, UAV communication,
          and energy harvesting.
        </div>

        <SkillOrb />
      </div>

    </SectionWrapper>
  );
}