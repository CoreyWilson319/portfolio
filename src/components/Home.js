import React from "react";
import "../App.css";
import { Card, Button } from "react-bootstrap";
import Resume from "../resources/Resume.pdf";
import Bytes from "../resources/bytes.png";
import TargetPopper from "../resources/target_popper.png";
import RastaImagery from "../resources/rasta_imagery.png";

const Home = () => {
  return (
    <div id="body">
      <img
        id="portrait"
        src="https://avatars.githubusercontent.com/u/72322079?s=400&u=ca5a1b6ce956fce8d8945fe18e83fb98cdba8dbc&v=4"
      ></img>
      <h1 id="name">Corey Wilson</h1>
      <h2 id="title">Software Engineer</h2>
      <ul class="socials">
        <li>
          <a target="_blank" href={Resume}>
            Resume
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/CoreyWilson319">
            Github
          </a>
        </li>
        <li>
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
      <p id="about">
        I am a graduate of General Assembly's Software Engineer Immersive
        program. After going some time of trying to self-teach myself to become
        a developer, and losing my job due to covid-19 opened the door for me to
        take the time to participate in this program. During this program I
        improved my understanding of the basics of coding as well as taking that
        knowledge further and developing full stack web applications. I believe
        that I am ready to take the leap to the next step and become a
        professional software engineer. I am soft spoken and reserved which
        allow me to work well with a team and individually. I am a good problem
        solver and am always trying to think ahead and possible outcomes.
      </p>

      <div class="projects">
        <div id="card">
          <Card className="mb-2" border="dark" text="dark">
            <Card.Img src={Bytes} />
            <Card.Body>
              <Card.Title>Bytes</Card.Title>
              <Card.Text>Text about Project Here</Card.Text>
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
              <Card.Text>Text about Project Here</Card.Text>
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
              <Card.Text>Text about Project Here</Card.Text>
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
    </div>
  );
};

export default Home;
