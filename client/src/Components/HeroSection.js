import React from "react";
import heroBg from "../img/purple-hero-original.png";
import heroImg from "../img/hero-image-1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function HeroSection() {
  return (
    <section className="hero">
      <div className="background-image" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="container">
        <div className="hero-content-area flex-col-mobile">
          <div className="hero-text">
            <h1>Web Developer</h1>
            <p>
              I'm Rob, a full stack web developer, software engineer, and eCommerce specialist.
            </p>
            <AnchorLink href="#projects" className="btn">
              My Work
            </AnchorLink>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
