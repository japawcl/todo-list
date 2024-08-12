import { useContext, useState } from "react";
import {
  cyan,
  green,
  presetPalettes,
  red,
  yellow,
  grey,
  blue,
} from "@ant-design/colors";
import {
  Button,
  Card,
  Col,
  ColorPicker,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import type { ColorPickerProps } from "antd";
import {
  StarFilled,
  StarOutlined,
  EditOutlined,
  DeleteOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import { todoContext } from "../../providers/useTodo";
import { InterfaceListItem } from "../../types/ListItem";
import TextArea from "antd/es/input/TextArea";

type Presets = Required<ColorPickerProps>["presets"][number];

const genPresets = (presets = presetPalettes) =>
  Object.entries(presets).map<Presets>(([label, colors]) => ({
    label,
    colors,
  }));

const HorizontalLayoutDemo = ({
  defaultValue = "white",
  updateTodo = (_: any) => {},
}) => {
  const presets = genPresets({
    red,
    green,
    cyan,
    yellow,
    grey,
    blue,
  });

  const customPanelRender: ColorPickerProps["panelRender"] = (
    _,
    { components: { Picker, Presets } }
  ) => (
    <Row justify="space-between" wrap={false}>
      <Col span={12}>
        <Presets />
      </Col>
    </Row>
  );

  return (
    <ColorPicker
      defaultValue={defaultValue}
      styles={{ popupOverlayInner: { width: 480 } }}
      presets={presets}
      panelRender={customPanelRender}
      onChange={(color) => updateTodo(color.toHexString())}
    >
      <Button
        type="link"
        shape="circle"
        icon={<BgColorsOutlined style={{ color: "black" }} />}
        onClick={() => customPanelRender}
      />
    </ColorPicker>
  );
};

export default function ListItem({ todo }: { todo: InterfaceListItem }) {
  const { updateTodo, deleteTodo } = useContext(todoContext);

  const [editing, setEditing] = useState(false);
  const [updatedTodo, setTodo] = useState(todo);

  return (
    <Space direction="vertical" size={16}>
      <div>
        <Card
          title={
            editing ? (
              <Input
                value={updatedTodo.title}
                onChange={(e) =>
                  setTodo({ ...updatedTodo, title: e.target.value })
                }
                onKeyUp={async (key) => {
                  if (key.key === "Enter") {
                    await updateTodo(updatedTodo);
                    setEditing(false);
                  }
                }}
                style={{
                  backgroundColor: todo.color || "white",
                }}
              />
            ) : (
              <Typography.Title
                level={5}
                style={{ paddingLeft: 12, margin: 0 }}
              >
                {todo.title}
              </Typography.Title>
            )
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
              onClick={async () => {
                await updateTodo({ ...todo, favorite: !todo.favorite });
              }}
            />
          }
          style={{
            width: 390,
            height: 440,
            backgroundColor: todo.color || "white",
          }}
        >
          {editing ? (
            <TextArea
              style={{
                backgroundColor: todo.color || "white",
                height: 300,
              }}
              rows={4}
              placeholder="Criar Nota..."
              value={updatedTodo.description}
              onChange={(e) =>
                setTodo({ ...updatedTodo, description: e.target.value })
              }
              onKeyUp={async (key) => {
                if (key.key === "Enter") {
                  await updateTodo(updatedTodo);
                  setEditing(false);
                }
              }}
            />
          ) : (
            <Typography.Paragraph
              style={{
                height: 300,
              }}
            >
              {todo.description}
            </Typography.Paragraph>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              {
                <Button
                  type="link"
                  shape="circle"
                  icon={<EditOutlined style={{ color: "black" }} />}
                  onClick={() => setEditing(!editing)}
                />
              }
              {
                <HorizontalLayoutDemo
                  defaultValue={todo.color}
                  updateTodo={(color) => {
                    console.log(color);
                    updateTodo({ ...todo, color });
                  }}
                />
              }
            </div>
            {
              <Button
                type="link"
                shape="circle"
                icon={<DeleteOutlined style={{ color: "black" }} />}
                style={{ justifySelf: "end" }}
                onClick={() => deleteTodo?.(todo)}
              />
            }
          </div>
        </Card>
      </div>
    </Space>
  );
}
