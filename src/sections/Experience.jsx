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
];
import { SlGraduation } from "react-icons/sl";
import { LuCode2 } from "react-icons/lu";
import { AiOutlineCaretRight } from "react-icons/ai";

const Experience = () => {
  return (
    <section className="timeline-section experience">
      <h1>My Timeline</h1>
      <div className="timeline">
        <div className="timeline-dot ">
          <span className="icon">
            <SlGraduation size={25} />
          </span>
          <div className="item--info left">
            <p>
              <span>Information technology </span>Completed my BTech Graduation
            </p>
            <span className="pointer--head">
              <AiOutlineCaretRight size={20} />
            </span>
          </div>
          <p className="item--period right">May 2022</p>
        </div>

        <div className="timeline-dot">
          <span className="icon">
            <LuCode2 size={25} />
          </span>
          <div className="item--info right">
            <p>
              <span>Junior Software Engineer </span>
              Hajjitech solutions private limited
            </p>
            <span className="pointer--head">
              <AiOutlineCaretRight size={20} />
            </span>
          </div>
          <p className="item--period left">May 2022 - Apr 2024</p>
        </div>

        <div className="timeline-dot ">
          <span className="icon">
            <LuCode2 size={25} />
          </span>
          <div className="item--info left">
            <p>
              <span>Software Engineer </span>
              Vts enterprises india private limited
            </p>{" "}
            <span className="pointer--head">
              <AiOutlineCaretRight size={20} />
            </span>
          </div>
          <p className="item--period right">May 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
