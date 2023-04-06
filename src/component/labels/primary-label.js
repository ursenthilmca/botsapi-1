import { Typography } from "antd";
import React from "react";

const PrimaryLabel = ({ children, normal, className = false }) => {
  return (
    <Typography.Text
      className={`${normal ? "normal-text" : "primary-text"} ${className}`}
    >
      {children}
    </Typography.Text>
  );
};

export default PrimaryLabel;
