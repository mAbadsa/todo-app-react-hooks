import React from "react";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, setValue, reset] = useInputState("");
  return (
    <Paper elevation={3} style={{ width: "40%", margin: "2rem auto" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={setValue} />
        <button type="submit">Add Todo</button>
      </form>
    </Paper>
  );
}

export default TodoForm;
