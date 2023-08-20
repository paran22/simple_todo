import { createContext, useState } from "react";

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const checkItem = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteItem = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };
  const addItem = (content) => {
    const id =
      todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
    const todo = { id: id, content: content, completed: false };
    setTodoList(prev => [...prev, todo]);
  }
  return (
    <TodoListContext.Provider
      value={{ todoList, checkItem, deleteItem, addItem }}
    >
      {children}
    </TodoListContext.Provider>
  );
}