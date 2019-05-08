import React from 'react';

const foodChoices=['filipino', 'korean bbq', 'bbq', 'sushi', 'ramen', 'mexican', 'hawaiian'] 
const chosen = (arr) => {
  const item = arr[Math.floor(Math.random() * arr.length)]
  console.log(item)
}
 class Button extends React.Component {
  
  state = { }
  
  handleClick = () => {
    chosen(foodChoices)
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
        Random Food Button! 
      </button>
    );
  }
}

export default Button;