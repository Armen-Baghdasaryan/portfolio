import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./main-layout.scss";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
