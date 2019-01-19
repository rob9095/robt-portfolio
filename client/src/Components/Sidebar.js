import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Sider = posed.ul({
  open: {
    x: "0%",
    delayChildren: 100,
    staggerChildren: 50
  },
  closed: { x: "-100%", delay: 300 }
});

const MenuItem = posed.li({
  open: { x: 0, opacity: 1 },
  closed: { x: -20, opacity: 0 }
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
        {isOpen && <Shade key="shade" className="shade" />}
        <Sider key="sider" className="sidebar" pose={isOpen ? "open" : "closed"}>
          <MenuItem title="Close Navigation" className="menu-item close" onClick={this.handleClose}>
            <i className="fa fa-close" />
          </MenuItem>
          <MenuItem className="menu-item" onClick={this.handleClose}>
            {this.props.useAnchorLinks ? <AnchorLink href="#about">About</AnchorLink> : <a href="/#about">About</a>}
          </MenuItem>
          <MenuItem className="menu-item" onClick={this.handleClose}>
            {this.props.useAnchorLinks ? <AnchorLink href="#projects">Projects</AnchorLink> : <a href="/#projects">Projects</a>}
          </MenuItem>
          <MenuItem className="menu-item" onClick={this.handleClose}>
            {this.props.useAnchorLinks ? <AnchorLink href="#contact">Contact</AnchorLink> : <a href="/#contact">Contact</a>}
          </MenuItem>
        </Sider>
      </PoseGroup>;
  }
}

export default Sidebar;
