"use client";

import { useState } from "react";

export default function ContactForm() {
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
      className="py-20 flex items-center justify-center"
    >
      <div className="w-full max-w-lg px-6">
        {/* Title */}
        <h2 className="mb-10 text-center text-4xl font-semibold tracking-[0.35em] text-[#3d2a28]">
          Contact Us
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            required
            className="w-full rounded-lg border border-black px-5 py-3 text-base text-gray-800 placeholder:text-gray-500 bg-white/95"
          />

          <input
            name="email"
            type="email"
            placeholder="Mail"
            required
            className="w-full rounded-lg border border-black px-5 py-3 text-base text-gray-800 placeholder:text-gray-500 bg-white/95"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            required
            className="w-full rounded-lg border border-black px-5 py-3 text-base text-gray-800 placeholder:text-gray-500 bg-white/95"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full rounded-lg border border-black px-5 py-3 text-base text-gray-800 placeholder:text-gray-500 bg-white/95 min-h-[150px] resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#3d2a28] py-3.5 text-lg font-medium text-white shadow-md transition disabled:opacity-70 hover:bg-[#4c3431]"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-center text-sm text-green-600">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-center text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
