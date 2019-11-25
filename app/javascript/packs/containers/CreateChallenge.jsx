import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../components/common/Form';

import InputField from '../components/common/InputField';
import Button from '../components/common/Button';


const CreateChallenge = (props) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    console.log({name, description, language});
  };

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
        onClick={handleSubmit}
      >
        Create
      </Button>
    </Form>
  )
}

export default withRouter(CreateChallenge);
