import React, { useState, useEffect } from "react";
import Word from "./Word";
import { ChevronLeft, ChevronRight, MoveRight ,MenuIcon, X } from 'lucide-react'

const Navbar = () => {
  const sections = ["Home","Works","About", "Service", "Testomonial"];
  const [selectedOption, setSelectedOption] = useState("intro");

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
    <div className="w-full z-[100] container mx-auto flex items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 py-[20px] ">
      <a href="">
        <span className="font-semibold text-3xl font-serif italic">
          Mustafa.
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
                <Word>
                {section}
                </Word>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button className="px-6  hidden md:flex group shadow-sm  transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer  bg-black text-background  items-center justify-around gap-3 rounded-full  py-3 ">
        Contact
        {/* <MoveRight className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" /> */}
      </button>
    </div>
  );
};

export default Navbar;
