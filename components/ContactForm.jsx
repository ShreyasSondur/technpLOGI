"use client";

import { useState } from "react";

export default function ContactForm({ themeOn }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className={`relative w-full py-40 flex items-center justify-center overflow-hidden ${
        themeOn
          ? "bg-black"
          : "bg-gradient-to-b from-[#ffc3e9] to-[#ffdbd6]"
      }`}
    >
      {/* Video background when toggled */}
      {themeOn && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          >
            <source src="/videos/contact-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 z-0" />
        </>
      )}

      {/* Decorations when not toggled */}
      {!themeOn && (
        <>
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <img src="/assets/Vector8.svg" className="w-full h-auto block" />
          </div>
          <div className="absolute left-0 bottom-20 z-0">
            <img
              src="/assets/kambala.png"
              className="w-48 md:w-64 lg:w-96 h-auto opacity-80 object-contain mix-blend-multiply"
            />
          </div>
          <div className="absolute right-0 bottom-20 z-0">
            <img
              src="/assets/bowl.png"
              className="w-32 md:w-48 lg:w-72 h-auto opacity-80 object-contain mix-blend-multiply"
            />
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg px-6">
        <h2
          className={`mb-10 text-center text-4xl font-semibold tracking-[0.18em] pb-5 ${
            themeOn ? "text-white" : "text-[#3d2a28]"
          }`}
        >
          Contact Us
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* INPUTS — always black text & black placeholder */}
          <input
            name="name"
            placeholder="Name"
            required
            className={`w-full rounded-lg px-5 py-3 text-base 
              bg-white/90 border
              ${themeOn ? "border-white/60" : "border-black"}
              text-black placeholder:text-gray-700
            `}
          />

          <input
            name="email"
            type="email"
            placeholder="Mail"
            required
            className={`w-full rounded-lg px-5 py-3 text-base 
              bg-white/90 border
              ${themeOn ? "border-white/60" : "border-black"}
              text-black placeholder:text-gray-700
            `}
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            required
            className={`w-full rounded-lg px-5 py-3 text-base 
              bg-white/90 border
              ${themeOn ? "border-white/60" : "border-black"}
              text-black placeholder:text-gray-700
            `}
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className={`w-full rounded-lg px-5 py-3 text-base min-h-[150px] resize-none 
              bg-white/90 border
              ${themeOn ? "border-white/60" : "border-black"}
              text-black placeholder:text-gray-700
            `}
          />

          {/* SUBMIT BUTTON — always bold + pointer cursor */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full rounded-xl bg-[#3d2a28] py-3.5 text-lg 
              font-bold text-white shadow-md 
              transition hover:bg-[#4c3431] 
              disabled:opacity-70 
              cursor-pointer
            "
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="mt-4 text-center text-sm text-green-400">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
