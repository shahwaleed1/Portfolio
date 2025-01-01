import React from "react";

const Skills = () => (
  <div className="skill-container" id="skill">
    <h1>Skills</h1>
    <div className="skills-group">
      {/* Skill 1 */}
      <div className="skillbase skill-1">
        <div className="img-logo">
          <img src="frontend.png" alt="Web Frontend" />
        </div>
        <div className="skill-text">
          <h4>Web Frontend</h4>
          <p>Creating visually appealing and user-friendly websites.</p>
        </div>
      </div>
      {/* Skill 2 */}
      <div className="skillbase skill-1">
        <div className="img-logo">
          <img src="bankend.png" alt="Web Backend" />
        </div>
        <div className="skill-text">
          <h4>Web Backend</h4>
          <p>Building secure and scalable backend systems.</p>
        </div>
      </div>
      {/* Skill 3 */}
      <div className="skillbase skill-1">
        <div className="img-logo">
          <img src="full-stack.png" alt="Full Stack" />
        </div>
        <div className="skill-text">
          <h4>Full Stack</h4>
          <p>Mastering frontend and backend development.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
