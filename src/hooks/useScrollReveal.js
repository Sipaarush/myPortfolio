import { useEffect } from "react";

export default function useScrollReveal(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        ref.current.classList.add("visible");
      }
    });

    obs.observe(ref.current);
  }, []);
}