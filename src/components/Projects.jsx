import React from "react";
import Card from "./Card";


const projects = [
  {
    name: "HD Photos",
    description: "HD Photos is Create in react js and tailwind css.It have a HDPhotos to user use in project and wallpapers mobile size, laptopsize etc.",
    live: "https://hd-photos.vercel.app/",
    image: "./hd_photo.png"
  },
  {
    name: "Shah Coffee",
    description: "Shah Coffee",
    live: "https://shahcoffee.vercel.app/",
    image: "./coffee.png"
  },
  {
    name: "Virtual Assistant",
    description: "This Shahni virtual assistant dynamically give response of any Question.",
    live: "https://waleed-assistan.vercel.app/",
    image: "./Ai.png"
  },
  {
    name: "Weather App",
    description: "Weather app with searchbox.",
    live: "https://shahwaleed1.github.io/WeatherApp_js/",
    image: "./weather_js.png"
  },
  {
    name: "Food Nutrient",
    description: "The Food-Nutrient WebApp is a modern and responsive web application.",
    live: "https://food-nutrient.vercel.app/",
    image: "./Food_Nutrient.png"
  },
  {
    name: "GTA 6",
    description: "GTA 6 website using React js and Tailwind css.",
    live: "https://gta-6-delta.vercel.app/",
    image: "./gta6.png"
  },
  {
    name: "Blog",
    description: "Beauty of Pakistan is a stylish and intuitive blogger website designed to immerse visitors in the rich landscapes and culture of Pakistan. It includes essential pages like Home and About, along with Login and Signup functionality for user interaction.",
    live: "https://blogapp-z729.vercel.app/",
    image: "./blog_project-min.png"
  }
];

const tech = [
  {
    
  }
]


const Projects = () => (
  <div className="project-container" id="projects">
    <h1 className="project_heading">Projects</h1>
    <p className="project_para">
      Hover on Image to see the Project information.
    </p>
    <div className="cards">
      <Card img={"hd_photo.png"} name={"HD Photos"} despc={"HD Photos is Create in react js and tailwind css.It have a HDPhotos to user use in project and wallpapers mobile size, laptopsize etc."} domain={"https://hd-photos.vercel.app/"} />
      <Card img={"coffee.png"} name={"Shah Coffee"} despc={"Shah Coffee"} domain={"https://shahcoffee.vercel.app/"} />
      <Card img={"Ai.png"} name={"Virtual Assistant"} despc={"This Shahni virtual assistant dynamically give response of any Question."} domain={"https://waleed-assistan.vercel.app/"} />
      <Card img={"weather_js.png"} name={"Waether App"} despc={"Weather app with searchbox."} domain={"https://shahwaleed1.github.io/WeatherApp_js/"} />
      <Card img={"Food_Nutrient.png"} name={"Food Nutrient"} despc={"The Food-Nutrient WebApp is a modern and responsive web application."} domain={"https://food-nutrient.vercel.app/"} />
      <Card img={"gta6.png"} name={"GTA 6"} despc={"GTA 6 website using React js and Tailwind css."} domain={"https://gta-6-delta.vercel.app/"} />
      <Card img={"blog_project-min.png"} name={"Blog"} despc={"Beauty of Pakistan is a stylish and intuitive blogger website designed to immerse visitors in the rich landscapes and culture of Pakistan. It includes essential pages like Home and About, along with Login and Signup functionality for user interaction."} domain={"https:https://blogapp-z729.vercel.app/"} />
    </div>
  </div>
);

export default Projects;
