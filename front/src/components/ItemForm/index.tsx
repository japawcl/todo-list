import React from "react";
import { Card, Space, Input, Typography, Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

export default function CreateItemForm() {
  return (
    <Space direction="vertical" size={16}>
      <Card
        title={
          <Typography.Title
            editable={{
              triggerType: ["text"],
              enterIcon: <></>,
            }}
            level={5}
            style={{ paddingLeft: 12, margin: 0 }}
          >
            Título
          </Typography.Title>
        }
        extra={
          <Button
            type="link"
            icon={<StarOutlined style={{ color: "black" }} />}
          />
        }
        style={{ width: 530, borderRadius: 0 }}
      >
        <TextArea
          style={{ border: "none" }}
          rows={4}
          placeholder="Criar Nota..."
        />
      </Card>
    </Space>
  );
}
