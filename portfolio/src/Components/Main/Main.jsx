import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Welcome from '../Welcome/Welcome'

export class Main extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Welcome/>
            </div>
        )
    }
}

export default Main
