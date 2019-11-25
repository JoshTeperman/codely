import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import Form from '../components/common/Form';
import InputField from '../components/common/InputField';
import Button from '../components/common/Button';

import { CREATE_CHALLENGE } from './graphql/mutations/createChallenge';

const NewChallengeForm = () => {

  const [name, setName] = useState('New Challenge');
  const [description, setDescription] = useState('Challenge Description');
  const [language, setLanguage] = useState('Javascript');

  const [ createChallenge, { data } ] = useMutation(CREATE_CHALLENGE);

  const handleSubmit = e => {
    e.preventDefault()
    console.log({name, description, language});
    createChallenge({variables: { name, description, language }})
  };

  return (
    <Form>
      <span>Title</span>
      <InputField
        placeholder="Title"
        defaultValue="New Challenge"
        required
        onChange={e => setName(e.target.value)}
      />
      <span>Description</span>
      <InputField
        placeholder="Description"
        defaultValue="Challenge Description"
        required
        onChange={e => setDescription(e.target.value)}
      />
      <span>Languge</span>
      <InputField
        placeholder="Javascript"
        defaultValue="Javascript"
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

export default withRouter(NewChallengeForm);
