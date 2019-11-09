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
    console.log('useEffect');
  }, [options]);

  useEffect(() => {
    console.log('code value changed', { codeValue });
  }, [codeValue])

  const handleSubmit = (event) => {
    event.preventDefault()
    debugger
  }

  return (
    <>
    <form>
      <label>CodeMirror Form</label>
      <textarea ref={inputElement} defaultValue="Write some code ..." />
      <button onClick={(event) => handleSubmit(event)} onKeyPress={e => e.key === 'Enter' && e.stopPropagation() }>Submit</button>
    </form>
    </>
  );
};

export default CodeMirror;
