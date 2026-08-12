import developerImg from "../../../assets/developer.png";
const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-slate-950 px-8 py-16 text-white">
      {" "}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
        {" "}
        {/* Hero Content */}{" "}
        <div className="max-w-2xl text-center md:text-left">
          {" "}
          <p className="mb-2 text-lg text-slate-300"> Hi, I am </p>{" "}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {" "}
            Sajid Habib{" "}
          </h1>{" "}
          <p className="mt-4 text-2xl font-semibold text-blue-600 sm:text-3xl">
            {" "}
            Full Stack Web Developer{" "}
          </p>{" "}
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {" "}
            I build modern web applications using{" "}
          </p>{" "}
          <h3 className="mt-2 text-xl font-semibold text-white">
            {" "}
            React, Node.js, Express & MongoDB.{" "}
          </h3>{" "}
          {/* CTA Buttons */}{" "}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            {" "}
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700">
              {" "}
              View Projects{" "}
            </button>{" "}
            <button className="rounded-lg border border-slate-600 px-6 py-3 font-medium text-white transition hover:bg-slate-800">
              {" "}
              Download Resume{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        {/* Developer Image */}{" "}
        <div className="flex justify-center">
          {" "}
          <img
            src={developerImg}
            alt="Sajid Habib - Full Stack Web Developer"
            className="w-64 sm:w-80 lg:w-96"
          />{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default HeroSection;
