import React, { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

const Codemirror = ({ options, language, }) => {
  const inputElement = useRef();

  require(`codemirror/mode/${language}/${language}`);

  useEffect(() => {
    CodeMirror.fromTextArea(inputElement.current, options)
  }, [options]);

  return (
    <textarea ref={inputElement} defaultValue="New note ..." />
  );
};

export default Codemirror;

// import CodeMirror from './components/Codemirror';
// <CodeMirror options={options} language={'javascript'} />
