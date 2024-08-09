import Header from "../../components/Header";
import ItemForm from "../../components/ItemForm";
import ListItem from "../../components/ListItem";
import { InterfaceListItem } from "../../types/ListItem";

export default function TodoList() {
  const items: InterfaceListItem[] = [
    {
      id: 1,
      title: "Buy milk",
      description: "Buy milk from the store",
      favorite: false,
      color: "red",
    },
    {
      id: 2,
      title: "Buy bread",
      description: "Buy bread from the store",
      favorite: false,
      color: "blue",
    },
  ];
  return (
    <div>
      <Header />
      <ItemForm />
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}
