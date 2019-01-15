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
    return (
      <div>
        <footer>
          <div className="container">
            <div className="footer-wrapper">
              <div className="logo">
                <h3>Rob Tucker</h3>
                <p onClick={this.toggleCreditModal}>Creative Commons</p>
              </div>
              <div className="social-icons">
                <a href="https://github.com/rob9095"><i className="fa fa-github" /></a>
                <a href="https://codepen.io/rob9095"><i className="fa fa-codepen" /></a>
                <a href="https://linkedin.com/in/rob9095"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </footer>
        <CreditModal
          showModal={this.state.showCreditModal}
          onToggle={this.toggleCreditModal}
        />
      </div>
    )
  }
} 