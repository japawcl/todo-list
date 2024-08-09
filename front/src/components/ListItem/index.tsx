import { Button, Card, Space, Typography } from "antd";
import { InterfaceListItem } from "../../types/ListItem";
import {
  BgColorsOutlined,
  DeleteOutlined,
  EditOutlined,
  StarOutlined,
} from "@ant-design/icons";

export default function ListItem({ item }: { item: InterfaceListItem }) {
  return (
    <Space direction="vertical" size={16}>
      <div>
        <Card
          title={
            <Typography.Title level={5} style={{ paddingLeft: 12, margin: 0 }}>
              {item.title}
            </Typography.Title>
          }
          extra={
            <Button
              type="link"
              icon={<StarOutlined style={{ color: "black" }} />}
            />
          }
          style={{
            width: 390,
            height: 440,
            backgroundColor: item.color || "white",
          }}
        >
          <Typography.Paragraph
            style={{
              height: 300,
            }}
          >
            {item.description}
          </Typography.Paragraph>
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
                />
              }
              {
                <Button
                  type="link"
                  shape="circle"
                  icon={<BgColorsOutlined style={{ color: "black" }} />}
                />
              }
            </div>
            {
              <Button
                type="link"
                shape="circle"
                icon={<DeleteOutlined style={{ color: "black" }} />}
                style={{ justifySelf: "end" }}
              />
            }
          </div>
        </Card>
      </div>
    </Space>
  );
}
