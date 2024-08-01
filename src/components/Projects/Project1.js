import React from "react";

const Project1 = () => {
  return (
    <div>
      <div className="relative top-[174px] left-[623px] w-[517px] h-[123px] items-center">
        <h1 className="text-black text-6xl font-bold text-center">Project 1</h1>
      </div>

      <div>
        <img src="path/to/image.jpg" alt="Project 1" />
      </div>

      <div>
        <h2 className=" text-black text-3xl font-medium">
          Project Description
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. testing
        </p>
      </div>

      <div>
        <button className="bg-black hover:grey-700 text-white w-1/4 font-bold py-2 rounded mt-6">
          Project Repo
        </button>
      </div>
    </div>
  );
};

export default Project1;
