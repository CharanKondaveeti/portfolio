import "./css/Introduction.css";
import memoji from "./../images/memoji.png";
// icons
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";

const Introduction = () => {
  return (
    <section className="intro">
      <div className="avatar">
        <img src={memoji} alt="avatar" className="avatar-img" />
        <p className="name-tag">charan kondaveeeti 👋</p>
      </div>
      <h1>
        I love being <br />
        <span className="highlight">responsive & user-friendly!</span>
      </h1>
      <p className="description">
        I am a skilled full-stack developer with over 2.5 years of professional
        experience, specializing in building dynamic web applications. My focus
        is on developing robust, scalable solutions using the MERN stack,
        enabling seamless user experiences across various platforms.
      </p>
      <div className="button-group">
        <a className="contact-btn btn-typ-1">
          Get In Touch <HiArrowLongRight size={25} />
        </a>
        <a className="cv-btn btn-typ-1">
          Download <HiDownload size={25} fill="white" />
        </a>
        <a
          href="https://github.com/CharanKondaveeti"
          className="linkedin-btn btn-typ-2"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/charan-kondaveeti-11b77b293/"
          className="github-btn -btn btn-typ-2"
        >
          <FaGithubSquare size={25} />
        </a>
      </div>
    </section>
  );
};

export default Introduction;
