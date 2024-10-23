import { Link } from "react-scroll";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a href="#about">About</a>
      </li>
      <li className="nav-item">
        <a href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a href="#experience">Experience</a>
      </li>
      <li className="nav-item">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
