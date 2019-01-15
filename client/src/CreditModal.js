import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class CreditModal extends Component {
  state = { isOpen: false };

  componentWillReceiveProps(newProps) {
    if (newProps.showModal !== this.state.isOpen) {
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

    return (
     <div className="modal-container">
        <PoseGroup>
          {isOpen && [
            <Shade onClick={this.handleClose} key="shade" className="shade" />,
            <Modal key="modal" className="modal" />
          ]}
        </PoseGroup>
     </div>
    );
  }
}

export default CreditModal;