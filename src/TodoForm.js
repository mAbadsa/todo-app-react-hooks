import React from "react";

import Paper from "@material-ui/core/Paper";
import { green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import Grid from "@material-ui/core/Grid";

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
          <Grid item xs={9}>
            <TextField
              value={value}
              onChange={setValue}
            //   margin="normal"
              label="Add New Todo"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton
              type="submit"
              color="primary"
              aria-label="add to todo list"
            >
              <Fab style={{ backgroundColor: green[500] }}>
                <AddIcon fontSize="large" variant="outline" style={{ color: "#fff" }}/>
              </Fab>
            </IconButton>
          </Grid>
        </Grid>
        {/* <Button type="submit" variant="outlined" color="primary">
          Add Todo
        </Button> */}
      </form>
    </Paper>
  );
}

export default TodoForm;
