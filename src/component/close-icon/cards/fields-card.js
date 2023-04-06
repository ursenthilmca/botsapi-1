import { Typography } from "antd";
import React from "react";
import { uniqueID } from "../../../utility/utility";

const FiledCard = ({
  title,
  children,
  labelClass = false,
  textClass,
  childClassName,
}) => {
  return (
    <div className={`field-card-container ${textClass}`} id={uniqueID()}>
      <Typography.Text
        id={uniqueID()}
        className={`field-card-title ${labelClass}`}
      >
        {title}
      </Typography.Text>
      <div id={uniqueID()} className={`content ${childClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default FiledCard;
