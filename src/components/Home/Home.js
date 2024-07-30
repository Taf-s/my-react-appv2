import React from "react";
import Services from "../ServicesSection/ServiceSection";
import AboutMe from "../AboutMeSection/AboutMeSection";

const Home = () => {
  return (
    <div className="relative top-[174px] left-[623px] w-[517px] h-[123px] items-center">
      <h1 className="text-black text-6xl font-bold text-center">
        Tafara Sithole
      </h1>
      <Services />
      <AboutMe />
    </div>
  );
};

export default Home;
