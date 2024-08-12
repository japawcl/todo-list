import { createContext, useState } from "react";
import { InterfaceListItem } from "../types/ListItem";

export interface InterfaceTodoContext {
  todos: InterfaceListItem[];
  todo: InterfaceListItem;

  getTodoList: () => void;
  handleSubmit: () => void;
  setTodo: (todo: InterfaceListItem) => void;
  updateTodo(todo: InterfaceListItem): void;
}

export const todoContext = createContext({} as any);

export const TodoProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<InterfaceListItem[]>([]);

  const [favoriteTodos, setFavoriteTodos] = useState<InterfaceListItem[]>([]);

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    favorite: false,
    color: "",
  });

  const getTodoList = (search?: string) => {
    const url = search
      ? `http://localhost:3000/todos?search=${search}`
      : "http://localhost:3000/todos";

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setTodos(json.data.filter((todo: InterfaceListItem) => !todo.favorite));
        setFavoriteTodos(
          json.data.filter((todo: InterfaceListItem) => todo.favorite)
        );
      });
  };

  const handleSubmit = () => {
    console.log(todo);
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({ ...todo }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        setTodo({ title: "", description: "", favorite: false, color: "" });
        getTodoList();
      });
  };

  const updateTodo = (todo: InterfaceListItem) => {
    console.log(todo);
    fetch("http://localhost:3000/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify({ ...todo }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        getTodoList();
      });
  };

  const deleteTodo = (todo: InterfaceListItem) => {
    fetch("http://localhost:3000/todos/" + todo.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        getTodoList();
      });
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        getTodoList,
        handleSubmit,
        setTodo,
        todo,
        updateTodo,
        favoriteTodos,
        deleteTodo,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
