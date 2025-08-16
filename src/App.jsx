import React from "react";
import Navbar from "./components/Navbar";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Vision from "./components/Vision";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <SmoothScrollProvider />
      <div id="Home" className="bg-[#fcea77] overflow-hidden">
        <Navbar />
        {/* Hero Section ? */}
        <div
          style={{
            background: `
      radial-gradient(circle at 50% 50%, rgba(255, 230, 179, 1) 20%, transparent 90%),
      radial-gradient(circle at 0% 100%, rgba(255, 255, 237, 1) 10%, transparent 30%),
      radial-gradient(circle at 100% 100%, rgba(255, 255, 237, 1) 10%, transparent 30%)

    `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="relative    w-full h-screen"
        >
          <div className="absolute w-full h-[200px] md:h-[60px] bg-gradient-to-t    !z-[100] from-[#FFFFED] via-[#FFFFED]/60  to-[#ffffed00] bottom-0   left-0"></div>

          <div
            className="absolute  inset-0  top-[-120%] "
            style={{
              background: `
            radial-gradient(circle at 50% 0%, rgba(255, 255, 237, 1) 60%, transparent 85%) 
          `,
              // Ensure the background covers the entire div
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* ^^^^^backgrounds^^^^^^ */}
          {/* now content */}

            <div className="absolute w-full h-full  flex items-end justify-center">
              <img src="/mustafa.png" alt="" className="w-[700px] h-[650px] md:h-[750px]  xl:h-[900px] absolute bottom-[-30%] brightness-115 object-cover " />
            </div>
          {/* mid content */}

          <div className="absolute bottom-1/2 -translate-y-1/2 px-2 md:px-0 md:translate-0 left-0 w-full z-[100]">
            <div className="container mx-auto flex md:flex-nowrap flex-wrap md:gap-0 gap-5 items-center md:justify-between">
              <div className=" bg-white p-2 px-4 font-Mona  flex items-center gap-3 rounded-full w-fit">
                {/* <div className="w-[10px] h-[10px] bg-red-500 rounded-full"></div> */}
                <div className="w-[10px] h-[10px] bg-red-500 mb-[1px] rounded-full shadow-[0_0_10px_1px_red]"></div>
                <span>Available for new opportunities</span>
              </div>
              <div>
                <p className="w-[250px] text-lg font-Mona font-medium ">
                  Specialized in Web Design, UI / UX, Webflow, and frontend
                  Development
                </p>
              </div>
            </div>
          </div>
          {/* bottom Content */}
          <div className=" absolute bottom-5 md:bottom-0 left-0 w-full z-[100]">
            <div className="container mx-auto flex items-center justify-between">
              <div>
                <h1 className="font-Poppins  font-semibold text-[20vw] leading-[18vw] md:text-[10vw] md:leading-[8vw] lg:text-8xl  xl:leading-[110px] uppercase tracking-tighter  xl:text-[120px]">
                  I am <br />
                  Marcus
                </h1>
              </div>
              <div className="uppercase hidden md:flex flex-col text-4xl lg:text-5xl tracking-tight font-Mona font-bold">
                <span>Digital</span>
                <span>product</span>
                <span>Designer</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-background h-screen w-full"></div> */}
      </div>
        <Projects />
        <Service/>
        <Vision/>
        <Skills/>
        <Contact/>
        {/* <Footer/> */}
        {/* <div className="bg-background h-screen w-full"></div> */}

    </>
  );
};

export default App;
