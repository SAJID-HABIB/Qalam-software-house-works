function ProjectCard({ title, image, description, technologies, github, live }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} project`}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies?.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-4 border-t border-slate-800 pt-5">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-600 hover:text-white"
          >
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Live Demo
            </a>
          )}

        </div>
      </div>
    </article>
  );
}

export default ProjectCard;