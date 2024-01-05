import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//mount to start the app

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//when we are running isolation and in dev mode
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
