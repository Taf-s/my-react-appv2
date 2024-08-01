// Project3 //

import React from "react";

const Project3 = () => {
  return (
    <div className="flex flex-col items-center mb-12 h-screen">
      <h1 className="text-black mt-10 text-6xl font-bold text-center mb-8">
        Project 3
      </h1>
      <div className="flex justify-center items-center w-full">
        <div className="mr-40 mt-6">
          <img
            src="path/to/image.jpg"
            alt="Project 1"
            className="w-[500px] h-[500px] object-cover"
          />
        </div>
        <div className="w-[500px] h-[500px] flex flex-col justify-between">
          <div className="ml-40">
            <h2 className="text-black text-3xl font-medium mt-6 mb-4">
              Project Description
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="ml-40">
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-6">
              Project Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
