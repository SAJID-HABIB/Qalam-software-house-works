const AboutSection = () => {
  return (
    <section id="about" className="bg-slate-950 px-8 py-24 text-white">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            
            About Me
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            
            Building solutions with code
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            
            A passionate Full Stack Web Developer focused on creating reliable,
            scalable and user-friendly web applications.
          </p>
        </div>
        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content */}
          <div>
            
            <h3 className="text-2xl font-semibold"> Who I Am </h3>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
              
              <p>
                
                I'm Sajid Habib, a Full Stack Web Developer who enjoys turning
                ideas into practical and modern web applications. I work across
                both frontend and backend development, allowing me to understand
                how complete web applications work from the user interface to
                the database.
              </p>
              <p>
              
                My primary technologies include React, JavaScript, Node.js,
                Express and MongoDB. I focus on writing maintainable code,
                creating reusable components and building APIs that are
                structured and easy to work with.
              </p>
              <p>
                
                I continuously improve my development skills by building
                real-world projects, researching new technologies and solving
                practical programming problems.
              </p>
            </div>
            {/* CTA */}
            <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700">
              
              Download Resume
            </button>
          </div>
          {/* Right Content */}
          <div className="grid gap-5 sm:grid-cols-2">
            
            {/* Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              
              <p className="text-sm text-slate-400"> Frontend </p>
              <h4 className="mt-2 text-xl font-semibold"> React.js </h4>
              <p className="mt-3 text-slate-400">
                
                Building responsive and reusable user interfaces.
              </p>
            </div>
            {/* Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              
              <p className="text-sm text-slate-400"> Backend </p>
              <h4 className="mt-2 text-xl font-semibold">
                
                Node.js & Express
              </h4>
              <p className="mt-3 text-slate-400">
                
                Developing REST APIs and server-side applications.
              </p>
            </div>
            {/* Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              
              <p className="text-sm text-slate-400"> Database </p>
              <h4 className="mt-2 text-xl font-semibold"> MongoDB </h4>
              <p className="mt-3 text-slate-400">
                
                Designing and working with application data.
              </p>
            </div>
            {/* Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              
              <p className="text-sm text-slate-400"> Development </p>
              <h4 className="mt-2 text-xl font-semibold"> Full Stack </h4>
              <p className="mt-3 text-slate-400">
                
                Connecting frontend, backend and database together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
