import React from "react";
import "./TodoItem.css";
import { BsTrash } from "react-icons/bs";

export default function TodoItem({ todo, checkItem, deleteItem }) {
  const id = todo.id;
  const checked = todo.completed;
  return (
    <div className="todoItem" key={id}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
      />
      <label htmlFor={id} onClick={() => checkItem(id)} />
      <span
        className="content"
        onClick={() => checkItem(id)}
        style={{ textDecoration: `${checked ? "line-through" : ""}` }}
      >
        {todo.content}
      </span>
      <BsTrash onClick={() => deleteItem(id)} />
    </div>
  );
}
