import React, { Component } from "react";
import "./Menu.scss";
import code from "../../Photos/code.png";
import phone from "../../Photos/phone.png";
import support from "../../Photos/support.png";
import sa from "../../Photos/sa.png";
import Navbar from "../Navbar/Navbar";
import { DATA } from "../../shared/projects";

const AboutPage = (props) => {
  return (
    <div className="column-menu">
      <div className="aboutme">
        <div className="row">
          <h1>
            <strong>Ab</strong>out me
          </h1>
          <Navbar
            clickPortfolio={props.clickPortfolio}
            clickAbout={props.clickAbout}
          />
        </div>

        <p>
          I am a person eager and enthusiastic to discover and learn new things.
          The projects that help me evolve constantly are SISC ( Sindicatul
          Studentilor din Cibernetică) where I contribute as Front End developer
          and MLSA ASE (Microsoft Learn Student Ambassadors Academy of Economic
          Studies) where I am a Solution Architect.
        </p>
      </div>

      <div className="doing">
        <h1>What I'm doing</h1>
        <div className="cards">
          <div className="card">
            <div className="left">
              <img src={code} alt="icon" className="icon" />
            </div>
            <div className="right">
              <h3>Web development </h3>
              <p>
                Able to create beautiful web applications using
                React,Redux,Sass,Html 5,Css 3 and Bootstrap
              </p>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <img src={sa} alt="icon" className="icon-mid" />
            </div>
            <div className="right">
              <h3>Solution Architect</h3>
              <p>
                Able to evaluating an organization's business needs and
                determining how IT can support those needs leveraging software.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <img src={phone} alt="icon" className="icon-min" />
            </div>
            <div className="right">
              <h3>Responsive design</h3>
              <p>
                Able to create mobile Responsive apps at a professional level
              </p>
            </div>
          </div>

          <div className="card">
            <div className="left">
              <img src={support} alt="icon" className="icon-min" />
            </div>
            <div className="right">
              <h3>Strong support</h3>
              <p>Able to comunicate ideas in a brief way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tags = (props) => {
  let x = 0;
  return props.tags.map((tag) => {
    return <p key={x++}>{tag}</p>;
  });
};
const Projects = (props) => {
  return props.projects.map((project) => {
    return (
      <div className="project">
        
        <img
          src={project.img}
          alt={project.name}
          id={"img-" + project.id}
          className="pj-img"
        />
        <div className="click" id={"to-" + project.id}>
          <h1>{project.name}</h1>
          <p className="close" id="close">
            X
          </p>
          <p>{project.description}</p>
          <h2>Technologies used</h2>
          <div className="row">
            <Tags tags={project.tags} />
          </div>
          <div className="links">
            <a href={project.links.site}>See The Website</a>
            <a href={project.links.code}>See the Code</a>
          </div>
        </div>
      </div>
    );
  });
};
class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    var span = document.getElementById("close");
    document.getElementById("img-1").onclick = function () {
      document.getElementById("to-1").style.display = "flex";
    };
    document.getElementById("img-2").onclick = function () {
      document.getElementById("to-2").style.display = "flex";
    };
    document.getElementById("img-3").onclick = function () {
      document.getElementById("to-3").style.display = "flex";
    };
    document.getElementById("img-4").onclick = function () {
      document.getElementById("to-4").style.display = "flex";
    };

    span.onclick = function () {
    console.log(span);

      document.getElementById("to-1").style.display = "none";
      document.getElementById("to-2").style.display = "none";
      document.getElementById("to-3").style.display = "none";
      document.getElementById("to-4").style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == document.getElementById("to-1")) {
        document.getElementById("to-1").style.display = "none";
      }
      if (event.target == document.getElementById("to-2")) {
        document.getElementById("to-2").style.display = "none";
      }
      if (event.target == document.getElementById("to-3")) {
        document.getElementById("to-3").style.display = "none";
      }
      if (event.target == document.getElementById("to-4")) {
        document.getElementById("to-4").style.display = "none";
      }
    };
  }
  render() {
    return (
      <div className="column-menu">
        <div className="aboutme">
          <div className="row">
            <h1>
              <strong>Pro</strong>jects
            </h1>
            <Navbar
              clickPortfolio={this.props.clickPortfolio}
              clickAbout={this.props.clickAbout}
            />
          </div>
        </div>
        <div className="listofprojects">
          <Projects projects={this.props.projects} />
        </div>
      </div>
    );
  }
}
export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPage: true,
      projects: DATA,
    };
    this.toPortfolio = this.toPortfolio.bind(this);
    this.toAbout = this.toAbout.bind(this);
  }

  toPortfolio = () => {
    this.setState({ firstPage: false });
  };
  toAbout = () => {
    this.setState({ firstPage: true });
  };

  render() {
    if (this.state.firstPage == true)
      return (
        <div>
          <AboutPage
            clickPortfolio={this.toPortfolio}
            clickAbout={this.toAbout}
          />
        </div>
      );
    else
      return (
        <div>
          <ProjectPage
            clickPortfolio={this.toPortfolio}
            clickAbout={this.toAbout}
            projects={this.state.projects}
          />
        </div>
      );
  }
}

export default Menu;
