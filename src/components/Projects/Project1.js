// Project1 //

import React from "react";
import projectImage from "./project1.png";

/**
 * Renders the Project 1 component.
 *
 * @return {JSX.Element} The rendered Project 1 component.
 */
const Project1 = () => {
  return (
    // Outer container for the project section
    <div className="flex flex-col items-center mb-12 h-screen">
      {/* Heading for the project section */}
      <h1 className="text-black mt-10 text-6xl font-bold text-center mb-8">
        Project 1
      </h1>
      {/* Container for the project image and description */}
      <div className="flex justify-between items-center w-full">
        {/* Container for the project image */}
        <div className="ml-40 mt-6">
          <img
            src={projectImage}
            alt="Project 1"
            className="w-[500px] h-[500px]"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Project description */}
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

export default Project1;
