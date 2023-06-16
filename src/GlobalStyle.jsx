import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0; 
    padding:0;
    word-break:keep-all
  
  }
  html, body{
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  #root{
    width: 100%;
    height:100%;
  }
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.3;
    
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
