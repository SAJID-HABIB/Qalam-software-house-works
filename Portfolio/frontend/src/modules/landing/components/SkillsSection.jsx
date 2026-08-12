const skills = [
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS "],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Middleware"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose", " Schema Design", "Aggregation"],
  },
  {
    title: "Tools & Tech",
    skills: ["Git", "GitHub", " Postman", "Linux"],
  },
  {
    title: "Development Practices",
    skills: [
      " Clean Code",
      "MVC",
      " API Integration",
      "Authentication",
      " Error Handling",
      "Debug",
    ],
  },
];

function Skils() {
  return (
    <section id="skills" className="bg-slate-950 px-8 py-24 text-white">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="mb-14 text-center">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            
            My Skills
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            
            Technologies I Work With
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            
            A collection of technologies and development practices I use to
            build modern web applications.
          </p>
        </div>
        {/* Skills Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-600"
            >
              
              <h3 className="text-xl font-semibold"> {category.title} </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-600 hover:text-white"
                  >
                    
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skils;
