import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import "./app-layout.scss";
import Header from "../header/header";
import { Col, Row } from "antd";
import MenuComponent from "../menu/menu";
import menuAction from "../menu/menu-action";
import { useSelector, useDispatch } from "react-redux";


const AppLayout = () => {
  const dispacth = useDispatch();
  const show = useSelector(state => state.menubar.menuVisible);
  console.log(show);

  const showMenuHandler = () => {
    dispacth(menuAction.showMenu());
  }
  const hideMenuHandler = () => {
    dispacth(menuAction.hideMenu());
  }

  return (
    <Fragment>
      <div className="main-container">
        <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
          {show === true && (
            <Col sm={5}>
              <div className="menu-container">
                <MenuComponent />
              </div>
            </Col>
          )}

          <Col sm={show === true ? 19 : 24}>
            <Header />
            <div className="pt-30">
              <Outlet />
            </div>
          </Col>
        </Row>
      </div>
      <div className="container-background"></div>
    </Fragment>
  );
};

export default AppLayout;
