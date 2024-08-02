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
              The Chrome Dashboard is a personalized web-based dashboard
              designed to enhance the user experience by displaying dynamic
              content such as a background image, current time, cryptocurrency
              prices, and local weather information. This project leverages
              various APIs to fetch real-time data, ensuring users have
              up-to-date information at a glance.
            </p>
            {/* Project description */}
            <p className="mb-4">
              The Chrome Dashboard features a dynamic background image fetched
              from the Unsplash API, updating with each page load for a fresh
              visual experience. It displays real-time Bitcoin data from the
              CoinGecko API, including the current price, 24-hour high, and
              24-hour low. A live digital clock updates every second, showing
              the current time in a 24-hour format. Using the OpenWeatherMap API
              and geolocation, the dashboard provides local weather information,
              including temperature, weather icon, and city name. The layout is
              designed to be responsive, ensuring optimal display across various
              screen sizes and devices.
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
