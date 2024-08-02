import React from "react";

/**
 * Renders a component that displays a list of services.
 *
 * @return {JSX.Element} The rendered component.
 */
const Services = () => {
  return (
    // Outer container for the services section
    <div className="fixed top-80 left-40 w-96 h-96">
      {/* Heading for the services section */}
      <h1 className="services-title text-black text-3xl font-medium">
        Services
      </h1>
      {/* Section for software development services */}
      <h2 className="subtitle-1 text-black text-lg font-medium mt-6 mb-2 ">
        Software Development
      </h2>
      {/* Description for software development services */}
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {/* Section for brand consulting services */}
      <h3 className="subtitle-2 text-black text-lg font-medium mt-6 mb-2">
        Brand Consulting
      </h3>
      {/* Description for brand consulting services */}
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Services;
