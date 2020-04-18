import React from "react";
import CheckBox from "@material-ui/core/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ task, completed }) {
  return (
    <div>
      <ListItem>
        <CheckBox tabIndex={-1} checked={completed} />
        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? '#d5d5d5' : '#2222' }}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete todo">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit todo">
                <EditIcon />
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}

export default Todo;
