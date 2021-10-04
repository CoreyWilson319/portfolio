import React from "react";
import "../App.css";
import { Card, Button } from "react-bootstrap";
import Resume from "../resources/Resume.pdf";
import Bytes from "../resources/bytes.png";
import TargetPopper from "../resources/target_popper.png";
import RastaImagery from "../resources/rasta_imagery.png";
import GitHub from "../resources/github.png";
import LinkedIn from "../resources/linkedin.gif";
import MediaQuery from "react-responsive";

// future for mobile change cards to center better
const Home = () => {
  let rastaImagerDescription = (
    <p>
      {" "}
      This project was done for a friend as my first freelance gig, this was
      made near the end half of my bootcamp. To show some photographs of the
      photagraphers collection and takes inquiries. At the moment RastaImagery
      only uses React, javascript, bootstrap and a few other modules.
    </p>
  );
  let bytesDescription = (
    <p>
      Bytes is still a work in progress but it's my latest fullstack project
      that I'm very proud of. It's a fully functioning full stack app that has
      working authentication. The purpose of it is to find random meals to make
      to help enjoyable meals that I wouldn't have looked for on my own. Bytes
      is built using a MERN stack, and using the Spoonacular api. I used
      suggestions from my own friends and family to improve upon the inital idea
      for the project. I personally get tired of eating the same things and I
      like to explore in the kitchen. So Bytes purpose is to expose the user to
      a variety of dishes to increase the variety of foods they consume.
    </p>
  );
  let targetPopperDescription = (
    <p>
      To keep coding I joined a hackathon for mintbean.io and created this in a
      few days. It's a simple game with a landing page made with javascript,
      html and css. Using these technologies to create a game without a
      framework, I learned a lot in the short time frame. It's only built with
      javascript, html and css.
    </p>
  );
  let rastaImageryRepo = "https://github.com/CoreyWilson319/rasta-imagery";
  let targetPopperRepo = "https://github.com/CoreyWilson319/target-popper";
  let bytesRepo = "https://github.com/CoreyWilson319/meal_planner";
  return (
    <>
      <br />
      <div id="body">
        <MediaQuery minWidth={801}>
          <img
            id="portraitLargeScreen"
            src="https://avatars.githubusercontent.com/u/72322079?s=400&u=ca5a1b6ce956fce8d8945fe18e83fb98cdba8dbc&v=4"
          ></img>
        </MediaQuery>
        <MediaQuery minWidth={400} maxWidth={800}>
          <img
            id="portrait"
            src="https://avatars.githubusercontent.com/u/72322079?s=400&u=ca5a1b6ce956fce8d8945fe18e83fb98cdba8dbc&v=4"
          ></img>
        </MediaQuery>
        <h1 id="name">Corey Wilson</h1>
        <p id="statement">
          I'm a thinker and a software engineer, my goal is to do the best that
          I can do and be happy with the product I put forth and make someones
          life a little easier.
        </p>
        <h2 id="title">Software Engineer</h2>
        <ul class="socials">
          <li>
            <a target="_blank" href={Resume}>
              Resume
            </a>
          </li>
          <li>
            <img id="githubLogo" src={GitHub}></img>
            <a target="_blank" href="https://github.com/CoreyWilson319">
              Github
            </a>
          </li>
          <li>
            <img id="linkedInLogo" src={LinkedIn}></img>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/corey-wilson-3955441b6/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto: coreywilson319@gmail.com">
              Coreywilson319@gmail.com
            </a>
          </li>
        </ul>
        <MediaQuery minWidth={801}>
          <div class="projects" id="projects">
            <div id="card">
              <Card className="mb-2" border="dark" text="dark">
                <Card.Img src={Bytes} />
                <Card.Body>
                  <Card.Title>Bytes</Card.Title>
                  <Card.Text>{bytesDescription}</Card.Text>
                  <Card.Link
                    target="_blank"
                    href="https://quiet-chamber-78994.herokuapp.com/"
                  >
                    Link to Bytes
                  </Card.Link>
                  <Card.Link target="_blank" href={bytesRepo}>
                    Link to Bytes Repo
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div id="card">
              <Card className="mb-2" border="dark" text="dark">
                <Card.Img src={TargetPopper} />
                <Card.Body>
                  <Card.Title>Target Popper</Card.Title>
                  <Card.Text>{targetPopperDescription}</Card.Text>
                  <Card.Link
                    target="_blank"
                    href="https://gifted-bell-9d9077.netlify.app/"
                  >
                    Link to Target Popper
                  </Card.Link>
                  <Card.Link target="_blank" href={targetPopperRepo}>
                    Link to Target Popper Repo
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div id="card">
              <Card className="mb-2" border="dark" text="dark">
                <Card.Img src={RastaImagery} />
                <Card.Body>
                  <Card.Title>Rasta Imagery</Card.Title>
                  <Card.Text>{rastaImagerDescription}</Card.Text>
                  <Card.Link
                    target="_blank"
                    href="https://rasta-imagery.herokuapp.com/"
                  >
                    Link to Rasta Imagery
                  </Card.Link>
                  <Card.Link target="_blank" href={rastaImageryRepo}>
                    Link to Rasta Imagery Repo
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={400} maxWidth={800}>
          <span id="projects"></span>
          <h2 id="projectTitle">Bytes</h2>
          <img id="smallScreenImage" src={Bytes}></img>
          <p id="projectDetails">{bytesDescription}</p>
          <a
            target="_blank"
            id="projectLink"
            href="https://quiet-chamber-78994.herokuapp.com/"
          >
            Link to Bytes
          </a>
          <a target="_blank" id="projectLink" href={bytesRepo}>
            Bytes Repo
          </a>
          <h2 id="projectTitle">Target Popper</h2>
          <img id="smallScreenImage" src={TargetPopper}></img>
          <p id="projectDetails">{targetPopperDescription}</p>
          <a
            target="_blank"
            id="projectLink"
            href="https://gifted-bell-9d9077.netlify.app/"
          >
            Link to Target Popper
          </a>
          <a target="_blank" id="projectLink" href={targetPopperRepo}>
            Target Popper Repo
          </a>
          <h2 id="projectTitle">Rasta Imagery</h2>
          <img id="smallScreenImage" src={RastaImagery}></img>
          <p id="projectDetails">{rastaImagerDescription}</p>
          <a
            target="_blank"
            id="projectLink"
            href="https://rasta-imagery.herokuapp.com/"
          >
            {" "}
            RastaImagery Repo
          </a>
          <a target="_blank" id="projectLink" href={rastaImageryRepo}>
            Link to Rasta Imagery
          </a>
        </MediaQuery>
      </div>
    </>
  );
};

export default Home;
