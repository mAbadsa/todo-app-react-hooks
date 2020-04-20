import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default initialTodos => {
    const [todos, setTodo] = useState(initialTodos);
    return {
        todos,
        addTodo: (newTodo) => {
            if (newTodo === "") {
              return;
            }
            setTodo([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
        },
        removeTodo: (todoId) => {
            // Filter todo by id
            const updateTodo = todos.filter((todo) => todo.id !== todoId);
            // Call setTodo with new todo
            setTodo(updateTodo);
          },
        toggleTodo: (todoId) => {
            const updateTodo = todos.map((todo) => {
            return todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : todo;
            });
            setTodo(updateTodo);
        },
        editTodo: (todoId, newTask) => {
            const updateTodo = todos.map((todo) => {
              return todo.id === todoId ? { ...todo, task: newTask } : todo;
            });
            setTodo(updateTodo);
        }
    }
}