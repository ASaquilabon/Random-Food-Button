import React from "react";

const foodChoices = [
  "filipino",
  "korean bbq",
  "bbq",
  "sushi",
  "ramen",
  "mexican",
  "hawaiian"
];
const chosen = arr => {
  const item = arr[Math.floor(Math.random() * arr.length)];
  return item;
};

class Button extends React.Component {
  state = {
    item: "Click to decide what to eat!"
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      item: chosen(foodChoices)
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random Food Button!</button>
        <div>
          <h1>{this.state.item}</h1>
        </div>
      </div>
    );
  }
}

export default Button;
