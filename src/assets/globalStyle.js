import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: "Noto Sans";
  }

  @font-face {
    font-family: "Noto Sans";
    src: url("./fonts/NotoSans-Regular.ttf");
  }
`;

export default GlobalStyle;
