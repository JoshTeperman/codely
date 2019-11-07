import React from 'react'
import styled from 'styled-components';
import CodeMirror from './components/CodeMirror';

const App = () => {
  const options = {
    lineNumbers: true,
    tabSize: 2,
    setSize: 100,
  }
  return (
    <CodeMirror options={options} language={'javascript'} ></CodeMirror>
  )
}

export default App;
