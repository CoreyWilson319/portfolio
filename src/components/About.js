import React from "react";
import MediaQuery from "react-responsive";

const About = () => {
  return (
    <div id="body">
      <h1 id="title">About</h1>
      <MediaQuery minWidth={801}>
        <p id="paragraph">
          I am a graduate of General Assembly's Software Engineer Immersive
          program. After going some time of trying to self-teach myself to
          become a developer, and losing my job due to covid-19 opened the door
          for me to take the time to participate in this program. During this
          program I improved my understanding of the basics of coding as well as
          taking that knowledge further and developing full stack web
          applications. I believe that I am ready to take the leap to the next
          step and become a professional software engineer. I am soft spoken and
          reserved which allow me to work well with a team and individually. I
          am a good problem solver and am always trying to think ahead and
          possible outcomes.
        </p>
      </MediaQuery>
      <MediaQuery maxWidth={800}>
        <p id="paragraphSmallScreen">
          I am a graduate of General Assembly's Software Engineer Immersive
          program. After going some time of trying to self-teach myself to
          become a developer, and losing my job due to covid-19 opened the door
          for me to take the time to participate in this program. During this
          program I improved my understanding of the basics of coding as well as
          taking that knowledge further and developing full stack web
          applications. I believe that I am ready to take the leap to the next
          step and become a professional software engineer. I am soft spoken and
          reserved which allow me to work well with a team and individually. I
          am a good problem solver and am always trying to think ahead and
          possible outcomes.
        </p>
      </MediaQuery>
      <div id="resume">
        <a
          href="https://docs.google.com/document/d/1UQKqVzVsG6i7crBNwZEAarXnqLTfu7twLyKMQnAUHkg/edit"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
