import React from "react";
import { Link } from "react-router-dom";

/**
 * Component that displays information about a software developer based in Cape Town.
 * Contains a heading, a paragraph with a sample text, and a button that links to the contact page.
 *
 * @return {JSX.Element} The rendered component.
 */
const AboutMe = () => {
  return (
    // Outer container for the about me section
    <div className="fixed right-40 top-80 w-96 h-96">
      {/* Heading for the about me section */}
      <h1 className=" text-black text-3xl font-medium">
        Software Developer Based in Cape Town
      </h1>
      {/* Paragraph with a sample text */}
      <p className="mt-6">
        I specialize in crafting custom software solutions that are tailored to
        meet your unique needs. With my unique background in Anthropology, I
        bring a unique and more user focused approach to crafting custom
        software solutions. I have experience in designing, developing, and
        deploying custom software solutions for SMEs. Being an entrepreneur, I
        have a deep understanding of what small and medium sized businesses
        need.
      </p>
      {/* Container for the contact button */}
      <div>
        {/* Link to the contact page */}
        <Link to="/contact">
          {/* Contact button */}
          <button className="bg-black hover:grey-700 text-white w-1/4 font-bold py-2 rounded mt-6">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
