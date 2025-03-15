import React from "react";
import Qualification from "./Qualification";

const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of Coding",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I'm Somnath, a full-stack developer specializing in both
            front-end and back-end technologies. I create robust and visually
            stunning web applications. I leverage Spring Boot and Java for
            building powerful backend systems, while implementing responsive and
            elegant user interfaces with JavaScript and TailwindCSS. I transform
            your vision into comprehensive digital solutions that not only look
            impressive but also deliver exceptional performance and scalability.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex item-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
      <Qualification />
    </section>
  );
};

export default About;
