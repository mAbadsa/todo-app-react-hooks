import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Task 1", completed: true},
    { id: 2, task: "Task 2", completed: false},
    { id: 3, task: "Task 3", completed: true},
  ];
  const [todos, setTodo] = useState(initialTodos);
  const addTodo = (newTodo) => {
    if (newTodo === "") {
      return;
    }
    setTodo([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
  }
  const removeTodo = (todoId) => {
    // Filter todo by id
    const updateTodo = todos.filter((todo) => todo.id !== todoId);
    // Call setTodo with new todo
    setTodo(updateTodo);
  };

  const toggleTodo = (todoId) => {
    const updateTodo = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodo(updateTodo);
  };

  const editTodo = (todoId, newTask) => {
    const updateTodo = todos.map((todo) => {
      return todo.id === todoId ? { ...todo, task: newTask } : todo;
    });
    setTodo(updateTodo);
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
      <Grid container justify="center">
        <Grid item xs={11} sm={8} md={6} lg={5}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
