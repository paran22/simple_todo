import { createContext, useState } from "react";

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState(init);
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
  return (
    <TodoListContext.Provider value={{ todoList, checkItem, deleteItem }}>
      {children}
    </TodoListContext.Provider>
  );
}

const init = [
  {
    id: 1,
    content: "test1",
    completed: false,
  },
  {
    id: 2,
    content: "test2",
    completed: false,
  },
];