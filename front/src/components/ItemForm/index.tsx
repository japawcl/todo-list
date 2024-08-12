import { useContext } from "react";
import { Card, Space, Typography, Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { todoContext } from "../../providers/useTodo";

export default function CreateItemForm() {
  const { handleSubmit, todo, setTodo } = useContext(todoContext);

  return (
    <Space direction="vertical" size={16}>
      <Card
        title={
          <Typography.Title
            editable={{
              triggerType: ["text"],
              enterIcon: <></>,
              onChange: (value) => setTodo({ ...todo, title: value }),
            }}
            level={5}
            style={{ paddingLeft: 12, margin: 0 }}
          >
            {todo.title || "Titulo"}
          </Typography.Title>
        }
        extra={
          <Button
            type="link"
            icon={
              todo.favorite ? (
                <StarFilled style={{ color: "yellow" }} />
              ) : (
                <StarOutlined style={{ color: "black" }} />
              )
            }
            onClick={() => setTodo({ ...todo, favorite: !todo.favorite })}
          />
        }
        style={{ width: 530, borderRadius: 0 }}
      >
        <TextArea
          style={{ border: "none" }}
          rows={4}
          placeholder="Criar Nota..."
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          onKeyUp={(key) => key.key === "Enter" && handleSubmit()}
        />
      </Card>
    </Space>
  );
}
