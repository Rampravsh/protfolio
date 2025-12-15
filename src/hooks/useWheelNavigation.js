import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGE_ORDER } from "../constants/pageOrder.js";

export default function useWheelNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      const currentIndex = PAGE_ORDER.indexOf(location.pathname);
      if (currentIndex === -1) return;

      if (e.deltaY > 40 && currentIndex < PAGE_ORDER.length - 1) {
        isScrolling.current = true;
        navigate(PAGE_ORDER[currentIndex + 1]);
      }

      if (e.deltaY < -40 && currentIndex > 0) {
        isScrolling.current = true;
        navigate(PAGE_ORDER[currentIndex - 1]);
      }
      setTimeout(() => {
        isScrolling.current = false;
      }, 600); // match animation duration
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [location.pathname, navigate]);
}
