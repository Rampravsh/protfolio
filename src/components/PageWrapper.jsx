import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const order = ["/", "/about", "/skills", "/projects", "/contact"];

export default function PageWrapper({ children }) {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  const prevIndex = order.indexOf(prevPath.current);
  const currentIndex = order.indexOf(location.pathname);

  const direction =
    currentIndex > prevIndex ? "slide-left" : "slide-right";

  useEffect(() => {
    prevPath.current = location.pathname;
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`page ${direction}`}>
      {children}
    </div>
  );
}
