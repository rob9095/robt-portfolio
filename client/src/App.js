import React, { Component } from 'react';
import heroBg from './img/purple-hero-original.png';
import heroImg from './img/hero-image-1.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Slider from "./Slider";
import Header from './Header';
import Footer from "./Footer";

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <section className="hero">
          <div className="background-image" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="container">
            <div className="hero-content-area flex-col-mobile">
              <div className="hero-text">
                <h1>Web Developer</h1>
                <p>
                  I'm Rob, a full stack web developer, eCommerce specialist,
                  and JavaScript ninja.
                </p>
                <AnchorLink href="#projects" className="btn">
                  My Work
                </AnchorLink>
              </div>
              <div className="hero-image">
                <img src={heroImg} />
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="container">
            <h3 className="title">About me</h3>
            <div className="about-wrapper flex-col-mobile">
              <div className="about-text">
                <p>
                  I'm a passionate problem solver, front-end engineer, and
                  eCommerce systems analyst currently based in Dana Point,
                  California. My specialties are JavaScript (ES6), Node.js,
                  Express, ReactJS, Redux, MongoDB, MySQL, HTML5, and CSS3.
                  I enjoy learning more about technology and using my
                  knowledge to solve real world problems. I'm also a Grow
                  with Google Scholar and a certified graduate of the
                  Udacity Front End Web Developer Nanodegree program. Please
                  contact me if you'd like to work together or just to chat.
                </p>
              </div>
              <div className="about-skills">
                <div>
                  <h4>Languages</h4>
                  <p>JavaScript (ES6), HTML5, CSS3</p>
                </div>
                <div>
                  <h4>Frameworks</h4>
                  <p>
                    ReactJS, Node.js, Express, Redux, Webpack, Gulp,
                    MongoDB, MySQL, jQuery, Bootstrap, Jasmine
                  </p>
                </div>
                <div>
                  <h4>Other</h4>
                  <p>Git/GitHub, WordPress, Photoshop, MS Office</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects" id="projects">
          <div className="container">
            <h3 className="title">My Work</h3>
            <Slider />
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="container">
            <div className="contact-wrapper">
              <img src={require("./img/mail-icon.png")} />
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
        <Footer />
      </div>;
  }
}

export default App;
