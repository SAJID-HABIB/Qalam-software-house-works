// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import heroImg  from "./images/hero-img.svg";
import img1  from "./images/img-1.png";
import img2  from "./images/img-2.png";
import img3  from "./images/img-3.png";
import img4  from "./images/img-4.png";


import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="Header-left">
          <a href="">HOME</a>
          <div>About</div>
          <div>Servies</div>
          <div>Portfolio</div>
          <div>Team</div>
          <div>Blog</div>
          <div>Dropdown</div>
          <div>Contact</div>
        </div>
        <div className="header-right">
          <button>Get Started</button>
        </div>
        <div className="header-right">
          <button>Get Started</button>
        </div>
      </header>
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
        <div className="part2">
        <div>
            <img src={img1} alt="" />
            <h4 className="h4">Lorem lpsum</h4>
            <p>voluptates deleniti atque corrupti quas dolores et quas molestias excepturi</p>
        </div>
        <div>
            <img src={img2} alt="" />
            <h4>Lorem lpsum</h4>
            <p>voluptates deleniti atque corrupti quas dolores et quas molestias excepturi</p>
        </div>
        <div>
            <img src={img3} alt="" />
            <h4>Lorem lpsum</h4>
            <p>voluptates deleniti atque corrupti quas dolores et quas molestias excepturi</p>
        </div>
        <div>
            <img src={img4} alt="" />
            <h4>Lorem lpsum</h4>
            <p>voluptates deleniti atque corrupti quas dolores et quas molestias excepturi</p>
        </div>
    </div>
    </>
  );
}

export default App;
