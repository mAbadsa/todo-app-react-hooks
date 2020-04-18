import React from "react";
import CheckBox from "@material-ui/core/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ task, completed, id, handleRemove, handleToggle }) {
  return (
    <ListItem>
      <CheckBox
        tabIndex={-1}
        checked={completed}
        onClick={() => handleToggle(id)}
      />
      <ListItemText
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "rgba(0, 0, 0, 0.54)" : "#222",
        }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete todo" onClick={() => handleRemove(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit todo">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
