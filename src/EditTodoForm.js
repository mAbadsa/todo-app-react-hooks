import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import { green, red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

function EditTodoForm(props) {
    const [todo, setTodo] = useState(props.task);
  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
          props.handleEdit(props.id, todo);
          props.toggle();
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={9}>
            <TextField
                autoFocus
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                fullWidth
            />
          </Grid>
          <Grid item xs={3} container justify="space-around">
            <Grid>
              <IconButton
                onClick={props.toggle}
                style={{ backgroundColor: "#fff" }}
                size="small"
                aria-label="cancel"
              >
                <Clear fontSize="small" style={{ color: red[500] }} />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton
                type="submit"
                style={{ backgroundColor: "#fff" }}
                size="small"
                aria-label="ok"
              >
                <Check fontSize="small" style={{ color: green[500] }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default EditTodoForm;
