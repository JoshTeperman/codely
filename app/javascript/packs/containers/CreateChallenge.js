import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [language, setLanguage] = useState('');

const handleSubmit = (event) => {
  event.preventDefault()
  // CreateChallenge mutation
}

const CreateChallenge = () => (
  <>
    //Name
    <textfield
      onChange={event => setName(event.target.value)}
      defaultValue="Choose a sweet name for your challenge..."
    />
    //Description
    <textarea
      onChange={event => setDescription(event.target.value)}
      defaultValue="Describe you challenge..."
    />
    //Language
    <textfield
      onChange={event => setLanguage(event.target.value)}
      defaultValue="What language..."
      // needs to be a <select> field
    />
    //Submit
    <button
      onClick={(event) => handleSubmit(event)}
    >
      Create
    </button>
  </>
);

export default withRouter(CreateChallenge);
