import React, { Component } from "react";
import { Layout } from "antd";
import HeaderBar from "./header-bar.jsx";
const { Header, Footer, Content } = Layout;

const layoutStyle = {
  height: "100vh",
  overflow: "hidden",
};

const headerStyle = {
  backgroundColor: "#fff",
};

const contentStyle = {};

const footerStyle = {
  backgroundColor: "#f0f3fa",
};

export default class home extends Component {
  render() {
    return (
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <HeaderBar />
        </Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    );
  }
}
