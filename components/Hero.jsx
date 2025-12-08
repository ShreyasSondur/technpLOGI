"use client";

import { useState, useEffect } from "react";

export default function Hero({ themeOn, setThemeOn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [weather, setWeather] = useState({
    temp: null,
    icon: null,
    description: "",
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch("/api/weather", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch weather");
        const data = await res.json();
        setWeather({
          temp: Math.round(data.temp),
          icon: data.icon,
          description: data.description,
          loading: false,
          error: null,
        });
      } catch (err) {
        setWeather((prev) => ({
          ...prev,
          loading: false,
          error: "Unable to load weather",
        }));
      }
    }
    fetchWeather();
  }, []);

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

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setThemeOn(!themeOn)}
              className="relative h-6 w-12 flex items-center rounded-full border border-yellow-600 bg-[#8a8436] transition"
            >
              <span
                className={`h-4 w-4 rounded-full bg-[#fff25d] shadow-md transition-transform ${
                  themeOn ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>

            <button
              className="flex flex-col gap-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="h-0.5 w-7 bg-black"></span>
              <span className="h-0.5 w-7 bg-black"></span>
              <span className="h-0.5 w-7 bg-black"></span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-[#fff25d] px-6 pb-4 animate-fadeIn z-20 shadow-md">
            <nav className="flex flex-col gap-3 text-lg tracking-widest">
              <a href="#home" className="py-1 text-black " onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#services" className="py-1 text-black" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#contact" className="py-1 text-black" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      <section
        id="home"
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
          themeOn
            ? "bg-black"
            : "bg-gradient-to-b from-[#fdf897] to-[#fde8ac]"
        }`}
      >
        <div className="absolute top-24 left-6 z-[20] flex flex-col items-center">
          <div className="flex flex-col items-center bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-black/10 min-w-[80px]">
            {weather.loading && (
              <p className="text-xs font-medium text-gray-700">Loading...</p>
            )}

            {!weather.loading && weather.error && (
              <p className="text-xs font-medium text-red-600">N/A</p>
            )}

            {!weather.loading && !weather.error && (
              <>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt="Weather"
                  className="w-10 h-10 object-contain -mb-1"
                />

                <p className="text-lg font-semibold text-gray-900">
                  {weather.temp}°C
                </p>

                <p className="text-[11px] uppercase tracking-wide text-gray-600">
                  {weather.description}
                </p>
              </>
            )}
          </div>
        </div>

        {themeOn && (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/45 z-0" />
          </>
        )}

        {!themeOn && (
          <>
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full opacity-100"
                style={{
                  backgroundImage: "url('/assets/tiles.png')",
                  backgroundRepeat: "repeat",
                  backgroundSize: "auto",
                }}
              />
            </div>

            <div className="absolute bottom-0 left-0 z-0">
              <img
                src="/assets/build.png"
                className="w-32 sm:w-48 md:w-64 lg:w-180 object-contain"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
              <img
                src="/assets/trees.png"
                className="w-40 sm:w-56 md:w-72 lg:w-250 object-contain"
              />
            </div>

            <div className="absolute bottom-0 right-24 sm:right-0 md:right-0 lg:right-0 z-0">
              <img
                src="/assets/clocktower.png"
                className="w-20 sm:w-28 md:w-36 lg:w-100 object-contain"
              />
            </div>

            <div className="absolute bottom-0 right-0 z-0">
              <img
                src="/assets/boat.png"
                className="w-32 sm:w-48 md:w-64 lg:w-150 object-contain"
              />
            </div>
          </>
        )}

        <div className="relative z-10 text-center px-4">
          <h1
            className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-4 font-helvetica transition-colors ${
              themeOn ? "text-white" : "text-black"
            }`}
          >
            TechnoLOGI
          </h1>
          <p
            className={`text-2xl md:text-3xl lg:text-4xl font-medium transition-colors ${
              themeOn ? "text-white" : "text-black"
            }`}
          >
            International Private Limited
          </p>
        </div>
      </section>
    </>
  );
}
