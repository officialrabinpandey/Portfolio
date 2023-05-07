import React from "react";

const Resume = () => {
  return (
    <div className="lg:px-36 py-32 md:flex">
      <div className="md:w-[100%]  bg-blue-100 text-center py-5">
        <h2 className="mt-5 text-4xl  text-cyan-600 ">Rabin Pandey</h2>
        <h3 className="mt-1 font-light text-gray-600">IT Student</h3>
        <div className="md:w-[70%] mx-auto flex mt-10 shadow-lg shadow-gray-400">
          <div className="w-[20%] bg-cyan-900 h-14 "></div>
          <h3 className="text-white bg-cyan-600 text-left ps-8 text-3xl pt-2 w-full">
            Contact
          </h3>
        </div>
        <div className="md:w-[70%] md:mx-auto ps-8 md:ps-0 flex-col mt-3 text-left">
          <p className=" text-2xl text-cyan-600 font-semibold ">Phone:</p>
          <p className=" text-2xl text-gray-600">9867824520</p>
          <p className="mt-3 text-2xl text-cyan-600 font-semibold ">E-mail:</p>
          <p className="underline text-2xl text-gray-600">
            pandeyrabin96@gmail.com
          </p>
          <p className="mt-3 text-2xl text-cyan-600 font-semibold ">Address:</p>
          <p className=" text-2xl text-gray-600">Butwal-8, Rupandehi</p>
        </div>
        <div className="md:w-[70%] mx-auto flex mt-10 shadow-lg shadow-gray-400">
          <div className="w-[20%] bg-cyan-900 h-14 "></div>
          <h3 className="text-white bg-cyan-600 text-left ps-8 text-3xl pt-2 w-full">
            Skills
          </h3>
        </div>
        <div className="md:w-[70%] md:mx-auto ps-8 md:ps-0 flex-col mt-3 text-left">
          <ul className="list-disc ps-6 text-2xl text-cyan-600">
            <li>HTML/CSS</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git/GitHub</li>
            <li>C/Java programming</li>
          </ul>
        </div>
        <div className="md:w-[70%] mx-auto flex mt-10 shadow-lg shadow-gray-400">
          <div className="w-[20%] bg-cyan-900 h-14 "></div>
          <h3 className="text-white bg-cyan-600 text-left ps-8 text-3xl pt-2 w-full">
            Education
          </h3>
        </div>
        <div className="md:w-[70%] md:mx-auto ps-8 md:ps-0 flex-col mt-3 text-left">
          <p className=" text-2xl text-cyan-700 font-semibold ">
            Butwal Multiple Campus
          </p>
          <p className=" text-2xl text-gray-600">
            BSc. CSIT
            <span className="text-black font-semibold">(2018 – Present)</span>
          </p>
          <a href="https://cdcsit.edu.np/" className=" text-2xl text-gray-600">
            https://cdcsit.edu.np/
          </a>
        </div>
        <div className="md:w-[70%] mx-auto flex mt-10 shadow-lg shadow-gray-400">
          <div className="w-[20%] bg-cyan-900 h-14 "></div>
          <h3 className="text-white bg-cyan-600 text-left ps-8 text-3xl pt-2 w-full">
            Language
          </h3>
        </div>
        <div className="md:w-[70%] md:mx-auto ps-8 md:ps-0 flex-col mt-3 text-left">
          <ul className="list-disc ps-6 text-2xl text-cyan-600">
            <li>Nepali</li>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <div className="md:w-[70%] mx-auto flex mt-10 shadow-lg shadow-gray-400">
          <div className="w-[20%] bg-cyan-900 h-14 "></div>
          <h3 className="text-white bg-cyan-600 text-left ps-8 text-3xl pt-2 w-full">
            Profile
          </h3>
        </div>
        <p className="lg:ms-10 px-8 md:ms-10 pt-5 text-2xl text-justify text-gray-500">
          I’m passionate about learning new technologies and understand that
          there are multiple approaches to problem-solving. I consider myself a
          fast learner and can quickly adapt to new tech stacks as required. I’m
          also familiar with typescript and object-oriented programming ideas.
        </p>
        <div className="md:w-[70%] mx-auto flex mt-10 shadow-lg shadow-gray-400">
          <div className="w-[20%] bg-cyan-900 h-14 "></div>
          <h3 className="text-white bg-cyan-600 text-left ps-8 text-3xl pt-2 w-full">
            Project
          </h3>
        </div>
        <p className="mt-5 px-8 lg:ms-10 md:ms-10 text-2xl text-blue-600 font-semibold ">
          Portfolio Website Wordpress
        </p>
        <a
          href="https://github.com/officialrabinpandey/pashubikasfarm/"
          className="underline md:ms-10 px-8 lg:ms-10 text-2xl text-gray-600"
        >
          UmadeviPashunikash Farm
        </a>
        <p className=" px-8 lg:ms-10 md:ms-10 mt-5 text-2xl text-blue-600 font-semibold ">
          Personal Finance Tracking system
        </p>
        <p className=" px-8 lg:ms-10 md:ms-10 text-2xl text-gray-600 text-justify">
          Tracking the personal finances, day to day activities of the personal
          expenses and making saving accordingly.
        </p>
        <a
          href="https://github.com/officialrabinpandey/Frontendtracker"
          className="underline md:ms-10  px-8 lg:ms-10 text-2xl text-gray-600"
        >
          GitHub Link to Personal Finance Assistant
        </a>
      </div>
    </div>
  );
};

export default Resume;
