import "./Herosection.css" 
export function Herosection() {
  return (
    <div>
          <div className="hero-img">
            <img src={heroImg} alt="hero" />
          </div>
          <div className="h1">
            <h1>
              Welcome to<span> HeroBiz </span>
            </h1>
          </div>
          <div className="paragraph">
            <p>
              Et voluptate esse accusantium assusamus natus reiciendis quidem
              voluptate similique aut.
            </p>
          </div>
          <div className="p1">
            <button>Get Started</button>
            <button className="p2">Watch Video</button>
          </div>
        </div>
  )
}

export default Herosection;