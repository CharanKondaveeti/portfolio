import React, { useEffect, useRef } from "react";
import "./css/Skills.css";
import PhotoshopIcon from "../images/skillIcons/Adobe Photoshop.png";
import CanvaIcon from "../images/skillIcons/Canva.png";
import CSS3Icon from "../images/skillIcons/CSS3.png";
import GitIcon from "../images/skillIcons/Git.png";
import HTML5Icon from "../images/skillIcons/HTML5.png";
import JavaScriptIcon from "../images/skillIcons/JavaScript.png";
import MySQLIcon from "../images/skillIcons/MySQL.png";
import PythonIcon from "../images/skillIcons/Python.png";
import ReactIcon from "../images/skillIcons/React.png";
import TailwindIcon from "../images/skillIcons/Tailwind.png";
import NodejsIcon from "../images/skillIcons/Nodejs.png";
import MongoDBIcon from "../images/skillIcons/MongoDB.png";

const skills = [
  {
    name: "Photoshop",
    imgSrc: PhotoshopIcon,
    color: "#31A8FF",
    percentage: 80,
  },
  { name: "Canva", imgSrc: CanvaIcon, color: "#00C4CC", percentage: 85 },
  { name: "CSS3", imgSrc: CSS3Icon, color: "#264de4", percentage: 90 },
  { name: "Git", imgSrc: GitIcon, color: "#F05032", percentage: 75 },
  { name: "HTML5", imgSrc: HTML5Icon, color: "#e34c26", percentage: 95 },
  {
    name: "JavaScript",
    imgSrc: JavaScriptIcon,
    color: "#F7DF1E",
    percentage: 85,
  },
  { name: "MySQL", imgSrc: MySQLIcon, color: "#00758F", percentage: 70 },
  { name: "Python", imgSrc: PythonIcon, color: "#306998", percentage: 60 },
  { name: "React", imgSrc: ReactIcon, color: "#61DAFB", percentage: 80 },
  { name: "Tailwind", imgSrc: TailwindIcon, color: "#06B6D4", percentage: 75 },
  { name: "Node.js", imgSrc: NodejsIcon, color: "#339933", percentage: 80 },
  { name: "MongoDB", imgSrc: MongoDBIcon, color: "#47A248", percentage: 70 },
];

const Skills = () => {
  const skillItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector(".progress-bar");
            const skillItem = entry.target;

            // Animate progress bar and skill item
            progressBar.style.width = entry.target.dataset.percentage + "%";
            skillItem.classList.add("in-view");
          } else {
            const progressBar = entry.target.querySelector(".progress-bar");
            const skillItem = entry.target;

            // Reset progress bar and remove skill item animation class
            progressBar.style.width = "0%";
            skillItem.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    skillItemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      skillItemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="skills">
      <h1>Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="skill-item"
            ref={(el) => (skillItemsRef.current[index] = el)}
            data-percentage={skill.percentage}
          >
            <span className="skill-name">{skill.name}</span>
            <img src={skill.imgSrc} alt={skill.name} className="skill-icon" />
            <div className="progress-bar-bg">
              <span
                className="progress-bar"
                style={{ backgroundColor: skill.color }}
              ></span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
