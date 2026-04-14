import SectionWrapper from "../ui/SectionWrapper";
import { research } from "@/data/research";

export default function Research() {
  return (
    <SectionWrapper id="research" title="Research Interests">
      
      <div className="flex flex-wrap gap-3">
        {research.map((r, i) => (
          <div key={i} className="px-4 py-2 border text-sm font-mono text-gray-400">
            {r}
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
}