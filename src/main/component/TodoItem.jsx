import React from 'react';
import './TodoItem.css';
import { BsTrash } from "react-icons/bs";

export default function TodoItem({ id, checked, checkItem, deleteItem }) {
  return (
    <div className="todoItem" key={id}>
      <input type="checkbox" id={id} onChange={() => checkItem(id)} checked={checked} />
      <label htmlFor={id} onClick={() => checkItem(id)} />
      <span
        className="content"
        onClick={() => checkItem(id)}
        style={{ textDecoration: `${checked ? "line-through" : ""}` }}
      >
        test
      </span>
      <BsTrash onClick={() => deleteItem(id)} />
    </div>
  );
}
