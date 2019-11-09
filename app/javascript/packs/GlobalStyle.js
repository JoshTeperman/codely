import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0%;
    box-sizing: border-box;
    height: 100vh;
    background: #ddd;
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  .CodeMirror {
    max-width: 90vw;
    min-width: 50vw
  }

  .CodeMirror-sizer {
    margin-left: 30px;
  }
`;

export default GlobalStyle;
