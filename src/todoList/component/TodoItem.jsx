import React from "react";
import "./TodoItem.css";
import { BsTrash } from "react-icons/bs";

export default function TodoItem({ todo, checkItem, deleteItem }) {
  const id = todo.id;
  const checked = todo.completed;
  return (
    <li className="todoItem">
      <input
        className="todoCheckBox"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => checkItem(id)}
      />
      <label
        htmlFor={id}
        className="content"
        style={{ textDecoration: `${checked ? "line-through" : ""}` }}
      >
        {todo.content}
      </label>
      <BsTrash className="todoItemButton" onClick={() => deleteItem(id)} />
    </li>
  );
}
