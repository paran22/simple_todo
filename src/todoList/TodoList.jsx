import React from "react";
import TodoItem from "./component/TodoItem";
import { navItems, useNavContext } from "../context/NavContext";
import "./TodoList.css";
import useTodoList from "../hooks/useTodoList";

export default function TodoList() {
  const { todoList, checkItem, deleteItem } = useTodoList();
  const { selectedNavItem } = useNavContext();
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
