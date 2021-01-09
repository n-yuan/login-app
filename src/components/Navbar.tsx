import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import {
  HomeOutlined,
  LoginOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e: any): void => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="login" icon={<LoginOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="mock" icon={<AppstoreOutlined />}>
          <Link to="/mockpage/1">Mock</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
