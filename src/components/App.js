import React, { Component } from "react";
import "./App.css";
import Drumpads from "./Drumpads";
import Power from "./Power";
import CurrentSong from "./CurrentSong";
import SwitchBulk from "./SwitchBulk";
import { DiReact, DiGithubBadge } from "react-icons/di";

const context1 = require.context("../sounds/bulk1", false, /\.wav$/);
const context2 = require.context("../sounds/bulk2", false, /\.wav$/);

const bulk1 = context1.keys().map(file => {
  // console.log(file);
  return require(`../sounds/bulk1/${file.replace(/\.\//, "")}`);
});
const bulk2 = context2.keys().map(file => {
  // console.log(file);
  return require(`../sounds/bulk2/${file.replace(/\.\//, "")}`);
});

const bulkCollection = [bulk1, bulk2];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchBankChecked: false,
      display: "Bank1",
      isOnOff: true
    };
    // this.handleCurrentSong = this.handleCurrentSong.bind(this)
    this.handleTogglePower = this.handleTogglePower.bind(this);
    this.handleSwitchBank = this.handleSwitchBank.bind(this);
  }
  handleCurrentSong = currentSong => {
    this.setState(currentState => {
      if (currentState.display !== display) {
        return {
          display: currentSong
        };
      }
    });
  };
  handleTogglePower() {
    this.setState(currentState => {
      return {
        isOnOff: !currentState.isOnOff,
        display: currentState.isOnOff ? "" : "Bank1"
      };
    });
  }
  handleSwitchBank() {
    if (!this.state.isOnOff) return;
    this.setState(currentState => {
      return {
        isSwitchBankChecked: !currentState.isSwitchBankChecked,
        display: !currentState.isSwitchBankChecked ? "Bank2" : "Bank1"
      };
    });
  }
  render() {
    return (
      <div id="drum-machine">
        <DiReact id="react_icon" />
        <div id="main-container">
          <Drumpads
            currentBulk={bulkCollection[+this.state.isSwitchBankChecked]}
            currentSong={this.state.display}
            isOnOff={this.state.isOnOff}
            handleCurrentSong={this.handleCurrentSong}
            handleTogglePower={this.handleTogglePower}
          />
          <div id="controller">
            <div id="fcc_icon">
              <i className="fab fa-free-code-camp"></i>
              <b>
                <em>&nbsp;Drum machine</em>
              </b>
            </div>
            <Power
              handleTogglePower={this.handleTogglePower}
              isOnOff={this.state.isOnOff}
            />
            <CurrentSong currentSong={this.state.display} />
            <SwitchBulk
              handleSwitchBank={this.handleSwitchBank}
              isChecked={this.state.isSwitchBankChecked}
            />
          </div>
        </div>
        <div id="footer">
          <div>Created by Stephane Candelas</div>
          <a href="https://github.com/stephane777" target="_blank">
            <DiGithubBadge id="github_icon" />
          </a>
        </div>
      </div>
    );
  }
}
export default App;
