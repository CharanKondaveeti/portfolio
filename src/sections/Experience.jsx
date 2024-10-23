import "./css/Experience.css";
import { FaCode } from "react-icons/fa";
const experience = [
  {
    jobTitle: "Software Developer",
    company: "Company A",
    duration: "Jan 2023 - Present",
    description: "Worked on various projects using React and Node.js.",
  },
  {
    jobTitle: "Frontend Developer",
    company: "Company B",
    duration: "Jan 2022 - Dec 2022",
    description: "Developed user-friendly interfaces for web applications.",
  },
  // Add more experience data if needed
];

const Experience = () => {
  return (
    <section className="timeline-section experience">
      <h1>My Timeline</h1>
      <div className="timeline">
        <div className="timeline-dot ">
          <div className="item--left">
            <p>
              <span>may-6th 2022</span>
              completed my Btech Graduation
            </p>
            <FaCode size={20} />
          </div>
        </div>

        <div className="timeline-dot">
          <div className=" item--right">
            <p>
              <span>may-6th 2022</span>
              completed my Btech Graduation
            </p>
            <FaCode size={20} />
          </div>
        </div>

        <div className="timeline-dot ">
          <div className="item--left">
            <p>
              <span>may-6th 2022</span>
              completed my Btech Graduation
            </p>
            <FaCode size={20} />
          </div>
        </div>

        <div className="timeline-dot">
          <div className=" item--right">
            <p>
              <span>may-6th 2022</span>
              completed my Btech Graduation
            </p>
            <FaCode size={20} />
          </div>
        </div>
        <div className="timeline-dot">
          <div className="item--left">
            <p>
              <span>may-6th 2022</span>
              completed my Btech Graduation
            </p>
            <FaCode size={20} />
          </div>
        </div>
        <div className="timeline-dot">
          <div className=" item--right">
            <p>
              <span>may-6th 2022</span>
              completed my Btech Graduation
            </p>
            <FaCode size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
