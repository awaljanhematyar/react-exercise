import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  // آیا Todo edit mode کې دی؟
  const [isEditable, setIsEditable] = useState(false);

  // د Todo text
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // functions له Context څخه اخلو
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  // Edit شوی Todo save کوي
  const saveTodo = () => {
    // که text خالي وي
    if (!todoMsg.trim()) {
      return;
    }

    // App.jsx ته نوی text واستوه
    updateTodo(todo.id, todoMsg.trim());

    // Edit mode بند کړه
    setIsEditable(false);
  };

  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-lg
        bg-purple-200
        px-3
        py-2
        shadow
      ">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="
          h-5
          w-5
          cursor-pointer
        "
      />

      {/* Todo text */}
      <input
        type="text"
        value={todoMsg}
        readOnly={!isEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`
          w-full
          bg-transparent
          outline-none

          ${todo.completed ? "line-through text-gray-500" : "text-black"}
        `}
      />

      {/* Edit / Save button */}
      <button
        disabled={todo.completed}
        onClick={() => {
          // که Edit mode وي
          // Save یې کړه
          if (isEditable) {
            saveTodo();
          }

          // که Edit mode نه وي
          // Edit mode شروع کړه
          else {
            setIsEditable(true);
          }
        }}
        className="
          rounded-md
          bg-white
          px-3
          py-2
          shadow
          disabled:cursor-not-allowed
          disabled:opacity-50
        ">
        {isEditable ? "💾" : "✏️"}
      </button>

      {/* Delete button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="
          rounded-md
          bg-white
          px-3
          py-2
          shadow
        ">
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
