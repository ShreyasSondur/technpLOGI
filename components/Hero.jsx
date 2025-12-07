"use client";
import { useState } from "react";

export default function Hero() {
  const [themeOn, setThemeOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-[#fff25d] shadow-md font-['Roboto_Condensed']">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 relative">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
          </div>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 transform gap-16 text-lg tracking-widest md:flex">
            <a href="#home" className="hover:opacity-80">Home</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>

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

          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-0.5 w-7 bg-black"></span>
            <span className="h-0.5 w-7 bg-black"></span>
            <span className="h-0.5 w-7 bg-black"></span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-[#fff25d] px-6 pb-4 animate-fadeIn z-20 shadow-md">
            <nav className="flex flex-col gap-3 text-lg tracking-widest">
              <a href="#home" className="py-1" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#services" className="py-1" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#contact" className="py-1" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fdf897] to-[#fde8ac] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full opacity-100" 
            style={{ 
              backgroundImage: "url('/assets/tiles.png')", 
              backgroundRepeat: "repeat",
              backgroundSize: "auto"
            }} 
          />
        </div>

        {/* Scenic Elements */}
        <div className="absolute bottom-0 left-0 z-0">
          <img src="/assets/build.png" alt="" className="w-32 sm:w-48 md:w-64 lg:w-180 h-auto object-contain" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 top-50">
          <img src="/assets/trees.png" alt="" className="w-40 sm:w-56 md:w-72 lg:w-250 h-auto object-contain" />
        </div>
        <div className="absolute bottom-0 right-24 sm:right-0 md:right-0 lg:right-0 z-0 top-60">
          <img src="/assets/clocktower.png" alt="" className="w-20 sm:w-28 md:w-36 lg:w-100 h-auto object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 z-0 top-120">
          <img src="/assets/boat.png" alt="" className="w-32 sm:w-48 md:w-64 lg:w-150 h-auto object-contain" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-4 font-helvetica">TechnoLOGI</h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-black font-medium">
            International Private Limited
          </p>
        </div>
      </section>
    </>
  );
}
