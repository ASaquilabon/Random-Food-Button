import React from "react";


const Button = (props) => {
    return (
      <div>
        <button onClick={props.handleClick}>Random Food Button!</button>
        <div>
          <h1>{props.item}</h1>
        </div>
      </div>
    );
  }


export default Button;
