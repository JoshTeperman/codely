import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const handleSubmit = (event) => {
  event.preventDefault()
}

const CreateChallenge = (props) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <>
      //Name
      <h1 style={{color: 'red'}}>Hello</h1>
      <textfield
        onChange={event => setName(event.target.value)}
        defaultValue="Choose a sweet name for your challenge..."
      />
      //Description
      <textarea
        onChange={event => setDescription(event.target.value)}
      />
      //Language
      <textfield
        onChange={event => setLanguage(event.target.value)}
        defaultValue="What language..."
      />
      //Submit
      <button
        onClick={(event) => handleSubmit(event)}
      >
        Create
      </button>
    </>
  )
}

export default withRouter(CreateChallenge);
