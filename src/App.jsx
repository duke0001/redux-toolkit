import React from "react";
import { render } from "react-dom";

import "./App.css";

import List from "./components/Slider/List";
import Buttons from "./components/Slider/Buttons";

export const App: React.FC = () => {
  return (
    <div className="App">
      <List />
      <Buttons />
    </div>
  );
};

render(<App />, document.getElementById("root"));
