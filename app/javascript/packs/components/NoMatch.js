import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NoMatch = ({ location: { pathname }}) => {
  return (
      <h1>No page found at address "{pathname}"</h1>
  );
}

export default withRouter(NoMatch);
