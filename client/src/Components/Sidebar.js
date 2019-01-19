import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Sider = posed.ul({
  open: {
    x: "0%",
    delayChildren: 100,
    staggerChildren: 50
  },
  closed: { x: "-100%", delay: 400 }
});

const MenuItem = posed.li({
  open: { x: 0, opacity: 1 },
  closed: { x: -20, opacity: 0 }
});

const CloseBtn = posed.i({
  open: { x: 0, opacity: 1 },
  closed: { x: -20, opacity: 0 }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class Sidebar extends Component {
  state = {
    isOpen: false,
    menuItems: ['About','Projects','Contact'],
  };

  componentDidMount() {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({isOpen: false})
    // wait for close animation
    setTimeout(()=>{
      this.props.onToggle();
    },300)
  }

  render() {
    const { isOpen } = this.state;

    return <PoseGroup>
        {isOpen && <Shade key="shade" className="shade" onClick={this.handleClose} />}
        <Sider key="sider" className="sidebar" pose={isOpen ? "open" : "closed"}>
          <CloseBtn tabIndex="0" title="Close Navigation" onClick={this.handleClose} className="fa fa-close" />
          {this.state.menuItems.map(item=>(
            <MenuItem className="menu-item" key={item}>
              {this.props.useAnchorLinks ?
                <AnchorLink onClick={this.handleClose} href={'#' + item.toLowerCase()}>{item}</AnchorLink>
                :
                <a onClick={this.handleClose} href={'/#'+item.toLowerCase()}>{item}</a>
              }
            </MenuItem>            
          ))}
        </Sider>
      </PoseGroup>;
  }
}

export default Sidebar;
