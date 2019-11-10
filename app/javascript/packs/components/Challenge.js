import React from 'react';

const Challenge = ({ challenge: { name, description, language }}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Language: {language}</p>
    </div>
  );
}

export default Challenge;