function Eperince() {
  const responsibilities = [
    "Develop responsive and reusable user interfaces using React.js, JavaScript, and Tailwind CSS.",
    "Build and integrate RESTful APIs using Node.js and Express.js with modular backend architecture.",
    "Design and manage MongoDB databases using Mongoose, including schema design, validation, and optimized queries.",
    "Implement authentication and authorization using JWT, protected routes, and middleware.",
    "Integrate frontend applications with backend APIs using Axios and handle loading, validation, and error states.",
    "Debug and resolve frontend, backend, API, database, and integration issues throughout the development lifecycle.",
  ];
  const technologies = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Axios",
    "Git",
    "GitHub",
  ];
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24 text-white sm:px-8"
    >
      
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            
            Experience
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            
            Professional Experience
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            
            Building and maintaining modern full-stack web applications across
            frontend, backend, and database systems.
          </p>
        </div>
        {/* Experience Card */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl sm:p-8 lg:p-10">
          
          {/* Header */}
          <div className="flex flex-col gap-5 border-b border-slate-800 pb-7 md:flex-row md:items-start md:justify-between">
            
            <div>
              
              <h3 className="text-2xl font-bold sm:text-3xl">
                
                Full Stack Web Developer
              </h3>
              <p className="mt-2 text-lg font-medium text-blue-600">
                
                Qalam Training Programs
              </p>
              <p className="mt-1 text-sm text-slate-400">
                
                Lahore, Pakistan
              </p>
            </div>
            <div className="md:text-right">
              
              <p className="font-medium text-white">
                
                Feb 2026 – Present
              </p>
              <p className="mt-1 text-sm text-slate-400"> Full-time </p>
            </div>
          </div>
          {/* Overview */}
          <div className="mt-8">
            
            <h4 className="text-lg font-semibold"> Overview </h4>
            <p className="mt-3 max-w-4xl leading-7 text-slate-300">
              
              Develop and maintain scalable full-stack web applications using
              modern JavaScript technologies, working across frontend and
              backend development, API integration, database design,
              authentication, and application architecture.
            </p>
          </div>
          {/* Responsibilities */}
          <div className="mt-9">
            
            <h4 className="text-lg font-semibold">
              
              Key Responsibilities
            </h4>
            <ul className="mt-4 space-y-3">
              
              {responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex gap-3 leading-7 text-slate-300"
                >
                  
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Tech Stack */}
          <div className="mt-9 border-t border-slate-800 pt-8">
            
            <h4 className="text-lg font-semibold"> Tech Stack </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-blue-600 hover:text-white"
                >
                  
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
export default Eperince;
