import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addTodo(todo.trim());

    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
