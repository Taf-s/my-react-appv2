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
                HTML (HyperText Markup Language) is the standard language used
                to create and design web pages. It structures content on the web
                by using a series of elements and tags, allowing developers to
                define headings, paragraphs, links, images, and other types of
                content. HTML documents are made up of nested elements that
                provide both structure and semantics to the content, ensuring
                that web pages are displayed correctly in browsers and are
                accessible to users.
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
                CSS (Cascading Style Sheets) is a stylesheet language used to
                control the presentation and layout of web pages. It enables
                developers to apply styles to HTML elements, such as fonts,
                colors, spacing, and positioning. By separating content from
                design, CSS allows for more flexible and efficient web
                development. It also supports responsive design, ensuring that
                web pages look great on various devices and screen sizes.
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
                JavaScript is a versatile programming language used to create
                dynamic and interactive features on web pages. It allows
                developers to manipulate HTML and CSS, handle user events, and
                build complex functionalities like animations, form validation,
                and real-time updates. As a core technology of the web,
                JavaScript enables seamless integration of front-end and
                back-end processes, enhancing the user experience and making web
                applications more responsive and engaging.
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
                React is a popular JavaScript library used for building user
                interfaces, particularly single-page applications. It allows
                developers to create reusable UI components that efficiently
                update and render in response to data changes. By utilizing a
                virtual DOM, React optimizes performance and ensures smooth,
                dynamic interactions. Its component-based architecture
                simplifies the development process and helps in maintaining
                scalable and maintainable code for complex applications.
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
                Tailwind CSS is a utility-first CSS framework that allows for
                rapid and customizable design of web interfaces. By providing a
                comprehensive set of low-level utility classes, it enables
                developers to build complex layouts and designs directly in the
                HTML without needing custom CSS. Tailwind promotes a more
                consistent and maintainable approach to styling, offering
                responsive, flexible, and easily configurable design solutions
                for modern web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
