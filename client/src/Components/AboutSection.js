import React from "react";

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h3 className="title">About me</h3>
        <div className="about-wrapper flex-col-mobile">
          <div className="about-text">
            <p>
              I'm a passionate problem solver, full-stack engineer, and
              eCommerce systems analyst currently based in Dana Point,
              California. My specialties are JavaScript (ES6), Node.js,
              Express, ReactJS, Redux, MongoDB, MySQL, HTML5, and CSS3.
              I enjoy learning more about technology and using my
              knowledge to solve real world problems. I'm also a <a className="purple" href="https://grow.google/programs/udacity/">Grow
              with Google Scholar</a> and a certified graduate of the <a className="purple" href="https://confirm.udacity.com/FGDNZCAG">Udacity Front End Web Developer Nanodegree</a> program. Please
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
  );
}

export default AboutSection;
