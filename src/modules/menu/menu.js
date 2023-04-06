import React from "react";
import { CloseSquareOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
import "./menu.scss";
import CloseIcon from "../../component/close-icon/close-icon";


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <div style={{ cursor: "pointer", width: 32 }}>
      <CloseIcon />
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
  getItem("EDI", "edi", "", [

  ]),
  getItem("MAPPING", "mapping", "", [

  ]),
  getItem("EDI SOURCE", "edi-source", "", [

  ]),
];
function MenuComponent(props) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (

    <div className="menu-wrapper">
      <Menu
        className="menu-items"
        // defaultSelectedKeys={['1']}
        defaultOpenKeys={['api']}
        mode="inline"
        theme="light"
        inlineCollapsed={false}
        items={items}
        onClick={({ key, keyPath, domEvent }) => {
          if (key === "close") {
            props.closeMenuAction();
          }
        }}
      />
    </div>

  );
}

export default MenuComponent;
