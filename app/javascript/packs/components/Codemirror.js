import React, { useEffect, useState, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

const CodeMirror = ({ options, language }) => {
  require(`codemirror/mode/${language}/${language}`);
  const inputElement = useRef();
  const editor = useRef();
  const [code, setCode] = useState('initial value');

  useEffect(() => {
    editor.current = Codemirror.fromTextArea(inputElement.current, options)
    setCode(editor.current.getValue())
  }, [options]);

  useEffect(() => {
    console.log('code value changed', { code });
  }, [code])

  const handleSubmit = (event, editor) => {
    event.preventDefault()
    const currentCode = editor.current.getValue()
    if (code !== currentCode) { setCode(currentCode) }
  }

  return (
    <>
    <form>
      <label>CodeMirror Form</label>
      <textarea ref={inputElement} defaultValue="Write some code ..." />
      <button onClick={(event) => handleSubmit(event, editor)}>Submit</button>
    </form>
    </>
  );
};

export default CodeMirror;
