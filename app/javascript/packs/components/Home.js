import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({match, history}) => {
  console.log({match});
  return (
    <div>
      <h1>Home</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/challenges">View All Challenges</Link>
      <button onClick={() => history.push('/challenges')}>click me</button>
    </div>
  );
};

export default Home;
