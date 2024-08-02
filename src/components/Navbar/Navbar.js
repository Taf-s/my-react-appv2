import React from "react";
import { Link } from "react-router-dom";

/**
 * Renders the navigation bar component.
 *
 * @return {JSX.Element} The rendered navigation bar.
 */
function Navbar() {
  return (
    // The navigation bar container
    <nav>
      <div>
        {/* The navigation bar content */}
        <div className="flex items-center h-32 ml-40 space-x-14">
          {/* The link to the home page */}
          <Link to="/" className="text-black text-lg font-normal">
            Home
          </Link>
          {/* The link to the projects page */}
          <Link to="/projects" className="text-black text-lg font-normal">
            Projects
          </Link>
          {/* The link to the tech stack page */}
          <Link to="/tech-stack" className="text-black text-lg font-normal">
            Tech Stack
          </Link>
          {/* The link to the contact page */}
          <Link to="/contact" className="text-black text-lg font-normal">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
