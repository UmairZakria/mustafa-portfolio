import React, { useState, useEffect } from "react";
import Word from "./Word";
import { motion,  } from "framer-motion";



import {
  ChevronLeft,
  ChevronRight,
  MoveRight,
  MenuIcon,
  X,
} from "lucide-react";

const Navbar = () => {
  
  const sections = ["Home", "Works", "About", "Service"];
  const [selectedOption, setSelectedOption] = useState("intro");
  const contact = document.getElementById('contact');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSelectedOption(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="w-full md:px-0 px-4  z-[1000]  container mx-auto flex items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 py-[20px] ">
      <a href="">
        <span className="font-semibold text-3xl font-Poppins">
        Marcus.
        </span>
      </a>
      <div>
        <ul className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:flex  items-center  gap-1     ">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => handleNavClick(section)}
              className={`font-Mona font-semibold py-[6px]  hover:shadow-lg px-4 rounded-full cursor-pointer   text-black transition-all duration-300 ease-in-out ${
                selectedOption === section ? " text-black bg-prime" : ""
              }`}
            >
              <span className="text-xs">
                {/* <Word> */}
                  {section}
                  {/* </Word> */}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className=" md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full text-white bg-black "
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{zIndex:10000}}
            className="absolute top-full right-0 mt-2 w-48 !z-[10000] bg-black  rounded-lg backdrop-blur-lg py-2"
          >
            {sections.map((section) => (
              <div
                key={section}
                onClick={() => handleNavClick(section)}
                className={`px-4 py-3 text-sm cursor-pointer text-white hover:bg-white hover:text-black transition-all ${
                  selectedOption === section ? "bg-white !text-black" : ""
                }`}
              >
                {/* <Word> */}
                  
                  {section}
                  
                  {/* </Word> */}
              </div>
            ))}
          </motion.div>
        )}
      </div>
      <button onClick={()=>{contact.scrollIntoView({ behavior: "smooth" })}} className="px-6  hidden md:flex group shadow-sm  transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer  bg-black text-background  items-center justify-around gap-3 rounded-full  py-3 ">
        Contact
        {/* <MoveRight className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" /> */}
      </button>
    </div>
  );
};

export default Navbar;
