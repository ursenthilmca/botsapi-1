import { Tabs } from "antd";
import React, { Fragment } from "react";

import ApiRequestTab from "./api-tabs/api-request-tab";
import ApiResponseTab from "./api-tabs/api-response-tab";

let ApiTab = () => {
  let tabonChangeHandler = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Request`,
      children: <ApiRequestTab />,
    },
    {
      key: "2",
      label: `Response`,
      children: <ApiResponseTab />,
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
export default ApiTab;
