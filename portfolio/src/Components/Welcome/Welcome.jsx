import React, { Component } from "react";
import "./Welcome.scss";
export class Welcome extends Component {
  render() {
    return (
      <div className="center" id="home">
        <h1> Welcome</h1>
        <h2>My name is Baltac Mihai-Cristian and I am a future fullstack developer, teacher and coach</h2>
        <button><p>View Projects</p></button>
      </div>
    );
  }
}

export default Welcome;
