import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Typography */
    --h1: 4.88rem;
    --h2: 3.91rem;
    --h3: 3.13rem;
    --strong: 2.5rem;
    --p: 2rem;
    --small: 1.6rem;
    
    /* Colors */
    --color-accent: #8B9DFF;
    --bg-color: #E6F0FD;
    --dark-100: rgba(0, 0, 0, 0.05);
    --dark-500: rgba(0, 0, 0, 0.6);

    /* Helpers */
    --border-radius-900: 2.4rem;
    --shadow-200: 0 0 8px rgba(139, 157, 255, 0.2);
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

  h1, h2, h3, button, strong, a {
    font-weight: bold;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    font-size: var(--p);
    border: none;
  }

  a {
    font-size: var(--small);
    color: inherit;
  }
`;
