"use client";

import React from "react";
import { Code, TrendingUp, Megaphone, Database } from "lucide-react";

const Services = ({ themeOn }) => {
  const services = [
    {
      id: 1,
      icon: Code,
      iconBg: "#FFE5A0",
      iconColor: "#1F2937",
      title: "Web Development",
      description:
        "Modern, responsive websites built with cutting-edge technologies. We create scalable applications that deliver exceptional user experiences across all devices.",
    },
    {
      id: 2,
      icon: TrendingUp,
      iconBg: "#FFD4E5",
      iconColor: "#1F2937",
      title: "SEO Optimization",
      description:
        "Boost your search rankings with strategic optimization techniques. Our data-driven approach improves visibility and increases organic traffic to your website.",
    },
    {
      id: 3,
      icon: Megaphone,
      iconBg: "#C4E5FF",
      iconColor: "#1F2937",
      title: "Digital Marketing",
      description:
        "Comprehensive campaigns that drive engagement and conversions. From social media to content marketing, we help you reach your target audience effectively.",
    },
    {
      id: 4,
      icon: Database,
      iconBg: "#D4F4DD",
      iconColor: "#1F2937",
      title: "Data Analysis",
      description:
        "Transform raw data into actionable business intelligence insights. We leverage advanced analytics to help you make informed decisions and optimize operations.",
    },
  ];

  return (
    <section
      id="services"
      className={`relative w-full py-16 px-4 sm:px-6 md:px-8 flex items-center justify-center min-h-[800px] overflow-hidden ${
        themeOn
          ? "bg-black"
          : "bg-gradient-to-b from-[#fee2b7] to-[#ffc2e9]"
      }`}
    >
      {/* VIDEO BG WHEN TOGGLED */}
      {themeOn && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          >
            <source src="/videos/services-bg.mp4" type="video/mp4" />
          </video>
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-0" />
        </>
      )}

      {/* DECORATIONS WHEN NOT TOGGLED */}
      {!themeOn && (
        <>
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <img
              src="/assets/Vector7.svg"
              alt=""
              className="w-full h-auto block"
            />
          </div>
          <div className="absolute top-10 right-0 z-0">
            <img
              src="/assets/kite.png"
              alt=""
              className="w-24 sm:w-32 md:w-48 lg:w-230 h-auto mt-10 object-contain opacity-90 mix-blend-multiply"
            />
          </div>
        </>
      )}

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col justify-center">
        {/* TITLE */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold m-0 tracking-widest ${
              themeOn ? "text-white" : "text-[#3d2a28]"
            }`}
          >
            Services We Offer
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 w-full">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col items-center text-center rounded-[32px] bg-white/85 shadow-[0_18px_45px_rgba(15,23,42,0.16)] border border-white/70 px-6 py-8 sm:px-8 sm:py-10 min-h-[310px] max-w-sm w-full mx-auto transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(15,23,42,0.25)]"
              >
                {/* ICON CIRCLE */}
                <div
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center mb-6 shadow-sm"
                  style={{ backgroundColor: service.iconBg }}
                >
                  <IconComponent
                    size={32}
                    strokeWidth={2.5}
                    style={{ color: service.iconColor }}
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-3 leading-snug font-sans">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base text-[#4B5563] leading-6 font-normal font-sans">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
