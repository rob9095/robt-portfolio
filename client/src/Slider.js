import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { projects } from "./jsonData";

const Slide = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 15 }
    }
  },
  exit: {
    x: 300,
    opacity: 0,
    // transition: {
    //   x: { type: "spring", stiffness: 100, damping: 15 }
    // }
  }
});

class Slider extends Component {
  state = {
    isVisible: false,
    firstIndex: 0,
    items: projects,
  };

  componentDidMount() {
    this.handleWindowResize()
  }

  handleDotClick = i => {
    this.setState({
      firstIndex: i * this.state.itemsVisible,
    });
  };

  handleWindowResize = () => {
    let clientWidth = document.documentElement.clientWidth;
    this.setState({
      itemsVisible: clientWidth <= 700 ? 1 : clientWidth >= 1300 ? 3 : 2,
    })
  }

  render() {
    const { items, firstIndex, itemsVisible, activeDot } = this.state;
    let dots = items.slice(0, Math.ceil(items.length / itemsVisible));
    window.onresize = () => {
      this.handleWindowResize();
    }
    return (
      <div>
        <div className="gallery">
          <PoseGroup>
            {items.slice(firstIndex, firstIndex + itemsVisible).map(p => (
              <Slide key={p.position}>
                <div className="project-card">
                  <h2>{p.name}</h2>
                  <img src={require(`./img/${p.icon}`)} />
                  <p>{p.skills.map((s, i) => i + 1 === p.skills.length ? s + "." : s + " , ")}</p>
                  <a className="btn">View Project</a>
                </div>
              </Slide>
            ))}
          </PoseGroup>
        </div>
        <div className="controls">
          <div className="dots">
            {dots.map((d, i) => (
              <div
                onClick={() => this.handleDotClick(i)}
                className={firstIndex === i * itemsVisible ? "dot active" : "dot"}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;