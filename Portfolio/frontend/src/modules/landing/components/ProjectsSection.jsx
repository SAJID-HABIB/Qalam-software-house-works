import projects from "../constants/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
 return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24 text-white sm:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A selection of projects I have built using modern frontend,
            backend, and database technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
