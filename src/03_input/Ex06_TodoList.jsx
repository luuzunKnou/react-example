import React, { Component } from "react";

class Ex06_TodoList extends Component {
  render() {
    const todoList = [
      { taskName: "Study", finished: false },
      { taskName: "Listening Music", finished: false },
      { taskName: "Sleep", finished: true },
      { taskName: "Exercise", finished: true },
      { taskName: "Watch TV", finished: true },
    ];
    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>
            {todo.taskName} : {todo.finished ? "Complete" : "Wait"}
          </div>
        ))}
      </div>
    );
  }
}

export default Ex06_TodoList;
