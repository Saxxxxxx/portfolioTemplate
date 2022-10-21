import React from "react";
import catThumbsUp from "../assets/cat-thumbs-up.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${catThumbsUp})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Me</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="John Doe" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="JohnDoe@mail.com" />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input name="phoneNumber" placeholder="01X-XXXXXXXXX" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Any message/feedback are welcomed"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
