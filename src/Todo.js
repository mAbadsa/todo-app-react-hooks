import React from "react";

function Todo({ task, completed }) {
  return (
    <div>
      <p>{task}</p>
    </div>
  );
}

export default Todo;