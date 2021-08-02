import React, { Component } from "react";
import "./Navbar.scss";
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked() {
    const docToModify = document.getElementById("links");
    
    if (!this.state.clicked) {
      docToModify.style.display = "flex";
    } else {
      docToModify.style.display = "none";
    }
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className="navbar">
        <div className="menu" onClick={this.handleClicked}>
          <div className="menuburger"></div>
          <div className="menuburger"></div>
          <div className="menuburger"></div>
          <div className="links" id="links">
            <a href="#home">Home</a>
            <a href="">Experience</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
