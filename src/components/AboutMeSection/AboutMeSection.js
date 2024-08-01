import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="fixed right-40 top-80 w-96 h-96">
      <h1 className=" text-black text-3xl font-medium">
        Software Developer Based in Cape Town
      </h1>
      <p className="mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. testing
      </p>
      <div>
        <Link to="/contact">
          <button className="bg-black hover:grey-700 text-white w-1/4 font-bold py-2 rounded mt-6">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
