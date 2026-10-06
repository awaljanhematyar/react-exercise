import {createContext, useContext} from "react";
export const TodoContext = createContext({

    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    toggleTodo: () => {},
    deleteTodo: () => {},
});
export const useTodo = () =>{
    return useContext(TodoContext);
}