import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: '#F3F8FE';
    --h1: 4.88rem;
    --h2: 3.91rem;
    --h3: 3.13rem;
    --strong: 2.5rem;
    --p: 2rem;
    --small: 1.6rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    // 1rem = 10px -> 10/16 = 62.5%
    font-size: 62.5%;
  }

  body {
    background: var(--bg-color);
    font-family: 'Poppins', sans-serif;
  }

  .width-delimiter {
    max-width: 1080px;
    padding: 0 1rem;
    margin: auto;
  }

  h1 { font-size: var(--h1); }
  h2 { font-size: var(--h2); }
  h3 { font-size: var(--h3); }
  strong { font-size:  var(--strong); }
  p { font-size: var(--p); }
  small { font-size:  var(--small); }

  h1, h2, h3, button, strong {
    font-weight: bold;
  }

  button {
    cursor: pointer;
    font-size: var(--p);
  }
`;
