import React from "react";

const chosen = arr => {
  const item = arr[Math.floor(Math.random() * arr.length)];
  return item;
};
const foodChoices = [
  "filipino",
  "korean bbq",
  "bbq",
  "sushi",
  "ramen",
  "mexican",
  "hawaiian"
]

class Button extends React.Component {
  state = {
    item: "Click to decide what to eat!",
    foodChoices: []
  };
  // componentDidMount() {
  //   this.setState(()=>{
  //     chosen(foodChoices);
  //     foodChoices = [
  //       "filipino",
  //       "korean bbq",
  //       "bbq",
  //       "sushi",
  //       "ramen",
  //       "mexican",
  //       "hawaiian"
  //     ];
  //   })
  // }

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
