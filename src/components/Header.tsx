"use client";

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Typewriter } from "react-simple-typewriter";
import { X, Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex py-[30px] px-4 items-center justify-between">
        <h1 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
          <Typewriter
            words={["Marwan Usama", "Buguard Task"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <div className="hidden sm:block">
          <ThemeToggle />
        </div>

        <button
          className="block sm:hidden text-black dark:text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center gap-6 text-lg transition-all duration-300 ">
          <h2 className="text-xl font-bold">Marwan Usama</h2>

          <nav className="flex flex-col gap-4 items-center text-white">
            <a href="#">Blog</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Newsletter</a>
          </nav>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute bottom-6"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
