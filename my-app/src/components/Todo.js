import React, { Component } from "react";
import Todoitem from "./Todoitem";

export default class Todo extends Component {
  render() {
    return (
      <div className="todo-list">
        <Todoitem />
        <Todoitem />
        <Todoitem />
        <Todoitem />
      </div>
    );
  }
}
