import React from 'react';
import PropTypes from 'prop-types';

const Challenge = ({ challenge: { name, description, language }}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Language: {language}</p>
    </div>
  );
}

Challenge.propTypes = {
  challenge: PropTypes.object.isRequired,
};

export default Challenge;