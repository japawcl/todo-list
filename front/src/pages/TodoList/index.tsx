import React from "react";
import { Button, DatePicker, Input, Space, Flex } from "antd";
import ItemForm from "../../components/ItemForm";
import ListItem from "../../components/ListItem";
import { InterfaceListItem } from "../../types/ListItem";
import { SearchOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import type { GetProps } from "antd";
import logo from "../../assets/imgs/coreNotes.png";

export default function TodoList() {
  type SearchProps = GetProps<typeof Input.Search>;

  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const items: InterfaceListItem[] = [
    {
      id: 1,
      title: "Buy milk",
      description: "Buy milk from the store",
      favorite: false,
      color: "#BAE2FF",
    },
    {
      id: 2,
      title: "Buy bread",
      description: "Buy bread from the store",
      favorite: false,
      color: "#B9FFDD",
    },
  ];
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
          onSearch={onSearch}
          style={{ width: 500 }}
        />
      </Header>
      <div
        style={{
          backgroundColor: "#F0F2F5",
          height: "100vh",
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
        <Content style={{ display: "flex", gap: 20, padding: 42 }}>
          {items.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </Content>
      </div>
    </div>
  );
}
