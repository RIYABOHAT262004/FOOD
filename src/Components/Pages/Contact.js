import React from "react";
import "../Styles/Contact.css";
import img4 from "../Asserts/contacts.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{backgroundImage: `url(${ img4} )`}}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">FULL name</label>
          <input name="name" type="text" placeholder="Enter your Name" />
          <label htmlFor="email">Email</label>
          <input name="name" placeholder="Enter email address" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="7"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
