import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Sidebar from './Sidebar';

export default class Header extends Component {
  state = {
    showSidebar: false,
  }
  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
    })
  }

  render() {
    return <header>
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <h3>Rob Tucker</h3>
            </div>
            <nav name="Desktop Navigation" className="desktop-nav">
              <li>
                <AnchorLink href="#about">About</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#projects">Projects</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact">Contact</AnchorLink>
              </li>
            </nav>
            <nav name="Mobile Navigation" className="mobile-nav">
              <button className="btn-link" title="Open Navigation">
                <i onClick={this.toggleSidebar} className="fa fa-bars" />
              </button>
            </nav>
          </div>
        </div>
        <div className="sidebar-wrapper">
          <Sidebar showSidebar={this.state.showSidebar} onToggle={this.toggleSidebar} />
        </div>
      </header>;
  }
} 