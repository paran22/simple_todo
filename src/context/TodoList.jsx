import { createContext, useEffect, useState } from "react";

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  
  const [todoList, setTodoList] = useState(getSavedData());
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));

  }, [todoList]);
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
  const addItem = (text) => {
    const content = text.trim();
    if (content === '') return;
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

function getSavedData()  {
  const list = localStorage.getItem("todoList");
  return list ? JSON.parse(list) : [];
};