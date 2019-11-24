import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../components/common/Form';

import InputField from '../components/common/InputField';
import Button from '../components/common/Button';

const handleSubmit = (event) => {
  event.preventDefault()
  console.log({name, description, language});
}

const CreateChallenge = (props) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <Form>
      <span>Title</span>
      <InputField
        placeholder="Title"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <span>Description</span>
      <InputField
        placeholder="Description"
        required
        onChange={e => setDescription(e.target.value)}
      />
      <span>Languge</span>
      <InputField
        placeholder="Javascript"
        required
        onChange={e => setLanguage(e.target.value)}
      />
      <Button
        onClick={(event) => handleSubmit(event)}
      >
        Create
      </Button>
    </Form>
  )
}

export default withRouter(CreateChallenge);