import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList(props) {
  return props.todos.length === 0 ? (
    <Paper elevation={3}>
      <List>
        <ListItem>
          <ListItemText>Enter your tasks...</ListItemText>
        </ListItem>
      </List>
    </Paper>
  ) : (
    <Paper
      elevation={3}
      // style={{ backgroundColor: "#a5a5a5", width: "40%", margin: "2rem auto" }}
    >
      <List>
        {props.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Todo
                id={todo.id}
                task={todo.task}
                // key={todo.id}
                completed={todo.completed}
                handleRemove={props.removeTodo}
                handleToggle={props.toggleTodo}
                editTodo={props.editTodo}
              />
              <Divider />
            </div>
          );
        })}
      </List>
    </Paper>
  );
}

export default TodoList;
