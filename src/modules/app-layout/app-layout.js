import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import "./app-layout.scss";
import Header from "../header/header";
import { Col, Row } from "antd";
import MenuComponent from "../menu/menu";

const AppLayout = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <div className="main-container">
        <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
          {showMenu === true && (
            <Col sm={5}>
              <div className="menu-container">
                <MenuComponent closeMenuAction={() => setShowMenu(false)} />
              </div>
            </Col>
          )}

          <Col sm={showMenu === true ? 19 : 24}>
            <Header updateMenu={() => setShowMenu(!showMenu)} />
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
