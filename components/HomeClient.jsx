"use client";

import { useState } from "react";
import Hero from "./Hero";
import Services from "./Services";
import ContactForm from "./ContactForm";
import Team from "./Team";
import Footer from "./Footer";

export default function HomeClient() {
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
