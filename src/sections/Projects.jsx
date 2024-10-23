import { useEffect } from "react";
import "./css/Projects.css";

const projects = [
  {
    title: "Weather App",
    description:
      "A weather forecasting application that shows current weather and forecast data for any location, using the OpenWeatherMap API.",
    link: "https://weather-app.netlify.app/",
    techStack: ["JavaScript", "API", "CSS"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal website showcasing my projects, blog, and contact details. Built with React and deployed using Netlify.",
    link: "https://your-portfolio.netlify.app/",
    techStack: ["React", "CSS", "Netlify"],
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "E-Commerce Store",
    description:
      "An e-commerce web application with product listing, cart management, and payment integration using Stripe API.",
    link: "https://ecommerce-store.herokuapp.com/",
    techStack: ["Node.js", "Express", "Stripe API"],
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
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
            <h2>{project.title}</h2>
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
