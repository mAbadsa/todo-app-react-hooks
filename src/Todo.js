import React from "react";
import CheckBox from "@material-ui/core/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggle from "./hooks/useToggle";
import EditTodoForm from './EditTodoForm';

function Todo({ task, completed, id, handleRemove, handleToggle, editTodo }) {
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm toggle={toggle} task={task} handleEdit={editTodo} id={id}/>
      ) : (
        <>
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
            <IconButton
              aria-label="Delete todo"
              onClick={() => handleRemove(id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit todo" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
