import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eaf2f2;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  button {
    border: none;
    transition: .3s;

    :active {
      opacity: 0.7;
    }
  }

  input {
    border: none;
    background: transparent;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
`;
 
export default GlobalStyle;