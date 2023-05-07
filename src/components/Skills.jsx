import React from "react";

const Skills = () => {
  return (
    <>
      <div className=" grid h-screen bg-green-50">
        <div className=" items-center p-8 justify-center">
          <h2 className=" text-cyan-700 text-center mt-4 items-center font-bold text-5xl">
            {" "}
            Skills
          </h2>
        </div>

        <div class="grid grid-cols-3 ml-4 mr-4 gap-4 items-center">
          <div className="bg-cyan-700 p-8  rounded-lg cursor-pointer hover:bg-cyan-950">
            <h2 className="text-3xl  text-white font-bold ">Html </h2>
            <p className=" text-white p-2 "> HyperText Markup Language</p>
          </div>

          <div className="bg-cyan-700  p-8 rounded-lg cursor-pointer hover:bg-cyan-950">
            <h2 className="text-3xl   text-white font-bold ">CSS</h2>
            <p className=" text-white p-2 "> Cascading Style Sheets</p>
          </div>
          <div className="bg-cyan-700 p-8 rounded-lg cursor-pointer hover:bg-cyan-950">
            <h2 className="text-3xl   text-white font-bold ">JavaScript</h2>
            <p className=" text-white p-2 "> ES6</p>
          </div>
          <div className="bg-cyan-700 p-8 rounded-lg cursor-pointer hover:bg-cyan-950">
            <h2 className="text-3xl   text-white font-bold ">React</h2>
            <p className=" text-white p-2 ">JavaScript library</p>
          </div>
          <div className="bg-cyan-700 p-8 rounded-lg cursor-pointer hover:bg-cyan-950">
            <h2 className="text-3xl  text-white font-bold ">Tailwind</h2>
            <p className=" text-white p-2 ">CSS Framework</p>
          </div>
          <div className="bg-cyan-700 p-8 rounded-lg cursor-pointer hover:bg-cyan-950 ">
            <h2 className="text-3xl  text-white font-bold ">Github</h2>
            <p className=" text-white p-2 ">Version Control</p>
          </div>
          <div className="bg-cyan-700 p-8 rounded-lg cursor-pointer hover:bg-cyan-950">
            <h2 className="text-3xl text-white font-bold ">
              Adobe Illustrator
            </h2>
            <p className=" text-white p-2 ">Vector Graphics Editor </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
