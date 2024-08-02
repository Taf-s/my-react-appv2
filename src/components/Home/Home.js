import React from "react";
import Services from "../ServicesSection/ServiceSection";
import AboutMe from "../AboutMeSection/AboutMeSection";

/**
 * The Home component renders the name of the user and their services and about me sections.
 *
 * @return {JSX.Element} The Home component.
 */
const Home = () => {
  return (
    // The div element that holds the name of the user and their sections.
    <div className="relative top-10 left-[623px] w-[517px] h-[123px] items-center">
      {/* The h1 element that displays the name of the user. */}
      <h1 className="text-black text-6xl font-bold text-center">
        Tafara Sithole
      </h1>
      {/* The Services component that displays the user's services. */}
      <Services />
      {/* The AboutMe component that displays information about the user. */}
      <AboutMe />
    </div>
  );
};

export default Home;
