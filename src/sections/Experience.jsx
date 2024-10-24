import React, { useEffect, useRef } from "react";
import "./css/Experience.css";
import { SlGraduation } from "react-icons/sl";
import { LuCode2 } from "react-icons/lu";
import { AiOutlineCaretRight } from "react-icons/ai";

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineElements =
      timelineRef.current.querySelectorAll(".timeline-dot");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the item is visible
    );

    timelineElements.forEach((el) => observer.observe(el));

    return () => {
      timelineElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="timeline-section experience">
      <h1>My Timeline</h1>
      <div className="timeline" ref={timelineRef}>
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
