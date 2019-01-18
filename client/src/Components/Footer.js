import React, { Component } from "react";
import CreditModal from './CreditModal';

export default class Footer extends Component {
  state = {
    showCreditModal: false,
  }
  toggleCreditModal = () => {
    this.setState({ showCreditModal: !this.state.showCreditModal });
  }

  render() {
    return <div>
        <footer>
          <div className="container">
            <div className="footer-wrapper">
              <div className="logo">
                <h3>Rob Tucker</h3>
                <button className="btn-link" onClick={this.toggleCreditModal}>
                  Creative Commons
                </button>
              </div>
              <div className="social-icons">
                <a title="Github" href="https://github.com/rob9095">
                  <i className="fa fa-github" />
                </a>
                <a title="Codepen" href="https://codepen.io/rob9095">
                  <i className="fa fa-codepen" />
                </a>
                <a title="LinkedIn" href="https://linkedin.com/in/rob9095">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <CreditModal showModal={this.state.showCreditModal} onToggle={this.toggleCreditModal} />
      </div>;
  }
} 