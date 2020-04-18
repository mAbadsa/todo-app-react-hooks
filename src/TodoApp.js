import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Task 1", completed: true },
    { id: 2, task: "Task 2", completed: false },
    { id: 3, task: "Task 3", completed: true },
  ];
  const [todos, setTodo] = useState(initialTodos);
  const addTodo = (newTodo) => {
    setTodo([...todos, { id: 4, task: newTodo, completed: false }]);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            TODO WITH HOOKS
          </Typography>
        </Toolbar>
      </AppBar>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
