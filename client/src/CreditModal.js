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
    this.toggle();
    this.props.onToggle();
  }

  render() {
    const { isOpen } = this.state;

    return <PoseGroup>
        {isOpen && [
          <Shade key="shade" className="shade modal-wrapper">
            <Modal key="modal" className="modal">
              <i onClick={this.handleClose} className="fa fa-close" />
              <div className="modal-content">
                <h2>Icon & Image Credit</h2>
                <ul>
                  <li>
                    <a href="https://www.freepik.com/free-vector/moderm-landing-page-template_3006732.htm">
                      Hero Image Designed by Pikisuperstar
                    </a>
                  </li>
                  <li>
                    <a href="https://www.freepik.com/free-vector/moderm-landing-page-template_3006732.htm">
                      Maps Icon Designed by FlatIcon
                    </a>
                  </li>
                </ul>
              </div>
            </Modal>
          </Shade>
          ]}
      </PoseGroup>;
  }
}

export default CreditModal;