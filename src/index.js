import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./components/Styled/Global";

function Main() {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
