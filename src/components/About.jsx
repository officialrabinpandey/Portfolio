import React from "react";
// import rabin from "../assets/rabin.jpg";

const About = () => {
  return (
    <div className=" Flex h-screen bg-white">
      <div className="space-y-6 items-center justify-around py-10">
        <h2 className=" text-cyan-700 text-center  p-8 items-center font-bold text-5xl">
          {" "}
          Who I Am
        </h2>
        <p className="p-3 ml-11 mr-11 items-center text-center text-2xl font-normal ">
          My name is Rabin Pandey and I am from Nepal. I am currently pursuing a
          Bachelor of Science in Computer Science and Information Technology
          (BSc. CSIT) at Tribhuvan University. I am passionate about learning
          new technologies and understand that there are multiple approaches to
          problem-solving. I consider myself a fast learner and can quickly
          adapt to new tech stacks as required. As a developer, I believe that
          using the best tool for the job is more important than sticking to one
          particular language or technology.I have been learning web development
          since 2018 by watching various YouTube channels and reading
          documentation. To further improve my skills, I also attended several
          coding bootcamps. I find it enjoyable and rewarding to collaborate
          with other people on projects, as it allows us to build something new
          together and learn from each other's experiences. Through these
          experiences, I have learned to appreciate the value of accurate advice
          and feedback. Thank you for considering my experience.
        </p>
      </div>
    </div>
  );
};

export default About;
