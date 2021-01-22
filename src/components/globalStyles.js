import { createGlobalStyle, keyframes } from 'styled-components';

const shimmerLoadingAnimation = keyframes`
  from { background-position: -100rem 0; }
  to { background-position: 100rem 0; }
`;

export const theme = {
  shimmerize:
    'background: var(--shimmer-gradient); background-size: var(--shimmer-size); animation: var(--shimmer-animation)',
};

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
    --color-accent: #889AFD;
    --color-accent-200: rgba(139, 157, 255, 0.15);
    --color-accent-hover: #7588E9;
    --color-accent-active: #596DD7;

    --bg-color: #E6F0FD;
    --dark-100: rgba(0, 0, 0, 0.05);
    --dark-200: rgba(0, 0, 0, 0.15);
    --dark-500: rgba(0, 0, 0, 0.6);

    --shimmer-gradient: linear-gradient(to right, #eff1f3 0%, #e2e2e2 50%, #eff1f3 100%);
    --shimmer-size: 100rem 100%;
    --shimmer-animation: ${shimmerLoadingAnimation} 2s infinite;

    /* Helpers */
    --border-radius-900: 2.4rem;
    --border-radius-500: 1.4rem;
    --border-radius-200: 0.8rem;

    --shadow-200: 0 0 8px rgba(139, 157, 255, 0.2);
    --shadow-500: 0 0 8px rgba(139, 157, 255, 0.6);
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
    font-size: var(--small);
    border: none;
  }

  a {
    font-size: var(--small);
    color: inherit;
  }
  
  input {
    border: none;
    font-family: inherit;
    font-size: var(--p);
  }

  svg {
    display: flex;
  }
`;
