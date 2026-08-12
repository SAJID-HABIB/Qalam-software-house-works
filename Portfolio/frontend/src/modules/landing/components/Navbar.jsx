import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-slate-950 text-white">
      
      {/* Logo / Name */}
      <h2 className="text-2xl font-bold tracking-wide">
        Sajid Habib
      </h2>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <a
          href="#about"
          className="text-slate-300 transition hover:text-white"
        >
          About
        </a>

        <a
          href="#skills"
          className="text-slate-300 transition hover:text-white"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="text-slate-300 transition hover:text-white"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="text-slate-300 transition hover:text-white"
        >
          Contact
        </a>

        <a
          href="/resume"
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium transition hover:bg-blue-700"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default NavBar;