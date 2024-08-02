// Project2 //

import React from "react";
import projectImage from "./project2.png";

/**
 * Renders the Project 2 component.
 *
 * @return {JSX.Element} The rendered Project 2 component.
 */
const Project2 = () => {
  return (
    // Outer container for the project section
    <div className="flex flex-col items-center mb-12 h-screen">
      {/* Heading for the project section */}
      <h1 className="text-black mt-10 text-6xl font-bold text-center mb-8">
        Project 2
      </h1>
      {/* Container for the project image and description */}
      <div className="flex justify-between items-center w-full">
        {/* Container for the project image */}
        <div className="ml-40 mt-6">
          <img
            src={projectImage} // Path to the project image
            alt="Project 2" // Alternative text for the image
            className="w-[500px] h-[500px] object-cover" // CSS classes for styling the image
          />
        </div>
        {/* Container for the project description */}
        <div className="w-[500px] h-[500px] flex flex-col justify-between">
          {/* Container for the project title */}
          <div className="mr-40">
            {/* Project title */}
            <h2 className="text-black text-3xl font-medium mt-6 mb-4">
              Project Description
            </h2>
            {/* Project description */}
            <p className="mb-4">
              The CodeCuisine Menu System is a web-based application designed to
              provide an interactive and user-friendly menu experience for a
              fictional restaurant named "CodeCuisine." The system dynamically
              displays menu items, allows users to add items to their order, and
              supports removing items with real-time updates to the total price.
            </p>
            {/* Project description */}
            <p className="mb-4">
              The CodeCuisine Menu System dynamically generates menu items using
              JavaScript, categorizing them into Starters, Main Courses, and
              Desserts. Users can interactively add items to their order by
              clicking on them, with each selection displayed in a list format
              and a fixed price of R60 added to the total. Items can be removed
              by clicking on them in the order summary, which updates both the
              list and the total price in real-time. The HTML structure ensures
              a responsive layout, providing a clear and organized presentation
              of the menu and order summary
            </p>
          </div>
          {/* Container for the project repo button */}
          <div className="mr-40">
            {/* Project repo button */}
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-6">
              Project Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
