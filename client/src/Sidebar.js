import React, { Component } from "react";
import posed from "react-pose";
import "./styles.css";

const Sider = posed.ul({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: "-100%", delay: 300 }
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

class Sidebar extends Component {
  state = { isOpen: false };

  componentDidMount() {}

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return <div>
        <Sider className="sidebar" pose={isOpen ? "open" : "closed"}>
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <button onClick={this.toggle}>click me</button>
        </Sider>
        <button onClick={this.toggle}>click me</button>
      </div>;
  }
}

export default Sidebar;
