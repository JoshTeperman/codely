import React, { useEffect, useState, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

const CodeMirror = ({ options, language }) => {
  require(`codemirror/mode/${language}/${language}`);
  const inputElement = useRef();
  const [codeValue, setCodeValue] = useState('initial value');

  useEffect(() => {
    const myCodeMirror = Codemirror.fromTextArea(inputElement.current, options)
    setCodeValue(myCodeMirror.getValue())
  }, [options]);

  useEffect(() => {
    console.log(codeValue);
  }, [codeValue])

  const handleSubmit = (event, textArea) => {
    event.preventDefault()
    console.log(textArea.current.value);
  }

  const handleChange = () => {
    console.log('changed')
    setCodeValue('HELLO')
  }

  return (
    <>
    <form action="#" >
      <label>CodeMirror Form</label>
      <textarea onChange={() => handleChange} ref={inputElement} defaultValue="Write some code ..." />
      <input type="submit" value="Submit" onClick={(event) => handleSubmit(event, inputElement)} />
    </form>
    </>
  );
};

export default CodeMirror;
