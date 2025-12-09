"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Abir",
    college: "Srinivas College",
    branch: "AIML BRANCH",
    image: "/team/abir.png",
  },
  {
    name: "Lishmith",
    college: "Srinivas College",
    branch: "CSE BRANCH",
    image: "/team/lishmith.png",
  },
  {
    name: "Shreya",
    college: "Srinivas College",
    branch: "AIML BRANCH",
    image: "/team/shreya.png",
  },
  {
    name: "Shimaz",
    college: "Srinivas College",
    branch: "CSCB BRANCH",
    image: "/team/shimaz.png",
  },
  {
    name: "Shreyas",
    college: "Srinivas College",
    branch: "CSE BRANCH",
    image: "/team/shreyas.png",
  },
];

function MemberCard({ member }) {
  return (
    <div className="bg-white/90 rounded-2xl p-4 pb-6 w-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">

      {/* Smaller Image */}
      <div className="relative w-full aspect-[3/4] bg-gray-200 mb-3 overflow-hidden rounded-xl">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />
      </div>

      {/* Bigger Text */}
      <div className="text-center mt-auto">
        <h3 className="text-xl font-extrabold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-gray-700 font-semibold leading-tight">
          {member.college}
        </p>
        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mt-1">
          {member.branch}
        </p>
      </div>
    </div>
  );
}

export default function Team({ themeOn }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const maxIndex = teamMembers.length - 1;

  const goTo = useCallback(
    (idx) => {
      if (idx < 0) idx = 0;
      if (idx > maxIndex) idx = maxIndex;
      setActiveIndex(idx);
    },
    [maxIndex]
  );

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff < 0) next();
      else prev();
    }
    setTouchStartX(null);
  };

  const dotBaseClasses = "h-2 w-2 rounded-full transition-all duration-300";
  const activeDotClasses = themeOn ? "w-4 bg-white" : "w-4 bg-[#1F2937]";
  const inactiveDotClasses = themeOn
    ? "bg-white/40"
    : "bg-[#1F2937]/30";

  return (
    <section
      className={`relative py-16 sm:py-24 lg:py-40 px-4 md:px-8 border-t border-black/10 overflow-hidden ${
        themeOn ? "bg-black" : "bg-gradient-to-b from-[#ffdfd7] to-[#fff7c7]"
      }`}
    >
      {/* VIDEO BACKGROUND */}
      {themeOn && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          >
            <source src="/videos/team-bg.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          >
            <source src="/videos/clocktower-phone.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40 z-0" />
        </>
      )}

      {!themeOn && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <img
            src="/assets/Vector9.svg"
            alt=""
            className="w-full h-auto block"
          />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest ${
              themeOn ? "text-white" : "text-[#1F2937]"
            }`}
          >
            Meet Our Interns
          </h2>
          <p
            className={`mt-2 text-xs sm:text-sm ${
              themeOn ? "text-white/70" : "text-gray-700/80"
            }`}
          >
            Swipe, use arrows, or tap the dots to explore the team.
          </p>
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="sm:hidden -mx-2">
          <div className="relative px-6">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <MemberCard member={member} />
                </div>
              ))}
            </div>

            {teamMembers.length > 1 && (
              <>
                {/* LEFT ARROW */}
                <button
                  type="button"
                  onClick={prev}
                  disabled={activeIndex === 0}
                  className={`absolute top-1/2 -translate-y-1/2 left-3 flex items-center justify-center 
                    h-9 w-9 rounded-full backdrop-blur-md shadow-lg transition-all duration-300
                    ${
                      themeOn
                        ? "bg-white/10 border border-white/20 text-white"
                        : "bg-black/10 border border-black/20 text-gray-800"
                    }
                    ${
                      activeIndex === 0
                        ? "opacity-20 cursor-default"
                        : "opacity-100 active:scale-90"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* RIGHT ARROW */}
                <button
                  type="button"
                  onClick={next}
                  disabled={activeIndex === maxIndex}
                  className={`absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center 
                    h-9 w-9 rounded-full backdrop-blur-md shadow-lg transition-all duration-300
                    ${
                      themeOn
                        ? "bg-white/10 border border-white/20 text-white"
                        : "bg-black/10 border border-black/20 text-gray-800"
                    }
                    ${
                      activeIndex === maxIndex
                        ? "opacity-20 cursor-default"
                        : "opacity-100 active:scale-90"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* DOTS */}
          <div className="mt-5 flex justify-center items-center gap-2">
            {teamMembers.map((_, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={`${dotBaseClasses} ${
                    isActive ? activeDotClasses : inactiveDotClasses
                  }`}
                >
                  <span className="sr-only">Go to slide {idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center mt-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full max-w-[260px]">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
