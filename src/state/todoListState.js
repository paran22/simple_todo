import { atom, selector } from 'recoil';

export const todoListState = atom(
  {
    key: "todoListState",
    default: selector({
      key: "todoListStateSelector",
      get: getSavedData,
    }),
  }
);

function getSavedData() {
  const list = localStorage.getItem("todoList");
  return list ? JSON.parse(list) : [];
};