import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <div className="flex items-center h-32 ml-40 space-x-14">
          <Link to="/" className="text-black text-lg font-normal">
            Home
          </Link>
          <Link to="/projects" className="text-black text-lg font-normal">
            Projects
          </Link>
          <Link to="/tech-stack" className="text-black text-lg font-normal">
            Tech Stack
          </Link>
          <Link to="/contact" className="text-black text-lg font-normal">
            Contact{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
