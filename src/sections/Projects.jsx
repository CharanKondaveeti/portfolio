import { useEffect } from "react";
import "./css/Projects.css";

import { HiOutlineExternalLink } from "react-icons/hi";

import howtometro from "./../images/works/howtometro.jpg";
import memeplate from "./../images/works/memeplate.jpg";
import dicegame from "./../images/works/dicegame.jpg";
import solar from "./../images/works/solar.jpg";
import bombie from "./../images/works/bombie.jpg";
import restaurantbilling from "./../images/works/restaurantbilling.jpg";

const projects = [
  {
    title: "HowToMetro",
    description:
      "A comprehensive guide to navigating Hyderabad Metro. It offers detailed routes, stops, and travel information.",
    link: "https://howtometro.vercel.app/",
    techStack: ["React"],
    image: howtometro,
  },
  {
    title: "MemePlate",
    description:
      "A platform for memers to find, create, and share meme templates effortlessly, enhancing creative expression.",
    link: "https://memeplate.vercel.app/homepage",
    techStack: ["React", "Node.js", "Cloudinary"],
    image: memeplate,
  },
  {
    title: "Bombie",
    description:
      "A fun guessing game where players pick between a banana for progress or a bomb to lose.",
    link: "https://bombie.vercel.app/",
    techStack: ["JavaScript", "HTML", "CSS"],
    image: bombie,
  },
  {
    title: "Solar CSS",
    description:
      "A CSS animation project showcasing space-themed visuals while testing front-end design and animation skills.",
    link: "https://space-revolution.vercel.app/",
    techStack: ["CSS"],
    image: solar,
  },
  {
    title: "Dice Game",
    description:
      "A simple dice game where players roll dice aiming for high scores, featuring smooth UI interactions.",
    link: "https://rollingdice.vercel.app/",
    techStack: ["JavaScript", "HTML", "CSS"],
    image: dicegame,
  },
  {
    title: "Restaurant Billing System",
    description:
      "A system for managing restaurant orders and billing, enhancing workflow efficiency for staff and customers.",
    link: "https://charankondaveeti.github.io/restaurant-billing-app/",
    techStack: ["React"],
    image: restaurantbilling,
  },
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const intersectionRatio = entry.intersectionRatio;
            const scaleValue = 0.8 + intersectionRatio * 0.2; // scale from 0.8 to 1
            entry.target.style.transform = `scale(${scaleValue})`;
          } else {
            entry.target.style.transform = "scale(0.8)";
          }
        });
      },
      {
        threshold: Array.from(Array(101), (_, i) => i / 100), // creates thresholds from 0 to 1 in 0.01 increments
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="projects">
      <h1>My works</h1>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-info">
            <h2>
              {project.title}
              <a className="openilink--btn" href={project.link}>
                <HiOutlineExternalLink size={20} />
              </a>
            </h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a> */}
          </div>
          <div className="project-image">
            <img src={project.image} alt={`${project.title} screenshot`} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
