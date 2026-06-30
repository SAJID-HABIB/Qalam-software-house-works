import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div>
      <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
    </div>
  );
}

export default Navbar;