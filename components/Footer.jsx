"use client";

import Image from "next/image";
import { Instagram, Linkedin, Facebook, X } from "lucide-react";

export default function Footer({ themeOn }) {
  const XIcon = () => (
    <svg className="w-5 h-5 mt-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
  
  
  return (
    <footer
      className={`relative overflow-hidden pt-10 pb-6 transition-all ${
        themeOn ? "bg-white text-black" : "bg-[#fff7c7] text-black"
      }`}
    >
      {/* DECORATIVE IMAGES ONLY WHEN NOT TOGGLED */}
      {!themeOn && (
        <>
          {/* LEFT BG IMAGE */}
          <div className="hidden md:block absolute left-0 bottom-0 opacity-60 w-48">
            <Image
              src="/assets/bg-left.svg"
              alt="Background Left"
              width={192}
              height={192}
            />
          </div>

          {/* RIGHT BG IMAGE */}
          <div className="hidden md:block absolute right-0 bottom-0 opacity-60 w-48">
            <Image
              src="/assets/bg-right.svg"
              alt="Background Right"
              width={192}
              height={100}
            />
          </div>

          {/* MIDDLE IMAGE */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-70 w-56 md:w-72">
            <Image
              src="/assets/middle.svg"
              alt="Center Graphic"
              width={288}
              height={288}
            />
          </div>
        </>
      )}

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* SOCIAL LINKS */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <ul className="space-y-3 text-[15px] font-medium">
            <li className="flex items-center gap-2">
              <Linkedin size={18} /> <span>LinkedIn</span>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={18} /> <span>Instagram</span>
            </li>
            <li className="flex items-center gap-2">
              <XIcon size={18} /> <span>Twitter (X)</span>
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={18} /> <span>Facebook</span>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[15px] font-medium">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Services</li>
            <li className="cursor-pointer hover:underline">Contact Us</li>
            <li className="cursor-pointer hover:underline">Team</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
          <ul className="space-y-2 text-[15px] font-medium leading-relaxed">
            <li>Contact@technologi.in</li>
            <li>Door No. 16-6-388/45(1), 2nd Floor,</li>
            <li>Millennium Towers, Opp. Highland</li>
            <li>Hospital, Mangalore-575002</li>
          </ul>
        </div>

        {/* LOGO */}
        <div className="flex flex-col md:items-end items-start">
          <Image
            src="/logo.png"
            alt="Technologi Logo"
            width={192}
            height={96}
            className="object-contain"
          />
          <span className="text-sm mt-2 font-medium">
            International Private Limited
          </span>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-black/20 mt-12 pt-4 text-center text-sm font-medium opacity-80">
        © 2025 Technologi. All Rights Reserved.
      </div>
    </footer>
  );
}
