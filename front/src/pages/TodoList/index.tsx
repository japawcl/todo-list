import { useContext, useEffect } from "react";
import { Input } from "antd";
import ItemForm from "../../components/ItemForm";
import ListItem from "../../components/ListItem";
import { InterfaceListItem } from "../../types/ListItem";
import { Content, Header } from "antd/es/layout/layout";
import type { GetProps } from "antd";
import logo from "../../assets/imgs/coreNotes.png";
import { todoContext } from "../../providers/useTodo";
import { get } from "http";

export default function TodoList() {
  type SearchProps = GetProps<typeof Input.Search>;

  const { todos, getTodoList, favoriteTodos } = useContext(todoContext);

  useEffect(() => {
    getTodoList();
  }, []);

  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <div>
      <Header
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <img src={logo} />
        CoreNotes
        <Search
          placeholder="Pesquisar notas"
          onSearch={(value) => getTodoList(value)}
          style={{ width: 500 }}
        />
      </Header>
      <div
        style={{
          backgroundColor: "#F0F2F5",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            top: 81,
          }}
        >
          <ItemForm />
        </div>
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 42,
          }}
        >
          <h4>Favoritos</h4>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {favoriteTodos.map(
              (todo: InterfaceListItem) => (
                console.log(todo), (<ListItem key={todo.id} todo={todo} />)
              )
            )}
          </div>
          <h4>Outros</h4>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {todos.map(
              (todo: InterfaceListItem) => (
                console.log(todo), (<ListItem key={todo.id} todo={todo} />)
              )
            )}
          </div>
        </Content>
      </div>
    </div>
  );
}
