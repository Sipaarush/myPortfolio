import { useEffect } from "react";

export default function useParallax(ref, speed = 0.2) {
  useEffect(() => {
    function handleScroll() {
      const offset = window.scrollY * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}