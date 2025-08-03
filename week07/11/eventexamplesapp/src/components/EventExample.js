import React, { Component } from "react";

class EventExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  handleClick() {
    this.increment();
    this.sayHello();
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (message) => {
    alert("Message: " + message);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ marginBottom: "30px" }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleSyntheticEvent}>Synthetic Event (onClick)</button>
      </div>
    );
  }
}

export default EventExample;
