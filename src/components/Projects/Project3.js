// Project3 //

import React from "react";
import projectImage from "./project3.png";
import { Link } from "react-router-dom";

/**
 * Renders the Project 3 component.
 *
 * @return {JSX.Element} The rendered Project 3 component.
 */
const Project3 = () => {
  return (
    // Outer container for the project section
    <div className="flex flex-col items-center mb-12 h-screen">
      {/* Heading for the project section */}
      <h1 className="text-black mt-10 text-6xl font-bold text-center mb-8">
        Project 3
      </h1>
      {/* Container for the project image and description */}
      <div className="flex justify-between items-center w-full">
        {/* Container for the project image */}
        <div className="ml-40 mt-6">
          <img
            src={projectImage} // Path to the project image
            alt="Project 3" // Alternative text for the image
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
              The Guardians' Playlist Generator is a web-based application
              designed to create personalized playlists for characters from the
              Guardians of the Galaxy. Each Guardian has a preferred music
              genre, and the application dynamically generates playlists based
              on these preferences. This project demonstrates the use of
              JavaScript to manipulate the DOM and filter data.
            </p>
            {/* Project description */}
            <p className="mb-4">
              The Guardians' Playlist Generator features an array of song
              objects with titles, artists, and genres, reflecting the
              Guardians' iconic style. It includes an array of Guardian objects
              with preferred music genres (Rock, Pop, R&B) for Star-Lord,
              Gamora, Groot, Rocket, and Drax. A dynamic playlist generation
              function uses the map function to create playlists based on these
              preferences, filtering songs accordingly. The playlists are
              appended to the HTML for a responsive, organized display, with
              each playlist showing the song title and artist. Additional songs
              have been added using the push method to expand the track variety.
            </p>
          </div>
          {/* Container for the project repo button */}
          <div className="mr-40">
            <Link
              to="https://github.com/Taf-s/Module_5_TAFSIT578_FTO2408_B1_Tafara-Sithole_JSL05"
              target="_blank"
            >
              {/* Project repo button */}
              <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-6">
                Project Repo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
