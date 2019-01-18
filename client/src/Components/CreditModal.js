import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import FocusTrap from 'react-focus-trap';
import { credits } from "../data/jsonData";

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
        {isOpen && [<Shade key="shade" className="shade">
          <Modal
            aria-modal="true"
            role="dialog"
            aria-labelledby="Credit Modal"
            aria-describedby="Credit & Attribution for Images and Icons" 
            key="modal" className="modal"
            style={{ top: document.documentElement.clientHeight * .25}}
          >
              <FocusTrap onExit={this.handleClose} active={this.state.isOpen}>
                <i tabIndex="0" type="button" aria-label="Close Modal" onClick={this.handleClose} className="fa fa-close" />
                <div className="modal-content">
                  <h2>Icon & Image Credit</h2>
                  <ul className="credit-list">
                    {credits.map(c => <li key={c.id}>
                        <a href={c.url}>{c.text}</a>
                      </li>)}
                  </ul>
                </div>
              </FocusTrap>
            </Modal>
          </Shade>]}
      </PoseGroup>;
  }
}

export default CreditModal;