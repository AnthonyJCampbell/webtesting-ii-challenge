import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: 0
  }

  ballsHandler = () => {
    if (this.state.balls === 3) {
      this.setState({
        balls: 0,
        strikes: 0,
      })
    } else {
      this.setState({
        balls: this.state.balls + 1
      })
    }
  }

  strikesHandler = () => {
    if (this.state.strikes >= 2) {
      this.setState({
        balls: 0,
        strikes: 0,
      })
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
  }

  foulsHandler = () => {
    if (this.state.strikes === 0) {
      this.setState({
        strikes: this.state.strikes + 1,
        fouls: this.state.fouls + 1
      })
    } else if (this.state.strikes === 1) {
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: this.state.fouls + 1
      })
    } else {
      this.setState({
        fouls: this.state.fouls + 1
      })
    }
  }

  hitsHandler = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      hits: this.state.hits + 1
    })
  }

  render() {
    return (
      <div className="App">
        <div data-testid="ballscount">number of Balls: {this.state.balls}</div>
        <button data-testid="balls" onClick={this.ballsHandler}>Ball</button><br />

        <div data-testid="strikescount">number of Strikes: {this.state.strikes}</div>
        <button data-testid="strikes" onClick={this.strikesHandler}>Strike</button><br />

        <div data-testid="foulscount">number of Fouls: {this.state.fouls}</div>
        <button data-testid="fouls" onClick={this.foulsHandler}>Foul</button><br />

        <div data-testid="hitscount">number of Hits: {this.state.hits}</div>
        <button data-testid="hits" onClick={this.hitsHandler}>Hit</button>
      </div>
    );
  }
}

export default App;
