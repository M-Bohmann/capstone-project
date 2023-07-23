import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  
  }

  :root{
    --primary-color: #f5f5dc;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color:#C1D8B5;
   }
  
   h1{ 
    margin-top: 0;
    margin-bottom:0;
    text-align: center;
    background-color: var(--primary-color);
    padding: 5px 0 5px 0;
  }
`;
