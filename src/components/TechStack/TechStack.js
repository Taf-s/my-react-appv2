import React from "react";

/**
 * Renders the TechStack component, which displays a grid of tech stacks
 * including languages, libraries, and frameworks.
 *
 * @return {JSX.Element} The rendered TechStack component.
 */
const TechStack = () => {
  return (
    // Outer container for the tech stack section
    <div>
      {/* Heading for the tech stack section */}
      <div className="relative top-10 left-[623px] w-[517px] h-[123px] items-center">
        <h1 className="text-black text-6xl font-bold text-center">TechStack</h1>
      </div>

      {/* Container for the tech stack content */}
      <div className="container mx-auto p-6">
        {/* Grid layout for the tech stack items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Container for the languages section */}
          <div>
            {/* Heading for the languages section */}
            <h2 className="subtitle-1 text-black text-3xl font-medium mt-6 mb-2">
              Languages
            </h2>
            {/* Container for the HTML language description */}
            <div className="mt-4">
              {/* Heading for the HTML language */}
              <h3 className="subtitle-1 text-black text-lg font-medium mt-6 mb-2">
                HTML
              </h3>
              {/* Description for the HTML language */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Container for the CSS language description */}
            <div className="mt-4">
              {/* Heading for the CSS language */}
              <h3 className="subtitle-1 text-black text-lg font-medium mt-6 mb-2">
                CSS
              </h3>
              {/* Description for the CSS language */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Container for the JavaScript language description */}
            <div className="mt-4">
              {/* Heading for the JavaScript language */}
              <h3 className="subtitle-1 text-black text-lg font-medium mt-6 mb-2">
                JAVASCRIPT
              </h3>
              {/* Description for the JavaScript language */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Container for the libraries section */}
          <div>
            {/* Heading for the libraries section */}
            <h2 className="subtitle-1 text-black text-3xl font-medium mt-6 mb-2">
              Libraries
            </h2>
            {/* Container for the React library description */}
            <div className="mt-4">
              {/* Heading for the React library */}
              <h3 className="subtitle-1 text-black text-lg font-medium mt-6 mb-2">
                REACT
              </h3>
              {/* Description for the React library */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Container for the frameworks section */}
          <div>
            {/* Heading for the frameworks section */}
            <h2 className="subtitle-1 text-black text-3xl font-medium mt-6 mb-2">
              Frameworks
            </h2>
            {/* Container for the Tailwind CSS framework description */}
            <div className="mt-4">
              {/* Heading for the Tailwind CSS framework */}
              <h3 className="subtitle-1 text-black text-lg font-medium mt-6 mb-2">
                TAILWIND CSS
              </h3>
              {/* Description for the Tailwind CSS framework */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
