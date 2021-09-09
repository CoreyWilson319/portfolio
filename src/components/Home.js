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
  return (
    <>
      <div id="body">
        <img
          id="portrait"
          src="https://avatars.githubusercontent.com/u/72322079?s=400&u=ca5a1b6ce956fce8d8945fe18e83fb98cdba8dbc&v=4"
        ></img>
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
                  <Card.Text>
                    Bytes is still a work in progress but it's my latest
                    fullstack project that I'm very proud of. It's a fully
                    functioning full stack app that has working authentication.
                    The purpose of it is to find random meals to make to help
                    enjoyable meals that I wouldn't have looked for on my own.
                  </Card.Text>
                  <Card.Link
                    target="_blank"
                    href="https://quiet-chamber-78994.herokuapp.com/"
                  >
                    Link to Bytes
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div id="card">
              <Card className="mb-2" border="dark" text="dark">
                <Card.Img src={TargetPopper} />
                <Card.Body>
                  <Card.Title>Target Popper</Card.Title>
                  <Card.Text>
                    To keep coding I joined a hackathon for mintbean.io and
                    created this in a few days. It's a simple game with a
                    landing page made with javascript, html and css. Using these
                    technologies to create a game without a framework, I learned
                    a lot in the short time frame.
                  </Card.Text>
                  <Card.Link
                    target="_blank"
                    href="https://gifted-bell-9d9077.netlify.app/"
                  >
                    Link to Target Popper
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div id="card">
              <Card className="mb-2" border="dark" text="dark">
                <Card.Img src={RastaImagery} />
                <Card.Body>
                  <Card.Title>Rasta Imagery</Card.Title>
                  <Card.Text>
                    This project was done for a friend as my first freelance
                    gig, this was made near the end half of my bootcamp. To show
                    some photographs of the photagraphers collection and takes
                    inquiries.
                  </Card.Text>
                  <Card.Link
                    target="_blank"
                    href="https://rasta-imagery.herokuapp.com/"
                  >
                    Link to Rasta Imagery
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={800}>
          <div class="projects" id="projects">
            <div id="cardSmallScreen">
              <Card className="mb-2" border="dark" text="dark">
                <Card.Img src={Bytes} />
                <Card.Body>
                  <Card.Title>Bytes</Card.Title>
                  <Card.Text>
                    Bytes is still a work in progress but it's my latest
                    fullstack project that I'm very proud of. It's a fully
                    functioning full stack app that has working authentication.
                    The purpose of it is to find random meals to make to help
                    enjoyable meals that I wouldn't have looked for on my own.
                  </Card.Text>
                  <Card.Link
                    target="_blank"
                    href="https://quiet-chamber-78994.herokuapp.com/"
                  >
                    Link to Bytes
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div id="cardSmallScreen">
              <Card className="mb-2" border="dark" text="dark">
                <Card.Img src={TargetPopper} />
                <Card.Body>
                  <Card.Title>Target Popper</Card.Title>
                  <Card.Text>
                    To keep coding I joined a hackathon for mintbean.io and
                    created this in a few days. It's a simple game with a
                    landing page made with javascript, html and css. Using these
                    technologies to create a game without a framework, I learned
                    a lot in the short time frame.
                  </Card.Text>
                  <Card.Link
                    target="_blank"
                    href="https://gifted-bell-9d9077.netlify.app/"
                  >
                    Link to Target Popper
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div id="cardSmallScreen">
              <Card className="mb-2" border="dark" text="dark">
                <Card.Img src={RastaImagery} />
                <Card.Body>
                  <Card.Title>Rasta Imagery</Card.Title>
                  <Card.Text>
                    This project was done for a friend as my first freelance
                    gig, this was made near the end half of my bootcamp. To show
                    some photographs of the photagraphers collection and takes
                    inquiries.
                  </Card.Text>
                  <Card.Link
                    target="_blank"
                    href="https://rasta-imagery.herokuapp.com/"
                  >
                    Link to Rasta Imagery
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </MediaQuery>
      </div>
    </>
  );
};

export default Home;
