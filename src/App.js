import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";
import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import Resume from "./resources/Resume.pdf";
import Bytes from "./resources/bytes.png";
import TargetPopper from "./resources/target_popper.png";
import RastaImagery from "./resources/rasta_imagery.png";
import GitHub from "./resources/github.png";
import LinkedIn from "./resources/linkedin.gif";

// Create Projects page should be able to be accessed from the nav bar
// create a carousel of images would like to make it myself
// different buttons will show different projects
// mess around with floor fade with descriptions in the faded area

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Nav className="navBarLinks">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#projects">Projects</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
        </Nav>
      </Navbar>
      <div id="body">
        <Route exact path="/">
          <Home
            props={
              (Resume, Bytes, TargetPopper, RastaImagery, GitHub, LinkedIn)
            }
          />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </div>
    </div>
  );
}

export default App;
