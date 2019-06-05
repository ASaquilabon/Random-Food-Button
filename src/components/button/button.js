import React from "react";
import "./button.css"
const Button = (props) => {
    return (
      <div className="button-result">
        <button 
        onClick={props.handleClick}
        href="#result-section">RANDOMIZE
        </button>
        <div className="random-result">
          <h1>{props.item}</h1>
        </div>
      </div>
      
    );
  }
export default Button;
