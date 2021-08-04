import React, { Component } from 'react'
import './Info.scss'
import Photo from '../../Photos/profile.jpg'
import linkedin from '../../Photos/linkedin.png'
import email from '../../Photos/email.png'
import location from '../../Photos/location.png'
import git from '../../Photos/git.png'

export class Info extends Component {
    render() {
        return (
            <div className="column">
                <div className="top">
                <img src={Photo}alt="Profile photo" />
                <h1>Mihai-Cristian <strong>Bâltac</strong></h1>
                <h2>Web Developer</h2>
                <div className="social">
                <a href="https://www.linkedin.com/in/baltac-mihai-cristian/"><img src={linkedin} className="logo" alt="linkedin" /></a>
                <a href="https://github.com/BaltacMihai"><img src={git}className="logo"  alt="github" /></a>
                  
                </div>
                </div>
                
                <div className="info">
                    <div className="row">
                        <img src={location} alt="location_logo" className="logo"  />
                       <p>Bucharest</p> 
                    </div>
                   
                    <div className="row">
                <img src={email} alt="email_logo"className="logo"  />
                <p>baltacmihaicristian@gmail.com</p>
                    </div>
                </div>
                <button>
                <a href="mailto:baltacmihaicristian@gmail.com">Email me</a></button>
            </div>
        )
    }
}

export default Info
