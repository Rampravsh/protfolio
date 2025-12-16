import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGE_ORDER } from "../constants/pageOrder.js";

export default function useWheelNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);
  const touchStart = useRef(0);

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

    const handleTouchStart = (e) => {
      touchStart.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling.current) return;

      const currentIndex = PAGE_ORDER.indexOf(location.pathname);
      if (currentIndex === -1) return;

      const touchEnd = e.changedTouches[0].clientY;
      const touchDiff = touchStart.current - touchEnd;

      if (touchDiff > 50 && currentIndex < PAGE_ORDER.length - 1) {
        isScrolling.current = true;
        navigate(PAGE_ORDER[currentIndex + 1]);
      }

      if (touchDiff < -50 && currentIndex > 0) {
        isScrolling.current = true;
        navigate(PAGE_ORDER[currentIndex - 1]);
      }
      setTimeout(() => {
        isScrolling.current = false;
      }, 600); // match animation duration
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [location.pathname, navigate]);
}
