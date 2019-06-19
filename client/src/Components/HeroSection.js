import React, { Component } from "react";
import heroBg from "../img/purple-hero-original.png";
import heroImg from "../img/hero-image-1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

class HeroSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroImgLoaded: false,
    }
  }
  render() {
    return(
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
              <img onLoad={(heroImgLoaded = true)=>this.setState({heroImgLoaded})} src={heroImg} alt="web developer" />
              {!this.state.heroImgLoaded && (
                <div style={{ width: '100%', height: '100%', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i style={{ fontSize: 50, color: '#ffffffb3' }} className="fa fa-spinner fa-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HeroSection;
