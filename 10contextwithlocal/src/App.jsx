import { useEffect, useState } from "react";

import { TodoContext } from "./context/TodoContext";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  /*
    =========================
    TODOS STATE
    =========================

    App شروع شي.

    لومړی localStorage ګورو.

    که زاړه Todos موجود وي
    بېرته یې راوړو.

    که نه وي:
    []
  */

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [];
  });

  /*
    =========================
    ADD TODO
    =========================
  */

  const addTodo = (todoText) => {
    // نوی Todo object
    const newTodo = {
      id: Date.now(),

      todo: todoText,

      completed: false,
    };

    // نوی Todo
    // زاړه todos ته اضافه کړه
    setTodos((oldTodos) => [newTodo, ...oldTodos]);
  };

  /*
    =========================
    UPDATE TODO
    =========================

    د ID په اساس
    Todo پیدا کوي.

    بیا text یې بدلوي.
  */

  const updateTodo = (id, newTodoText) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) => {
        // که دا هماغه Todo وي
        if (todo.id === id) {
          return {
            // زاړه معلومات وساته
            ...todo,

            // فقط text بدل کړه
            todo: newTodoText,
          };
        }

        // نور Todos مه بدلوه
        return todo;
      }),
    );
  };

  /*
    =========================
    DELETE TODO
    =========================

    filter ټول Todos ساتي

    فقط هغه Todo لرې کوي
    چې ID یې برابر وي.
  */

  const deleteTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  };

  /*
    =========================
    TOGGLE COMPLETE
    =========================

    false -> true
    true -> false
  */

  const toggleComplete = (id) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) => {
        // Todo پیدا شو
        if (todo.id === id) {
          return {
            ...todo,

            completed: !todo.completed,
          };
        }

        return todo;
      }),
    );
  };

  /*
    =========================
    LOCAL STORAGE
    =========================

    هر کله todos بدل شي
    دا effect چلېږي.

    todos Array
       ↓
    JSON.stringify
       ↓
    text
       ↓
    localStorage
  */

  useEffect(() => {
    localStorage.setItem(
      "todos",

      JSON.stringify(todos),
    );
  }, [todos]);

  return (
    /*
      =========================
      CONTEXT PROVIDER
      =========================

      دلته App خپل:

      todos
      addTodo
      updateTodo
      deleteTodo
      toggleComplete

      نورو components ته ورکوي.
    */

    <TodoContext.Provider
      value={{
        todos,

        addTodo,

        updateTodo,

        deleteTodo,

        toggleComplete,
      }}>
      <div
        className="
          min-h-screen
          bg-[#3a7ae1]
          px-4
          py-12
        ">
        <div
          className="
            mx-auto
            max-w-2xl
          ">
          <h1
            className="
              mb-8
              text-center
              text-3xl
              font-bold
              text-white
            ">
            Manage Your Todos
          </h1>

          {/* Todo input */}
          <TodoForm />

          {/* Todos */}
          <div
            className="
              mt-5
              flex
              flex-col
              gap-3
            ">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
