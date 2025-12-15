import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = [];

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.6 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [ids]);

  return active;
}
