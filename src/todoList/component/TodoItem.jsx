import React from "react";
import "./TodoItem.css";
import { BsTrash } from "react-icons/bs";

export default function TodoItem({ todo, checkItem, deleteItem }) {
  const id = todo.id;
  const checked = todo.completed;
  return (
    <li className="todoItem">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => {}}
      />
      <label htmlFor={id} onClick={() => checkItem(id)} />
      <span
        className="content"
        onClick={() => checkItem(id)}
        style={{ textDecoration: `${checked ? "line-through" : ""}` }}
      >
        {todo.content}
      </span>
      <BsTrash className="todoItemButton" onClick={() => deleteItem(id)} />
    </li>
  );
}
