import { useEffect, useState } from "react";
import './App.css';
import AnimatedWords from './components/AnimatedWords';
import About from './components/About';
import Footer from './components/Footer';
import Experience from "./components/Experience";
import Project from "./components/Project";
import Humour from "./components/Humour";

function App() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="px-3 inter-regular items-center justify-between flex flex-row bg-white rounded-[100px] border-[2px] border-black h-[70px] w-[400px] fixed left-1/2 z-20 transform -translate-x-1/2 bottom-4">
      <a href="#home">
      <div>Home</div>
      </a>
      <a href="#about">
      <div>About</div>
      </a>
      <a href="#experience">
      <div>Experience</div>
      </a>
      <a href="#projects">
      <div>Projects</div>
      </a>
      <a href="#contact">
      <div>Contact</div>
      </a>
    </div>
    <div className="bg-green-300 min-h-screen m-0 p-6">
      <div id="home" className='bg-white rounded-md border-2 border-black shadow-xl'>
 <div
      className={`flex flex-row justify-end bg-[#1CA3F7] p-[200px] mb-[50px] transition-all duration-500
      ${isTop ? 'rounded-[300px] m-[20px]' : 'rounded-none'}`}
    >          <div className='flex flex-col pr-[50px]'>
          <h1 className='anton-regular text-[30px] text-white'>HI I AM</h1>
          <h1 className='anton-big text-[70px] text-white'>RAHUL JOSHVA M</h1>
          <div className='flex flex-row anton-regular text-[30px] text-white'>
            <h1 className='mr-2'>I AM A/AN</h1>
            <AnimatedWords/>
          </div>
          </div>
        </div>
        <div id="about" className='flex justify-center mb-4'>
        <About/>
        </div>
        <div id="experience">
          <Experience/>
        </div>
        <div>
          <Humour/>
        </div>
        <div id="projects" className="">
          <Project/>
        </div>
        <div id="contact">
        <Footer/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
