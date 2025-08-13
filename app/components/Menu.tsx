'use client'

import { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div
      className={`relative cursor-pointer max-h-max z-[99] transition duration-500 ease-in-out ${menuOpen ? "stroke-black" : "stroke-white"
        }`}
      onClick={toggleMenu}
    >
      <svg
        width="40px"
        height="35px"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hamburger state */}
        <g
          className={`transition-all duration-500 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"
            }`}
        >
          {/* Top line (longer) */}
          <line
            x1="0"
            y1="17"
            x2="48"
            y2="17"
            strokeWidth="2"
            style={{
              transform: menuOpen ? "translateY(7px)" : "translateY(0px)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          {/* Bottom line (shorter) */}
          <line
            x1="15"
            y1="31"
            x2="45" 
            y2="31"
            strokeWidth="2"
            style={{
              transform: menuOpen ? "translateY(-7px)" : "translateY(0px)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
        </g>

        {/* Cross (X) state */}
        <g
          className={`transition-opacity duration-0 delay-200 ${menuOpen ? "opacity-100" : "opacity-0"
            }`}
        >
          <line
            x1="0"
            y1="24"
            x2="48"
            y2="24"
            strokeWidth="2"
            style={{
              transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
              transformOrigin: "center",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          <line
            x1="0"
            y1="24"
            x2="48"
            y2="24"
            strokeWidth="2"
            style={{
              transform: menuOpen ? "rotate(-45deg)" : "rotate(0deg)",
              transformOrigin: "center",
              transition: "transform 0.5s ease-in-out",
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Menu;
