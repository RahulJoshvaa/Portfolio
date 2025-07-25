import { useState, useEffect } from "react";

const words = ["WEB DEVELOPER", "PYTHON PROGRAMMER", "TECH ENTHUSIAST", "UI/UX DESIGNER", "AI ENGINEER"];

export default function AnimatedWords() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(1);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setInterval(() => {
      if (letterIndex < currentWord.length) {
        setLetterIndex((prev) => prev + 1);
      } else {
        // Wait a bit before switching to the next word
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setLetterIndex(1); // restart letter animation
        }, 1000);
        clearInterval(timer); // stop current interval
      }
    }, 200); // speed of typing effect

    return () => clearInterval(timer);
  }, [letterIndex, wordIndex]);

  return (
    <div className="">
      <h1 className="">
        {words[wordIndex].slice(0, letterIndex)}
      </h1>
    </div>
  );
}
