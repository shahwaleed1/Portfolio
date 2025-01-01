import React from "react";

const Contact = () => (
  <div className="contact-container" id="contact">
    <div className="data">
      <div className="contact-img">
        <img src="mail.png" alt="Contact" />
      </div>
      <div className="contact-mail">
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Email" />
        <textarea name="message" id="textarea" placeholder="Message"></textarea>
        <input type="submit" id="submit" value="Submit" />
      </div>
    </div>
  </div>
);

export default Contact;
