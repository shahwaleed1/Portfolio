import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Header = () => (
  <header>
    <div className="email">
      <span className="icon">
        <CgMail />
      </span>
      <a href="mailto:its.waleed33@gmail.com">its.waleed33@gmail.com</a>
    </div>
    <div className="whatsapp">
      <span className="icon">
        <FaWhatsapp />
      </span>
      <a href="https://wa.me/+923488665301" target="_blank" rel="noreferrer">
        +92 3488665301
      </a>
    </div>
  </header>
);

export default Header;
