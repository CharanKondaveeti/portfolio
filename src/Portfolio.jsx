import Navbar from "./features/Navbar";
import Introduction from "./sections/Introduction";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

import "./App.css";

const Portfolio = () => {
  return (
    <main className="portfolio">
      {/* <Navbar /> */}
      <Introduction />
      <Projects />
      <Skills />
      {/* <Experience /> */}
      <Contact />
    </main>
  );
};

export default Portfolio;
