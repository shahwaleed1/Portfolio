import React from "react";

const Section = () => (
  <section>
    <div className="sec-container">
      <video className="bg-video" autoPlay muted loop src="5200-183786525_medium.mp4"></video>
      <div className="container">
        <div className="img-bg-div">
          <img src="profile_pic.png" alt="Admin logo" className="admin-logo" />
          <div className="img-back"></div>
        </div>
        <div className="heading">
          <h1 className="name">Waleed Shah</h1>
          <p><strong>Frontend Developer</strong></p>
          <small>
            My name is Waleed Shah, I Frontend Developer from Pakistan <br /> Freelancer, Company Job <br />Web
            Languages
          </small>
        </div>
        <div className="marquee-container">
          <div className="marquee">
            <img src="Image/pngegg (9).png" alt="" />
            <img src="Image/pngegg (12).png" alt="" />
            <img src="Image/pngegg (11).png" alt="" id="bs" />
          </div>
        </div>
      </div>
      <div className="link-div">
        <div className="icons">
          <a href="#"><i className="fa-solid fa-house"></i></a>
          <a href="#about"><i className="fa-solid fa-circle-info"></i></a>
          <a href="#projects"><i className="fa-solid fa-gears"></i></a>
          <a href="#skill"><i className="fa-solid fa-brain"></i></a>
          <a href="#contact"><i className="fa-solid fa-address-book"></i></a>
        </div>
        <div className="icon-text">
          <span>Home</span> <span>About</span> <span>Projects</span> <span>Skills</span> <span>Contact</span>
        </div>
      </div>
    </div>
  </section>
);

export default Section;
