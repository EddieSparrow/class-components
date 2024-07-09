import { Component } from "react";

export default class CrashButton extends Component {
  state = {
    counter: 0,
  };
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    if (this.state.counter === 1) {
      throw new Error("I crashed!");
    }
    return (
      <div>
        <button onClick={this.handleClick}>Crash</button>
      </div>
    );
  }
}
