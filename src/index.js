import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./components/Styled/Global";

const NewsStore = createContext();

function Main() {
  return (
    <NewsStore.Provider>
      <GlobalStyle />
      <App />
    </NewsStore.Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
