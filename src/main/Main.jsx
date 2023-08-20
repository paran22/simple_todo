import React, { useState } from 'react';
import TodoItem from './component/TodoItem';

export default function Main() {
  const [todoList, setTodoList] = useState(init);
  const checkItem = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed} : todo
      )
    );
  };
  const deleteItem = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  }
  return (
    <div className="main">
      {todoList.map((todo) => (
        <TodoItem
          id={todo.id}
          checked={todo.completed}
          checkItem={checkItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

  const init = [
    {
      id: 1,
      content: 'test1',
      completed: false,
    },
    {
      id: 2,
      content: 'test2',
      completed: false,
    }
  ];