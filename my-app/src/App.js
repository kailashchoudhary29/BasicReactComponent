import React, { Component } from "react";

import "./App.css";
import Todo from "./components/Todo";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Todo App!</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
