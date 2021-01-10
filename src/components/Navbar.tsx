import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import NavIcon from "./NavIcon";
import { INavItem, INavSubMenu, NavConfigType } from "../interface/navbar";
import { useLocation } from "react-router-dom";
import { find } from "lodash";

interface NavbarProps {
  navConfig: NavConfigType;
}

const Navbar: React.FC<NavbarProps> = ({ navConfig }) => {
  const [current, setCurrent] = useState("");
  const location = useLocation();

  const { SubMenu } = Menu;

  const handleClick = (e: any): void => {
    setCurrent(e.key);
  };

  const getKeyFromPath = (navConfig: NavConfigType, path: string) => {
    const key = find(navConfig, { link: path })?.key;
    return key ? key : "";
  };

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrent(getKeyFromPath(navConfig, currentPath));
  }, [location, navConfig]);

  const renderNav = (navConfig: NavConfigType) => {
    return navConfig.map((item) => {
      if (item.type === "item") {
        const navItem = item as INavItem;
        return (
          <Menu.Item
            key={navItem.key}
            icon={<NavIcon iconName={navItem.icon} />}
          >
            <Link to={navItem.link}>{navItem.name}</Link>
          </Menu.Item>
        );
      } else {
        const subMenuItem = item as INavSubMenu;
        const subMenuList = subMenuItem.list as any;
        return (
          <SubMenu
            key={subMenuItem.key}
            icon={<NavIcon iconName={subMenuItem.icon} />}
            title={subMenuItem.name}
          >
            {renderNav(subMenuList)}
          </SubMenu>
        );
      }
    });
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {renderNav(navConfig)}
      </Menu>
    </div>
  );
};

export default Navbar;
