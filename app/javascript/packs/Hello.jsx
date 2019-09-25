import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
  return <div>Hello Component</div>
}

ReactDOM.render(
  <Hello />,
  document.querySelector('#root')
  // document.body.appendChild(document.createElement('div'))
);
export default Hello
