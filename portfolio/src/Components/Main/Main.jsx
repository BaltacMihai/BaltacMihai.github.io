import React, { Component } from 'react'
import { DATA } from "../../shared/projects";
import Info from '../Info/Info';
import Menu from '../Menu/Menu';
import "./Main.scss"
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projects: DATA,
        };
      }
    render() {
        return (
            <div className="container">
               <Info/>
               <Menu/>
            </div>
        )
    }
}

export default Main
