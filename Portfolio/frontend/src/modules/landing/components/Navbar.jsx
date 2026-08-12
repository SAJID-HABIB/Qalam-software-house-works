import { NavLink } from "react-router-dom";
function NavBar() {
   return (
    <nav className="fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-slate-800 bg-slate-950/90 px-6 py-4 text-white shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide"
        >
          Sajid <span className="text-blue-600">Habib</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Contact
          </a>

          <a
            href="/resume"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;