import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./app-layout.scss";
import Header from "../header/header";

const AppLayout = () => {
  return (
    <Fragment>
      <div className="main-container">
        <Header/>
        <div className="pt-30">
          <Outlet />
        </div>
      </div>
      <div className="container-background"></div>
    </Fragment>
  );
};

export default AppLayout;
