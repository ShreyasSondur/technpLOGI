"use client";
import { useState } from "react";

export default function Hero() {
  const [themeOn, setThemeOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#fff25d] shadow-md font-['Roboto_Condensed']">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 relative">
        
        {/* LEFT - LOGO */}
        <div className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* CENTER NAV (Desktop) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 transform gap-16 text-lg tracking-widest md:flex">
          <a href="#home" className="hover:opacity-80">Home</a>
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </nav>

        {/* RIGHT TOGGLE (Desktop) */}
        <button
          onClick={() => setThemeOn(!themeOn)}
          className="hidden md:flex relative h-7 w-16 items-center rounded-full border border-yellow-600 bg-[#8a8436] transition"
        >
          <span
            className={`h-5 w-5 rounded-full bg-[#fff25d] shadow-md transition-transform ${
              themeOn ? "translate-x-9" : "translate-x-1"
            }`}
          />
        </button>

        {/* HAMBURGER (Mobile) */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-0.5 w-7 bg-black"></span>
          <span className="h-0.5 w-7 bg-black"></span>
          <span className="h-0.5 w-7 bg-black"></span>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 animate-fadeIn">
          <nav className="flex flex-col gap-3 text-lg tracking-widest">
            <a 
              href="#home" 
              className="py-1"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="py-1"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="py-1"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setThemeOn(!themeOn)}
            className="mt-3 relative h-7 w-16 items-center rounded-full border border-yellow-600 bg-[#8a8436] transition"
          >
            <span
              className={`h-5 w-5 rounded-full bg-[#fff25d] shadow-md transition-transform ${
                themeOn ? "translate-x-9" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      )}
    </header>
    //Navbar ends here boi 
  );
}
