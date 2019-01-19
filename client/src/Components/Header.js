import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Sidebar from './Sidebar';

export default class Header extends Component {
  state = {
    showSidebar: false,
    menuItems: ['About','Projects','Contact'],
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
              <a href="/"><h3>Rob Tucker</h3></a>
            </div>
            <nav name="Desktop Navigation" className="desktop-nav">
              {this.state.menuItems.map(item=>(
                <li key={item}>
                  {this.props.useAnchorLinks ?
                    <AnchorLink href="#about">About</AnchorLink>
                    :
                    <a href={"/#"+item.toLowerCase()}>{item}</a> }
                </li>
              ))}
            </nav>
            <nav name="Mobile Navigation" className="mobile-nav">
              <button className="btn-link" title="Open Navigation">
                <i onClick={this.toggleSidebar} className="fa fa-bars" />
              </button>
            </nav>
          </div>
        </div>
        <div className="sidebar-wrapper">
          {this.state.showSidebar && (
            <Sidebar 
              useAnchorLinks={this.props.useAnchorLinks} 
              showSidebar={this.state.showSidebar} 
              onToggle={this.toggleSidebar}
            />
          )}
        </div>
      </header>;
  }
} 
