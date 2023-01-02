import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0; padding: 0; box-sizing: border-box;
  }

  ul,ol,li{
    list-style: none;
  }

  a{
    color: inherit;
  }
`;

export default GlobalStyle;