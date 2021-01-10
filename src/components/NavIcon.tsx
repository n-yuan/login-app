import React from "react";
import {
  HomeOutlined,
  LoginOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  ProfileOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

interface CourseReviewsProps {
  iconName: string | undefined;
}

const NavIcon: React.FC<CourseReviewsProps> = ({ iconName }) => {
  switch (iconName) {
    case "home":
      return <HomeOutlined />;
    case "login":
      return <LoginOutlined />;
    case "info":
      return <InfoCircleOutlined />;
    case "content":
      return <AppstoreOutlined />;
    case "mock":
      return <ProfileOutlined />;
    default:
      return <QuestionCircleOutlined />;
  }
};

export default NavIcon;
