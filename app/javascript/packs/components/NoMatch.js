import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = ({ location: { pathname }}) => {
  return (
    <>
      <h1>No page found at address "{pathname}"</h1>
      <Link to="/">Return Home</Link>
    </>
  );
}

export default NoMatch;
