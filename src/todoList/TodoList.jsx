import React, { useContext } from "react";
import TodoItem from "./component/TodoItem";
import { TodoListContext } from "../context/TodoList";
import { NavContext, navItems } from "../context/Nav";
import "./TodoList.css";

export default function TodoList() {
  const { todoList, checkItem, deleteItem } = useContext(TodoListContext);
  const { selectedNavItem } = useContext(NavContext);
  const filterItem = (todo, navItem) => {
    switch (navItem) {
      case navItems.all:
        return true;
      case navItems.active:
        return !todo.completed;
      case navItems.completed:
        return todo.completed;
      default:
        throw new Error("not found");
    }
  };
  return (
    <ul className="todoList">
      {todoList
        .filter((todo) => filterItem(todo, selectedNavItem))
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkItem={checkItem}
            deleteItem={deleteItem}
          />
        ))}
    </ul>
  );
}
