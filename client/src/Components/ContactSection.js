
import React from "react";

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <img src={require("../img/mail-icon.png")} alt="email icon" />
          <h3 className="title">Let's get in touch</h3>
          <p>
            Feel free to contact me if you'd like to work together, have
            any questions, or just want to chat.
              </p>
          <a className="btn" href="mailto:robt9095@gmail.com">
            Contact Me
              </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;