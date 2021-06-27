import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    background: #f8f8f8;
    color: #29292e;
  }

  body, input, button, textarea{
    font: 400 1.6rem 'Roboto', sans-serif;
  }

  @media (max-width: 1024px) { 
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 320px) {
    html {
      font-size: 45%;
    }
  }
`;