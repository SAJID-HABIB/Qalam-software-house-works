import "./Navbar.css";
export function NavBar() {
  return (
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
      )
}

export default NavBar;