import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";

const Header = () => {
  // const [value, setValue] = useState(0);
  // useEffect(() => {
  //   play();
  // }, [value]);

  // function play() {
  //   const sound = "alan-walker.mp3";
  //   new Audio(sound).play();
  // }

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("audio.mp3"));

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <header>
      <div className="email">
        <span className="icon">
          <CgMail />
        </span>
        <a href="mailto:its.waleed33@gmail.com">its.waleed33@gmail.com</a>
      </div>
      <div className="whatsapp">
      <button onClick={toggleAudio}>
          {isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
        </button>
        <span className="icon">
          <FaWhatsapp />
        </span>
        <a href="https://wa.me/+923488665301" target="_blank" rel="noreferrer">
          +92 3488665301
        </a>
      </div>
    </header>
  );
};

export default Header;
