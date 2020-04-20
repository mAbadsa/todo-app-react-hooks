import React from "react";

import Paper from "@material-ui/core/Paper";
import { green } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, setValue, reset] = useInputState("");
  return (
    <Paper elevation={3} style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={10}>
            <TextField
              value={value}
              onChange={setValue}
              margin="normal"
              label="Add New Todo"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
              <Fab type="submit" style={{ backgroundColor: green[500] }} size="medium" aria-label="add to todo list">
                <AddIcon fontSize="large" style={{ color: "#fff" }}/>
              </Fab>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default TodoForm;
