import React, { useState } from "react";
import "./Input.css";
import useTodoList from "../../hooks/useTodoList";

export default function Input() {
  const [todo, setTodo] = useState("");
  const { addItem } = useTodoList();
  const addTodo = (event, todo) => {
    event.preventDefault();
    addItem(todo);
    setTodo("");
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
