import React from "react";
import { Layout } from "antd";

export default function Header() {
  const { Header } = Layout;
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
  };
  return <Header style={headerStyle}>Header</Header>;
}
