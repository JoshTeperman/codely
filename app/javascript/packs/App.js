import React from 'react'
import CodeMirror from './components/Codemirror';

const App = () => {
  const options = {
    lineNumbers: true,
    tabSize: 2,
  }
  return (
    <div>
      <CodeMirror options={options} language={'javascript'} />
      <p>Index (App) Component</p>
    </div>
  )
}

export default App;
