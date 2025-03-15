/**
 * @copyright 2025 Somnath Barangule
 * @license Apache-2.0
 */

import React from "react";

import { ReactLenis } from "lenis/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// GSAP Plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skill/Skills";
import Work from "./components/Works/Work";
import Review from "./components/Reviews/Review";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    // console.log(elements);

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          start: "-200 bottom",
          end: "bottom 80%",
          trigger: element,
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
