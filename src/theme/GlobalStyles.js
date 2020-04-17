import { createGlobalStyle, withTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Montserrat, sans-serif;
    touch-action: manipulation;
  }
  
  *::selection {
    background: rgba(12, 242, 35, 0.2);
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: Montserrat, sans-serif;
    color: rgb(45, 45, 45);
    overflow-y: visible;
  }
  
  html {
    font-size: 62.5%;
    //overflow-y: scroll;
    
  }
`;

export default withTheme(GlobalStyle);