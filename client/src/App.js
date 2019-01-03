import React, { Component } from 'react';
import heroBg from './img/purple-hero-original.png';
import heroImg from './img/hero-image-1.png'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <header>
            <h2><a href="#">Rob Tucker</a></h2>
            <nav>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </nav>
          </header> */}
          <header>
            <div className="container">
              <div className="header-wrapper">
                <div className="logo">
                  <h3>Rob Tucker</h3>
                </div>
                <nav>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Contact</a></li>
                </nav>
              </div>
            </div>
          </header>         
          <section className="hero">
            <div className="background-image" style={{
              backgroundImage: `url(${heroBg})`,
            }} />
            <div className="container">
              <div className="hero-content-area flex-col-mobile">
                  <div className="hero-text">
                    <h1>Web Developer</h1>
                    <p>I'm Rob, a full stack web developer, eCommerce specialist, and JavaScript ninja.</p>
                    <a href="#" className="btn">My Work</a>
                  </div>
                  <div className="hero-image">
                    <img src={heroImg} />
                  </div>
              </div>
            </div>
          </section>
          <section className="about">
          <div className="container">
            <h3 className="title">About me</h3>
              <div className="about-wrapper flex-col-mobile">
                <div className="about-text">
                  <p>
                    I'm a passionate web developer and eCommerce systems analyst currently based in Dana Point, CA. My specialties are JavaScript (ES6), Node.js, Express, ReactJS, Redux, MongoDB, MySQL, HTML5, and CSS3. I enjoy learning more about technology and using my knowledge to solve real problems. I'm also a Grow with Google Scholar and a certified graduate of the Udacity Front End Web Developer Nanodegree program. Please contact me if you'd like to work together or just to chat.
                  </p>		
                </div>
                <div className="about-skills">
                  <div>
                    <h4>Languages</h4>
                    <p>JavaScript (ES6), HTML5, CSS3</p>
                  </div>
                  <div>
                    <h4>Frameworks</h4>
                    <p>ReactJS, Node.js, Express, Redux, Webpack, Gulp, MongoDB, MySQL, jQuery, Bootstrap, Jasmine</p>
                  </div>
                  <div>
                    <h4>Other</h4>
                    <p>Git/GitHub, WordPress, Photoshop, MS Office</p>
                  </div>			
                </div>
              </div>
            </div>		
          </section>
          <section className="projects">
          <div className="container">
            <h3 className="title">My Projects</h3>
              <div className="projects-wrapper flex-col-mobile">
                <div className="project-card">
                  <h2>Maps App</h2>
                  <img src={require('./img/maps-icon.png')} />
                  <p>JavaScript, React, Babel, Webpack, Fetch API, CSS3, HTML5</p>
                  <a className="btn">View Project</a>
                </div>
                <div className="project-card">
                    <h2>Memory Game</h2>
                    <img src={require('./img/memory-game-icon-3.png')} />
                    <p>JavaScript,  jQuery, HTML5, CSS Animations</p>
                    <a className="btn">View Project</a>
                </div>
                <div className="project-card">
                    <h2>Frogger Clone</h2>
                    <img src={require('./img/frogger-icon.png')} />
                    <p>JavaScript, jQuery, HTML5 Canvas, CSS3</p>
                    <a className="btn">View Project</a>
                </div>						
              </div>
          </div>
          </section>
          <section className="contact">
          <div className="container">
            <div className="contact-wrapper">
              <img src={require('./img/mail-icon.png')} />		
              <h3 className="title">Interested in working together?</h3>
              <p>Feel free to contact me if you'd like to work together, have any questions, or just want to chat.</p>
              <a className="btn">Contact Me</a>
            </div>
          </div>
          </section>
          <footer>
            <div className="container">
              <div className="footer-wrapper">
                <div className="logo">
                  <h3>Rob Tucker</h3>
                  <p>Creative Commons</p>
                </div>
                <div className="social-icons">
                  <i className="fa fa-github"></i>
                  <i className="fa fa-codepen"></i>
                  <i className="fa fa-linkedin"></i>	
                </div>
              </div>
            </div>
          </footer>
      </div>
    );
  }
}

export default App;
