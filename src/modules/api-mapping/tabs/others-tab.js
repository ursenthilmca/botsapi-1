import { Tabs } from "antd";
import React, { Fragment } from "react";

import OtherResponseTab from "./others-tabs/others-response";
import OthersRequestTab from "./others-tabs/others-request-tab";

let Others = () => {
  let tabonChangeHandler = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Request`,
      children: <OthersRequestTab />,
    },
    {
      key: "2",
      label: `Response`,
      children: <OtherResponseTab />,
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={tabonChangeHandler}
      className="sub-tab pl-10"
    />
  );
};
export default Others;
