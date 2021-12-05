import React, { Component } from "react";
import Content from "./Content";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>Home</li>
            <li>Stuff</li>
            <li>Contact</li>
          </ul>
          <div className = "content">

          </div>
                     
          </div>
        
    );
  }
}
 
export default Main;