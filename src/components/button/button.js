import React from "react";
import "./button.css"
const Button = (props) => {
    return (
      <div className="button-result">
          <button id="eat"
          onClick={props.handleClick}
          >Let's Eat
          </button>
      </div>
      
    );
  }
export default Button;
