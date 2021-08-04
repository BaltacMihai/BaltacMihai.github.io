import React, { Component } from "react";
import "./Navbar.scss";
import hamb from "../../Photos/hamb.png";
import x from "../../Photos/x.png";

const MainMenu = (props) => {
    
    
  if (props.opened == true) {
    return (
      <div className="menu">

        <button onClick={props.clickAbout}>About Me</button>
        <button onClick={props.clickPortfolio}>Projects</button>
      </div>
    );
  } else return " ";
};

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: hamb,
      opened: false,
    };
    this.changeOpen = this.changeOpen.bind(this);
  }
  changeOpen = () => {
    this.setState({ opened: !this.state.opened });
    if (this.state.img === hamb) this.setState({ img: x });
    else this.setState({ img: hamb });
  };

  render() {
    return (
      <div className="navbar">
        <MainMenu
          opened={this.state.opened}
          clickPortfolio={this.props.clickPortfolio}
          clickAbout = { this.props.clickAbout}
        />

        <img src={this.state.img} alt="hamb" onClick={this.changeOpen} />
      </div>
    );
  }
}

export default Navbar;
