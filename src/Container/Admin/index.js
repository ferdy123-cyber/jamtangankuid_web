import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeFilled,
  UserOutlined,
  ProjectOutlined,
  FileImageOutlined,
  FallOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import {
  Button,
  Image,
  Layout,
  Menu,
  message,
  Popconfirm,
  Typography,
} from "antd";
import React, { useState } from "react";
// import { useSelector } from "react-redux";
import "./index.css";
import ListAdmin from "./ListAdmin/index.js";
import logo from "../../Image/20221111_194411_0000.png";
import ListProduk from "./ListProduk";
import ListPoster from "./ListPoster";
import ListPromo from "./ListPromo";
import ListRekomended from "./ListRekomended";
import Dashboard from "./Dashboard";

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("2");

  const user_credent = JSON.parse(localStorage.getItem("user_credent"));

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{ textAlign: "center", marginTop: 20, marginBottom: 15 }}
          className="logo"
        >
          <Image src={logo} width={50} height={50} alt="" preview={false} />
          <Typography.Title style={{ color: "white", marginTop: 10 }} level={5}>
            jamtanganku.id
          </Typography.Title>
        </div>
        <Menu
          onClick={(val) => setKey(val.key)}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[key]}
          items={[
            // {
            //   key: "1",
            //   icon: <HomeFilled />,
            //   label: "Dashboard",
            // },
            {
              key: "2",
              icon: <ProjectOutlined />,
              label: "Produk",
            },
            {
              key: "3",
              icon: <FileImageOutlined />,
              label: "Poster",
            },
            {
              key: "4",
              icon: <FallOutlined />,
              label: "Promo",
            },
            {
              key: "5",
              icon: <CheckSquareOutlined />,
              label: "Rekomendasi",
            },
            user_credent.role_id === "3" && {
              key: "6",
              icon: <UserOutlined />,
              label: "Data Admin",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <Popconfirm
            title="Kamu yakin ingin logout?"
            onConfirm={() => {
              localStorage.removeItem("user_credent");
              message.success("Berhasil logout");
              window.location.reload(false);
            }}
            // onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              style={{ marginLeft: 20 }}
              size="small"
              type="primary"
            >
              Logout
            </Button>
          </Popconfirm>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflow: "auto",
          }}
        >
          {key === "1" && <Dashboard />}
          {key === "2" && <ListProduk />}
          {key === "3" && <ListPoster />}
          {key === "4" && <ListPromo />}
          {key === "5" && <ListRekomended />}
          {key === "6" && <ListAdmin />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
