import React, { Component } from 'react';
import Slider from "react-slick";

class ProjectSlider extends Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div>
        <Slider {...settings}>
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
        </Slider>
      </div>
    );
  }
}

export default ProjectSlider;