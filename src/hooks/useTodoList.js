import { useRecoilState } from 'recoil'
import { todoListState } from '../state/todoListState';
import { useEffect } from 'react';

export default function useTodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
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
  return { todoList, checkItem, deleteItem, addItem }
}
