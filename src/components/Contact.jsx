import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const emailBody = `
        Name: ${formData.name}%0A
        Email: ${formData.email}%0A
        Message: ${formData.message}
      `;
      window.location.href = `mailto:shhbdad@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
    };


  return (
  <div className="contact-container" id="contact">
    <div className="data">
      <div className="contact-img">
        <img src="mail.png" alt="Contact" />
      </div>
      <form className="contact-mail" onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" id="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
        <textarea name="message" id="textarea" placeholder="Message" value={formData.textarea} onChange={handleChange}></textarea>
        <input type="submit" id="submit" value="Submit" />
      </form>
    </div>
  </div>
  )
}
;

export default Contact