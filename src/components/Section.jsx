import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { FaAddressBook } from "react-icons/fa";

const Section = () => {

  const [isScreenWidthSmall, setIsScreenWidthSmall] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsScreenWidthSmall(window.innerWidth <= 800);
    };

    // Check screen width on component mount
    checkScreenWidth();

    // Add event listener for screen resizing
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);



  // const words = ['WEB DEVELOPER', 'WEB DESIGNER', 'UI/UX DESIGNER'];
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const [displayedText, setDisplayedText] = useState('');
  // const [isDeleting, setIsDeleting] = useState(false);

  // useEffect(() => {
  //   const handleTyping = () => {
  //     const currentWord = words[currentWordIndex];
  //     if (isDeleting) {
  //       setDisplayedText((prev) => prev.slice(0, -1));
  //     } else {
  //       setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
  //     }

  //     if (!isDeleting && displayedText === currentWord) {
  //       setTimeout(() => setIsDeleting(true), 1000);
  //     } else if (isDeleting && displayedText === '') {
  //       setIsDeleting(false);
  //       setCurrentWordIndex((prev) => (prev + 1) % words.length);
  //     }
  //   };

  //   const typingInterval = setInterval(handleTyping, 150);
  //   return () => clearInterval(typingInterval);
  // }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <section>
      <div className="sec-container">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          // src="5200-183786525_medium.mp4"
          src="https://res.cloudinary.com/dakyaitql/video/upload/v1748493946/5200-183786525_medium_jzztwv.mp4"
        ></video>
        <div className="container">
          <div className="img-bg-div">
            <img
              src="https://res.cloudinary.com/dakyaitql/image/upload/v1748493785/profile_pic_irrwll.png"
              alt="My Picture"
              className="admin-logo puff-in-center"
            />
            <div className="img-back"></div>
          </div>
          <div className="heading">
            <h1 className="name focus-in-contract-bck">Waleed Shah</h1>
            <p>
              <strong style={{ fontWeight: '500' }}>Full-Stack Developer</strong>
            </p>
            <small>
              I am MERN Stack Developer with expertise in crafting dynamic,<br />
              user-friendly with responsive web-apps
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
        {isScreenWidthSmall && (
          <div className="link-div">
            <div className="icons">
              <a href="">
                <AiFillHome />
              </a>
              <a href="">
                <IoMdInformationCircle />
              </a>
              <a href="">
                <FaGear />
              </a>
              <a href="">
                <LuBrainCircuit />
              </a>
              <a href="">
                <FaAddressBook />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
