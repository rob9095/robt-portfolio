import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";

const Sider = posed.ul({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: "-100%", delay: 300 }
});

const MenuItem = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});


const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class Sidebar extends Component {
  state = { isOpen: false };

  componentWillReceiveProps(newProps) {
    if (newProps.showSidebar !== this.state.isOpen) {
      this.toggle();
    }
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClose = () => {
    this.toggle()
    this.props.onToggle();
  }

  render() {
    const { isOpen } = this.state;

    return <PoseGroup>
        {isOpen && <Shade key="shade" className="shade" onClick={this.handleClose} />}
        <Sider key="sider" className="sidebar" pose={isOpen ? "open" : "closed"}>
          <MenuItem className="menu-item close" onClick={this.handleClose}>
            <i className="fa fa-close" />
          </MenuItem>
          <MenuItem className="menu-item">About</MenuItem>
          <MenuItem className="menu-item">Projects</MenuItem>
          <MenuItem className="menu-item">Contact</MenuItem>
        </Sider>
      </PoseGroup>;
  }
}

export default Sidebar;
