import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <Paper
      elevation={3}
      // style={{ backgroundColor: "#a5a5a5", width: "40%", margin: "2rem auto" }}
    >
      <List>
        {props.todos.map((todo) => {
          return (
            <>
              <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                handleRemove={props.removeTodo}
                handleToggle={props.toggleTodo}
              />
              <Divider />
            </>
          );
        })}
      </List>
    </Paper>
  );
}

export default TodoList;
