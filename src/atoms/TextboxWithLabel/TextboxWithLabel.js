import React from "react";
import style from "./TextboxWithLabel.module.scss";
import { Input } from "antd";

const TextboxWithLabel = (props) => {
  return (
    <div className={style["a-textbox-with-label"]}>
      <label>{props.labelName}</label>
      <Input
        placeholder={props.placeholder}
        name={props.labelName}
        defaultValue={props.defaultValue}
        data-text={props.placeholder}
      />
    </div>
  );
};

export default TextboxWithLabel;
