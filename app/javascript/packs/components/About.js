import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/challenges">View All Challenges</Link>
      <Link to="/challengesnew">New Challenge</Link>
    </div>
  );
};

export default About;
