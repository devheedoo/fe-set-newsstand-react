import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import Colors from "./Colors";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  ul {
    list-style: none;
  }

  ul,li {
    margin: 0;
    padding: 0;
  }

  button {
    appearance: none;
    border-radius: 0;
  }

  ${Colors};
`;

console.log(GlobalStyle);

export default GlobalStyle;
