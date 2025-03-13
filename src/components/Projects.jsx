import React from "react";
import Card from "./Card";

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
    </div>
  </div>
);

export default Projects;
