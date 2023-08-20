import React, { useContext, useState } from "react";
import "./Input.css";
import { TodoListContext } from "../../context/TodoList";

export default function Input() {
  const [todo, setTodo] = useState('');
  const { addItem } = useContext(TodoListContext);
  const addTodo = (event, todo) => {
    console.log(todo);
    event.preventDefault();
    addItem(todo);
    setTodo('');
  };
  const onChanged = (e) => setTodo(e.target.value);
  return (
    <form className="input" onSubmit={(event) => addTodo(event, todo)}>
      <input
        className="inputBox"
        type="text"
        id="todo"
        name="todo"
        placeholder="Add Todo"
        value={todo}
        onChange={onChanged}
      />
      <button className="inputButton">Add</button>
    </form>
  );
}