import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useIsMobile from "/src/hooks/useIsMobile";
import { Drawer, Select, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { t } from "i18next";
import i18next from "i18next";
import "./header.scss";

import flagArm from "/src/assets/icons/arm-flag.svg";
import flagUK from "/src/assets/icons/uk-flag.svg";

const navItems = [
  { path: "home", title: t("header.navigation.home") },
  { path: "skills", title: t("header.navigation.skills") },
  { path: "projects", title: t("header.navigation.projects") },
  { path: "contacts", title: t("header.navigation.contacts") },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile("lg");

  const paths = location.pathname?.split("/");
  const path = paths[paths.length - 1];

  const onItemClick = (path) => {
    navigate(path);
    onClose();
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const changeLanguage = (val) => {
    i18next.changeLanguage(val);
    window.location.reload();
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <div className="header__logo">{!isMobile ? "Arm_Dev" : "Arm_Dev"}</div>
      </Link>

      {!isMobile ? (
        <div className="header__items">
          {navItems.map((i) => (
            <h3
              className={i.path === path ? "active__item" : ""}
              key={i.path}
              onClick={() => onItemClick(i.path)}
            >
              {i.title}
            </h3>
          ))}
        </div>
      ) : (
        <div className="header__items">
          <Space>
            <MenuOutlined
              style={{ color: "#fff", fontSize: "22px" }}
              onClick={showDrawer}
            />
          </Space>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            open={open}
            className="drawer__menu"
            width={260}
          >
            {navItems.map((i) => (
              <h3
                className={i.path === path ? "active__item" : ""}
                key={i.path}
                onClick={() => onItemClick(i.path)}
              >
                {i.title}
              </h3>
            ))}
          </Drawer>
        </div>
      )}
      <Select
        onChange={(val) => changeLanguage(val)}
        defaultValue={i18next.language || "en"}
        style={{ width: "auto" }}
        size="small"
        options={[
          { value: "en", label: <img width={22} src={flagUK} alt="en" /> },
          { value: "arm", label: <img width={22} src={flagArm} alt="arm" /> },
        ]}
      />
    </header>
  );
};

export default Header;
