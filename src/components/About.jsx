import React, { useState } from "react";

export default function About() {
  const aboutArray = [
    "I'm an Information Technology student at SSN College of Engineering with strong skills in Python, web development, and machine learning. I have gained real-world experience by working on projects involving UI/UX design, frontend development, and practical AI applications. With hands-on exposure to modern technologies and frameworks, I enjoy building impactful solutions and continuously learning in the areas of software development and artificial intelligence.",
    "I'm an IT student at SSN College of Engineering, skilled in Python, web development, and machine learning. I've built real-world projects in UI/UX and AI. Passionate about creating impactful solutions and constantly learning modern technologies in software and AI fields.",
    "IT student at SSN with skills in Python, web dev, and ML. Experienced in UI/UX, frontend, and AI projects. Passionate about building solutions and learning new technologies.",
    "IT student with Python, web, ML skills. Built AI and frontend projects. Loves learning tech.",
    "Tech student into Python, ML, web.",
    "Learns, builds, and codes daily.",
    "See that circle near `About Me` Heading. Go Ahead and Press it",
    "Loves tech and problem-solving.",
    "You just pissed the shortening AI",
    "Ayo you win, I lost, stop shortening my bio",
    "I am nobody, is that what you want?",
    "I'm a loser from India. Are you happy now?",
    "A developer based in India and I won't shorten it more than this, you heard me right!",
    "A developer based in India"
  ];

  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [about, setAbout] = useState(aboutArray[0]);

  function updateAbout() {
    const nextIndex = index < aboutArray.length - 1 ? index + 1 : index;
    setAbout(aboutArray[nextIndex]);
    setIndex(nextIndex);
    setCount(prev => prev + 1);
  }

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="flex flex-row items-center mb-3">
        <div className="flex flex-col mr-[30px] items-center justify-center">
          <h1 className="anton-regular text-[45px] lg:text-[90px] mb-[-8px]">About Me</h1>
        </div>
        <div onClick={() =>{setIndex(0); setAbout(aboutArray[0]); setCount(0)}} className="flex items-center bg-[#fff000] rounded-[1000px] shadow-xl lg:h-[100px]">
          <img width="70" height="70" src="https://img.icons8.com/windows/96/galaxy.png" alt="galaxy"/>
        </div>
      </div>

      <div onClick={updateAbout} className="w-[80%] lg:w-[600px] inter-regular cursor-pointer text-justify min-h-[320px] lg:min-h-[200px]">
        {about}
      </div>

      <div className="flex flex-row justify-center items-center mt-[30px] lg:mt-[20px]">
        <button
          onClick={updateAbout}
          className="mr-4 bg-[#fff000] text-black font-bold px-4 py-2 rounded-xl border border-black shadow-[4px_4px_0_#000] hover:shadow-none transition-all duration-200 "
        >
          TL;DR
        </button>
        <h1 className="caveat-regular text-[25px]">&lt;--Made short {count} times</h1>
      </div>
    </div>
  );
}
