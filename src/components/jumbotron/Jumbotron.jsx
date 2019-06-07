import React from "react";
import Logo from "../../assets/Logo.png";
import "./Jumbotron.css";
import Breakpoint, { BreakpointProvider } from 'react-socks';
const Jumbotron = () => {
    return (
      <div className="jumbo">
         <Breakpoint large up>
            <img id="large"src={Logo} alt="Logo"/>
        </Breakpoint>
        <Breakpoint medium>
            <img id="medium"src={Logo} alt="Logo"/>
        </Breakpoint>
        <Breakpoint small down>
            <img id="small" src={Logo} alt="Logo"/>
        </Breakpoint>
      </div>
      
    );
  }
export default Jumbotron;