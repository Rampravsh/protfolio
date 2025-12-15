import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function MobileMenu({ open, close }) {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, close]);

  if (!open) return null;

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition
     ${isActive ? "text-[var(--primary)]" : ""}`;

  return (
    <>
      {/* BACKDROP */}
      <div className="fixed inset-0 z-40" onClick={close} />

      {/* MENU */}
      <div
        className="fixed top-16 right-4 z-50 w-48 rounded-xl
        bg-[rgba(0,0,0,0.55)] backdrop-blur-lg
        border border-white/10 shadow-lg"
      >
        <nav className="flex flex-col p-2 text-sm">
          <NavLink to="/" onClick={close} className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={close} className={linkClass}>
            About
          </NavLink>
          <NavLink to="/skills" onClick={close} className={linkClass}>
            Skills
          </NavLink>
          <NavLink to="/projects" onClick={close} className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={close} className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}
