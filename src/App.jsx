import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";

import List from "./components/Slider/List";
import Buttons from "./components/Slider/Buttons";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <List />
        <Buttons />
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
