import React from "react";
import { Flex, Space, Menu, Avatar, Button } from "antd";
import {
  UserOutlined,
  SearchOutlined,
  SkinOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

export default function header() {
  return (
    <div>
      <Flex gap="middle" justify="space-between" align="center">
        <Menu theme="light" mode="horizontal">
        </Menu>
        <Space align="center" size="middle">
          <Avatar icon={<UserOutlined />} />
          <Button type="text" icon={<SearchOutlined />} />
          <Button type="text" icon={<SkinOutlined />} />
          <Button type="text" icon={<SettingOutlined />} />
          <Button type="text" danger icon={<PoweroffOutlined />}>
            退出
          </Button>
        </Space>
      </Flex>
    </div>
  );
}
