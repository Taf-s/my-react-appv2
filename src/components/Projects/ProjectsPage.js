import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

/**
 * The ProjectsPage component renders a list of project components in a vertical
 * space. It is responsible for displaying information about the projects on
 * the projects page of the website.
 *
 * @return {JSX.Element} The rendered ProjectsPage component.
 */
const ProjectsPage = () => {
  return (
    // The div element that holds all the project components.
    <div className="space-y-12">
      {/* The Project1 component, which displays information about the first project. */}
      <Project1 />
      {/* The Project2 component, which displays information about the second project. */}
      <Project2 />
      {/* The Project3 component, which displays information about the third project. */}
      <Project3 />
    </div>
  );
};

export default ProjectsPage;
