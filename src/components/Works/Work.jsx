import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "EazyShoppy - eCommerce webapp",
    tags: ["API", "eCommerce", "Dev"],
    projectLink: "https://github.com/Sambarr3/EazyShoppy-eCommerce-webapp.git",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "BookYourFlight - Ticket Manager ",
    tags: ["API", "Thymeleaf"],
    projectLink:
      "https://github.com/Sambarr3/BookYourFlight-staff-managing-webapp.git",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "Library Books Managing System",
    tags: ["Java", "Swing UI"],
    projectLink: "https://github.com/Sambarr3/Library-Management-System.git",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "iTask - Todo List App",
    tags: ["Development", "TODO"],
    projectLink: "https://github.com/Sambarr3/iTask-Todo-List-App.git",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Netflix Clone",
    tags: ["Web-design", "TMDB API"],
    projectLink: "https://github.com/Sambarr3/Neftlix-Clone.git",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
