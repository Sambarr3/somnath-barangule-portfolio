import { ButtonOutline, ButtonPrimary } from "./Button";
import "./Hero.css";

import React from "react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                height={40}
                width={40}
                alt="sam portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label={"Download CV"}
              icon={"download"}
              href="/cv/somnath-cv.pdf"
              download="Somnath-Barangule-CV.pdf"
            />
            <ButtonOutline
              href={"#about"}
              label={"Scroll Down"}
              icon={"arrow_downward"}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-teal-300
          via-25% via-teal-300/40 to-70% rounded-[60px] overflow-hidden"
          >
            <img
              src="/images/hero-banner.png"
              alt="Somnath Barangule"
              height={800}
              width={656}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
