import React from "react";
import Logo from "../../assets/Logo.png";
import "./Jumbotron.css";

const Jumbotron = () => {
    return (
      <div className="jumbo">
          <img id="Logo"src={Logo} alt="Logo"/>
      </div>
      
    );
  }
export default Jumbotron;