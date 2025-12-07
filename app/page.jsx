// app/page.jsx
"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function HomePage() {
  const [themeOn, setThemeOn] = useState(false);

  return (
    <>
      <Hero themeOn={themeOn} setThemeOn={setThemeOn} />
      <Services themeOn={themeOn} />
      <ContactForm themeOn={themeOn} />
      <Team themeOn={themeOn} />
      <Footer themeOn={themeOn} />
    </>
  );
}
