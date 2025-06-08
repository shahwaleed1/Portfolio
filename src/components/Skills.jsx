import React from "react";

const techskill = [
  {
    id: 1,
    name: 'HTML',
    value: 80
  },
  {
    id: 2,
    name: 'CSS',
    value: 90
  },
  {
    id: 3,
    name: 'Bootstrap',
    value: 80
  },
  {
    id: 4,
    name: 'javascript',
    value: 70
  },
  {
    id: 5,
    name: 'React',
    value: 80
  },
  {
    id: 6,
    name: 'Tailwindcss',
    value: 80
  },
  {
    id: 7,
    name: 'Node.js',
    value: 70
  },
  {
    id: 8,
    name: 'MongoDB',
    value: 60
  },
  {
    id: 9,
    name: 'Express.js',
    value: 60
  }
]

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


    <div className="progres_main_div">
      {techskill.map((data) => (
        <div className="progress-container" key={data.id}>
          <span className="tech-name">{data.name}</span>
          <div className="progress-bar-wrapper">
            <div
              className="progress"
              style={{ width: `${data.value}%` }}
              data-value={`${data.value}%`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div >
);

export default Skills;
