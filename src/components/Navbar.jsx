import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const linkClass = ({ isActive }) =>
    `nav-link ${
      isActive
        ? "active text-[var(--primary)]"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-lg font-bold">
            Rpk<span className="text-[var(--primary)]">.dev</span>
          </NavLink>

          <ul className="hidden md:flex gap-8 text-sm">
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/skills" className={linkClass}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className=" w-10 h-10 rounded-lg border border-white/10 bg-[rgba(0,0,0,0.35)] backdrop-blur flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-[rgba(0,0,0,0.35)] backdrop-blur"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={open} close={() => setOpen(false)} />
    </>
  );
}
