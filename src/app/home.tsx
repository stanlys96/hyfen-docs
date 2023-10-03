"use client";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  WalletOutlined,
  HomeFilled,
  WalletFilled,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Image from "next/image";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Welcome To Hyfen!", "1", <HomeFilled />),
  getItem("Obtaining A Wallet", "2", <WalletFilled />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  //   getItem("Team", "sub2", <TeamOutlined />, [
  //     getItem("Team 1", "6"),
  //     getItem("Team 2", "8"),
  //   ]),
  //   getItem("Files", "9", <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  return (
    <Layout>
      <Header
        className="ant-layout-content"
        style={{
          height: "12vh",
          backgroundColor: "white",
          borderBottom: "1px solid gray",
          color: "black",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Image
          className="rounded-xl"
          width={50}
          height={50}
          alt="walao"
          src="/hyfen.jpg"
        />

        <span
          style={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Hyfen Docs
        </span>
      </Header>
      <Layout
        style={{
          minHeight: "88vh",
          padding: 0,
          margin: 0,
          backgroundColor: "white",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            onSelect={(e) => setSelectedKey(e.key)}
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          /> */}
          {selectedKey === "1" && (
            <Content style={{ padding: "0 16px" }}>
              <div style={{ padding: "0 32px" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold" }}>
                  Welcome To Hyfen!
                </p>
                <p style={{ fontSize: "20px", color: "gray" }}>
                  Hyfen is the simplest web3 wallet for your GameFi needs!
                </p>
                <p style={{ fontWeight: 700, fontSize: "25px" }}>
                  Key features of Hyfen
                </p>
                <ol style={{ fontSize: "18px" }}>
                  <li>On-ramp</li>
                  <li>Off-ramp</li>
                  <li>Buying game tokens & NFTs</li>
                </ol>
              </div>
            </Content>
          )}
          {selectedKey === "2" && (
            <Content style={{ padding: "0 16px" }}>
              <div style={{ padding: "0 32px" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold" }}>
                  Create Hyfen Wallet on Mobile
                </p>
                <p style={{ fontSize: "20px", color: "gray" }}>
                  You are only able to create a Hyfen Wallet on the mobile app
                  (iOS | Android). If you are using Hyfen via desktop, you will
                  only be able to connect a wallet.
                </p>
              </div>
            </Content>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
