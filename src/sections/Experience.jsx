import "./css/Experience.css";

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

const Experience = () => {
  return (
    <section className="experience">
      <h1>Experience</h1>
      {experience.map((job, index) => (
        <div className="experience-card" key={index}>
          <h2>
            {job.jobTitle} at {job.company}
          </h2>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
