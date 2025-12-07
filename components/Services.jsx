'use client';

import React from 'react';
import { Code, TrendingUp, Megaphone, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      iconBg: "rgba(255, 229, 160, 0.7)",
      iconColor: "#4A5568",
      title: "Web Development",
      description: "Modern, responsive websites built with cutting edge technologies. We create scalable applications that deliver exceptional user experiences across all devices."
    },
    {
      id: 2,
      icon: TrendingUp,
      iconBg: "rgba(255, 212, 229, 0.7)",
      iconColor: "#4A5568",
      title: "SEO Optimization",
      description: "Boost your search rankings with strategic optimization techniques. Our data driven approach improves visibility and increases organic traffic to your website."
    },
    {
      id: 3,
      icon: Megaphone,
      iconBg: "rgba(196, 229, 255, 0.7)",
      iconColor: "#4A5568",
      title: "Digital Marketing",
      description: "Comprehensive campaigns that drive engagement and conversions. From social media to content marketing, we help you reach your target audience effectively."
    },
    {
      id: 4,
      icon: Database,
      iconBg: "rgba(212, 244, 221, 0.7)",
      iconColor: "#4A5568",
      title: "Data Analysis",
      description: "Transform raw data into actionable business intelligence insights. We leverage advanced analytics to help you make informed decisions and optimize operations."
    }
  ];

  return (
    <>


      <section id="services" className="w-full min-h-[573px] flex items-center justify-center bg-gradient-to-b from-[#FFF4E0] via-[#FFE4F0] to-[#FFC0E0]">
        <div className="w-full max-w-[1280px] h-[573px] mx-auto py-[60px] flex flex-col justify-center">
          <div className="text-center mb-[45px]">
            <h2 className="text-[38px] font-bold text-[#1F2937] m-0 tracking-tight font-sans">Services We Offer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mx-auto">
            {services.map((service) => {
              const IconComponent = service.icon;
              // Custom border-radius for each icon wrapper
              const shapes = [
                'rounded-[45%_55%_52%_48%_/_48%_45%_55%_52%]',
                'rounded-[52%_48%_45%_55%_/_55%_52%_48%_45%]',
                'rounded-[48%_52%_55%_45%_/_45%_55%_52%_48%]',
                'rounded-[55%_45%_48%_52%_/_52%_48%_45%_55%]'
              ];
              return (
                <div key={service.id} className="bg-white/80 backdrop-blur-lg rounded-[24px] p-9 flex flex-col items-center text-center shadow-md transition-all duration-300 min-h-[305px] border border-white/30 hover:-translate-y-1 hover:shadow-xl hover:bg-white/90">
                  <div
                    className={`w-[76px] h-[76px] flex items-center justify-center mb-6 flex-shrink-0 transition-transform duration-300 shadow-sm ${shapes[service.id-1]} group-hover:scale-105`}
                    style={{ backgroundColor: service.iconBg }}
                  >
                    <IconComponent size={36} strokeWidth={2.5} style={{ color: service.iconColor }} />
                  </div>
                  <h3 className="text-[19px] font-semibold text-[#0F172A] mb-[14px] leading-snug font-sans">{service.title}</h3>
                  <p className="text-[13.5px] text-[#64748B] leading-7 font-normal text-center font-sans">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;