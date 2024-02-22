import React, { PropTypes, PureComponent } from "react";
import Title from "../Title";
import Faq from "../Faq";
import Ask from "../Ask";
import Finish from "../Finish";
import Address from "../Address";
import Popup from "../Popup";
import Steps from "../Steps";
import Warning from "../Warning";

import cx from "classnames";

import Tokens from "../../containers/Tokens";
import Countdown from "../../containers/Countdown";
import Transactions from "../../containers/Transactions";
import warning from "../../data/warning";
import terms from "../../data/terms";

import "./Main.css";

const steps = [
  {
    title: "Send the desired ETH amount to presale smart contract address",
    component: <Warning {...warning} />
  },
  {
    title: "After Ethereum transaction confirmation <br /> preICO SPT tokens will be credited to your ETH address",
    component: <Transactions />
  }
];

export default class Main extends PureComponent {
  state = {
    popupVisible: false
  };

  static propTypes = {
    salesFinished: PropTypes.bool,
    termsAccepted: PropTypes.bool,
    balanceLoaded: PropTypes.bool,
    balance: PropTypes.string,
    acceptTerms: PropTypes.func,
    getBalance: PropTypes.func,
    timeLoading: PropTypes.bool
  };

  togglePopup = () => this.setState({ popupVisible: !this.state.popupVisible });

  onPopupBtnClick = e => {
    const { acceptTerms } = this.props;
    e.preventDefault();
    this.togglePopup();
    acceptTerms();
  };

  render() {
    const {
      salesFinished,
      termsAccepted,
      balanceLoaded,
      balance,
      timeLoading
    } = this.props;
    const { popupVisible } = this.state;
    return (
      <main className={cx("main", { main_loading: timeLoading })}>
        <div className="main__title">
          <Title size="big">SONM tokens presale</Title>
        </div>
        {salesFinished &&
          <div className="main__finish">
            <Finish>SONM presale has finished</Finish>
          </div>}
        {!salesFinished &&
          <div className="main__wrapper">
            <div className="main__info">
              <div className="main__tokens">
                <Tokens />
              </div>
              <div className="main__timer">
                <Countdown />
              </div>
            </div>
            <div className="main__address">
              <Address
                title="SONM Presale smart contract address"
                text="Show SONM Presale deposit address"
                onBtnClick={this.togglePopup}
                termsAccepted={termsAccepted}
              />
            </div>
            {termsAccepted &&
              <div className="main__steps">
                <Steps list={steps} />
              </div>}
            {!balance}
          </div>}
        <div id="faq" className="main__faq">
          <Faq />
        </div>
        <div className="main__ask">
          <Ask />
        </div>
        {popupVisible &&
          <div className="main__popup">
            <Popup
              onCloseClick={this.togglePopup}
              onBtnClick={this.onPopupBtnClick}
              content={terms}
            />
          </div>}
      </main>
    );
  }
}
