import React from "react";
import MediaQuery from "react-responsive";

const Skills = () => {
  return (
    <div>
      <h1 id="title">What Can I Do?</h1>
      <MediaQuery minWidth={801}>
        <p id="paragraph">
          I'm familiar with using linux and windows operating systems linux
          being what I use the most as of now. I'm proficient in both python and
          javascript. I've used both MERN and PERN stacks for projects however
          I'm more familiar with MERN. At the moment I'm learning AWS and trying
          to find time to begin learning Java. I regularly use node.js, reactjs,
          git, and fullstack development and have used Heroku, Netlify and
          Github Pages. If you've tried looking at my projects and it's taking a
          while to load you can try refreshing Heroku can be incredibly slow at
          times.
        </p>
      </MediaQuery>
      <MediaQuery maxWidth={800}>
        <p id="paragraphSmallScreen">
          I'm familiar with using linux and windows operating systems linux
          being what I use the most as of now. I'm proficient in both python and
          javascript. I've used both MERN and PERN stacks for projects however
          I'm more familiar with MERN. At the moment I'm learning AWS and trying
          to find time to begin learning Java. I regularly use node.js, reactjs,
          git, and fullstack development and have used Heroku, Netlify and
          Github Pages. If you've tried looking at my projects and it's taking a
          while to load you can try refreshing Heroku can be incredibly slow at
          times.
        </p>
      </MediaQuery>
    </div>
  );
};

export default Skills;
