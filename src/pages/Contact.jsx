import React from "react";
//import "../static/Contact.css";

function Contact() {
  return (
    <div className="container-contact">
      <div className="status">
        <span>•</span> AVAILABLE FOR WORK <span>•</span>
      </div>
      <h1>Let's bring your vision to life</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your e-mail"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Your message..."
        ></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Contact;
