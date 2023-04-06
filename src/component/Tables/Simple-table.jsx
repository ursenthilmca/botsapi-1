import { Table } from "antd";
import React from "react";
import  "./simple-table";

const SimpleTable = ({
  columns = [],
  data = [],
  pagination = false,
  border = false,
  before = false,
}) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={pagination}
      className={"simple-table"}
      bordered={border}
      before={before}
    />
  );
};



export default SimpleTable;
