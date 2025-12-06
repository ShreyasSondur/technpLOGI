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
    <section id="contact" className="py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            required
            className="w-full border rounded px-3 py-2"
          />

          <input
            name="email"
            type="email"
            placeholder="Mail"
            required
            className="w-full border rounded px-3 py-2"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            required
            className="w-full border rounded px-3 py-2"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full border rounded px-3 py-2 min-h-[120px]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 text-center">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-600 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
