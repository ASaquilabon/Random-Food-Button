import React from "react";
import Logo from "../../assets/Logo.png";
import "./Jumbotron.css";
import Breakpoint, { BreakpointProvider } from 'react-socks';
const Jumbotron = () => {
    return (
      <div className="jumbo">
         <Breakpoint large up>
            <img class="Logo"src={Logo} alt="Logo"/>
        </Breakpoint>
        <Breakpoint medium down>
            <img id="Logo"src={Logo} alt="Logo"/>
        </Breakpoint>
      </div>
      
    );
  }
export default Jumbotron;