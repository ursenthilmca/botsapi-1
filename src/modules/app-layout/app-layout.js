import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import "./app-layout.scss";
import Header from "../header/header";
import { Col, Row, Card } from "antd";
import MenuComponent from "../menu/menu";
import menuAction from "../menu/menu-action";
import { useSelector, useDispatch } from "react-redux";


const AppLayout = () => {
  const dispacth = useDispatch();
  const show = useSelector(state => state.menubar.menuVisible);
  const customerSetup= useSelector(state => state.customerSetup)
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
            <Col sm={5} style={{ paddingRight: "4px" }}>
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
          {
            customerSetup.customerSetupclicked &&  <div>
            <Col sm={24} lg={24} className="card-body">
              <Card bordered={false} style={{ width: "100%" }}></Card>
            </Col>
          </div>
          }
        </Row>
      </div>
      <div className="container-background"></div>
    </Fragment>
  );
};

export default AppLayout;
