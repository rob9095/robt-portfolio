import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import Swipeable from "react-swipeable";
import { projects } from "../data/jsonData";

const Slide = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 15 }
    }
  },
  exit: {
    x: 80,
    opacity: 0,
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

  handleSwipeRight = () => {
    if (this.state.firstIndex !== 0) {
      this.setState({
        firstIndex: this.state.firstIndex - this.state.itemsVisible
      });
    }
  };

  handleSwipeLeft = () => {
    console.log("left swipe");
    if (this.state.firstIndex + this.state.itemsVisible < this.state.items.length) {
      this.setState({
        firstIndex: this.state.firstIndex + this.state.itemsVisible
      });
    }
  };

  handleWindowResize = () => {
    let clientWidth = document.documentElement.clientWidth;
    let itemsVisible = clientWidth <= 700 ? 1 : clientWidth >= 1150 ? 3 : 2;
    if ((this.state.firstIndex / itemsVisible) % 1 !== 0) {
      console.log("update first index");
      this.setState({
        firstIndex: this.state.firstIndex - 1
      });
    }
    this.setState({
      itemsVisible
    });
  };

  render() {
    const { items, firstIndex, itemsVisible } = this.state;
    let dots = items.slice(0, Math.ceil(items.length / itemsVisible));
    window.onresize = () => {
      this.handleWindowResize();
    }
    return (
      <div>
        <Swipeable
          className="gallery"
          onSwipedRight={this.handleSwipeRight}
          onSwipedLeft={this.handleSwipeLeft}
        >
          <PoseGroup>
            {items.slice(firstIndex, firstIndex + itemsVisible).map(p => (
              <Slide key={p.position}>
                <div className="project-card">
                  <div className="title">
                    <h2>{p.name}</h2>
                    <hr />
                  </div>
                  <img alt={p.name + " icon"} src={require(`../img/${p.icon}`)} />
                  <p>{p.skills.map((s, i) => i + 1 === p.skills.length ? s + "." : s + ", ")}</p>
                  <a title={p.name} href={p.url} className="btn">View Project</a>
                </div>
              </Slide>
            ))}
          </PoseGroup>
        </Swipeable>
        <div className="controls">
          <div className="dots">
            {dots.map((d, i) => (
              <button
                title={`Slide ${i+1}`}
                onClick={() => this.handleDotClick(i)}
                className={firstIndex === i * itemsVisible ? "dot active" : "dot"}
                key={i}
              >

              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;