import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill, RiLink } from "react-icons/ri";

// Project data
const projects = [
  {
    name: "HD Photos",
    description:
      "HD Photos is Create in react js and tailwind css.It have a HDPhotos to user use in project and wallpapers mobile size, laptopsize etc.",
    live: "https://hd-photos.vercel.app/",
    image: "./hd_photo.png",
    tech: ["React", "Tailwind"],
  },
  {
    name: "Shah Coffee",
    description: "Shah Coffee",
    live: "https://shahcoffee.vercel.app/",
    image: "./coffee.png",
    tech: ["React", "Tailwind"],
  },
  {
    name: "Virtual Assistant",
    description:
      "This Shahni virtual assistant dynamically give response of any Question.",
    live: "https://waleed-assistan.vercel.app/",
    image: "./Ai.png",
    tech: ["React", "Node", "Express", "Mongodb"],
  },
  {
    name: "Weather App",
    description: "Weather app with searchbox.",
    live: "https://shahwaleed1.github.io/WeatherApp_js/",
    image: "./weather_js.png",
    tech: ["React", "Tailwind"],
  },
  {
    name: "Food Nutrient",
    description:
      "The Food-Nutrient WebApp is a modern and responsive web application.",
    live: "https://food-nutrient.vercel.app/",
    image: "./Food_Nutrient.png",
    tech: ["Nextjs", "Tailwind"],
  },
  {
    name: "GTA 6",
    description: "GTA 6 website using React js and Tailwind css.",
    live: "https://gta-6-delta.vercel.app/",
    image: "./gta6.png",
    tech: ["React", "Tailwind"],
  },
  {
    name: "Blog",
    description:
      "Beauty of Pakistan is a stylish and intuitive blogger website designed to immerse visitors in the rich landscapes and culture of Pakistan. It includes essential pages like Home and About, along with Login and Signup functionality for user interaction.",
    live: "https://blogapp-z729.vercel.app/",
    image: "./blog_project-min.png",
    tech: ["Nextjs", "Tailwind"],
  },
];

// Tech icons + colors (custom CSS classes instead of Tailwind)
const tech = {
  React: { icon: <FaReact />, name: "React", color: "tech-react" },
  Node: { icon: <FaNodeJs />, name: "Node.js", color: "tech-node" },
  Mongodb: { icon: <SiMongodb />, name: "MongoDB", color: "tech-mongodb" },
  Express: { icon: <SiExpress />, name: "Express", color: "tech-express" },
  Tailwind: { icon: <SiTailwindcss />, name: "Tailwind", color: "tech-tailwind" },
  Nextjs: { icon: <RiNextjsFill />, name: "Next.js", color: "tech-nextjs" },
};

const Projects = () => (
  <div className="project-container" id="projects">
    <h1 className="project_heading">Projects</h1>
    <p className="project_para">Hover on Image to see the Project information.</p>

    <div className="cards">
      {projects.map((project, i) => (
        <div key={i} className="card card-1">
          <div className="card-i_t">
            <img src={project.image} alt="Project" />
            <div className="card-text">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              {/* Tech stack */}
              <div className="tech-stack">
                {project.tech?.map((t, idx) => (
                  <span key={idx} className={`tech-item ${tech[t].color}`}>
                    {tech[t].icon} <span>{tech[t].name}</span>
                  </span>
                ))}
              </div>

              {/* Links */}
              <a href={project.live} target="_blank" rel="noreferrer">
                <span>
                  <RiLink />
                </span>
                <span>Visit</span>
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <span>
                  <FaGithub />
                </span>
                Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
