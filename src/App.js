import React, { Component } from "react";
import "./App.css";
import RowContainer from "./RowContainer";
import RowContainerHooks from "./RowContainerHooks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RowContainer />
        <RowContainerHooks />
      </div>
    );
  }
}

export default App;
