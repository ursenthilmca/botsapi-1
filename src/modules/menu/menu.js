import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import "./menu.scss";
import CloseIcon from "../../component/close-icon/close-icon";
import { MenuActions } from "../menu/menu-action";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import { useNavigate } from 'react-router-dom';
import { customerSetupcomponent } from '../action/CustomerDetail';
import { activePageAction } from "./active-page-action";

const pageAction = (keys) => {
  console.log(keys);
  return {
    type: keys,
    active: true
  }
}

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
    expandIcon: (props) => {
      if (props?.isOpen) {
        return <MinusOutlined style={{ color: "#05987B" }} className="minus" />
      } else {
        return <PlusOutlined style={{ color: "#05987B" }} className="plus" />
      }

    }
  };
}

const items = [
  getItem(
    <div className="close-icon">
      <CloseIcon style={{ cursor: "pointer", width: '32px', display: "inline" }} />
    </div>,
    "close"
  ),

  getItem("API", "api", "", [
    getItem("Overview", "api-overview"),
    getItem("API Mapping", "api-mapping"),
    getItem("API Source", "api-source"),
    getItem("Carrier Master", "carrier-master"),
    getItem("Carrier Type Mapping", "carrier-type-mapping"),
    getItem("Carrier Accessorial Mapping", "carrier-accessorial-mapping"),
    getItem("Carrier Error Log", "carrier-error-log"),
    getItem("Carrier Search Summary", "carrier-search-summary"),
    getItem("Customer Setup", "customer-setup"),
    getItem("API Usage", "api-usage"),
    getItem("Internal Carrier", "internal-carrier"),
    getItem("Manage Users", "manage-users"),
  ]),
  getItem("EDI", "edi", "", []),
  getItem("MAPPING", "mapping1", "", []),
  // getItem("EDI SOURCE", "edi-source", "", [

  // ]),
];
function MenuComponent(props) {
  const dispacth = useDispatch();

  const hideMenuHandler = () => {
    dispacth(MenuActions.showMenu());
  }

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pageActive = useSelector(state => state.visiblePage.activePage);
  console.log(pageActive);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (

    <div className="menu-wrapper ">
      <Menu
        className="menu-items"
        defaultOpenKeys={['api']}
        mode="inline"
        theme="light"
        inlineCollapsed={false}
        items={items}

        onClick={({ key, keyPath, domEvent }) => {
          switch (key) {
            case 'customer-setup':
              navigate('/customerSetup');
              console.log(key);
              dispacth(pageAction(key))
              break;
            case 'api-mapping':
              navigate('/apiMapping');
              console.log(key);
              dispacth(pageAction(key))

              dispacth(customerSetupcomponent(false));
              break;
            case 'api-overview':
              navigate('/overview');
              dispacth(pageAction(key))

              console.log(key);
              break;

          }



          // if (key === 'customer-setup') {
          //   console.log(key);
          //   navigate('/customerSetup');
          // } else if (key === 'api-mapping') {
          //   console.log(key);
          //   navigate('/apiMapping');
          //   dispacth(customerSetupcomponent(false));
          // } else if (key === 'api-overview') {
          //   navigate('/overview');


          // }
          if (key === "close") {
            hideMenuHandler();
          }
        }}
      />
    </div>

  );
}

export default MenuComponent;
