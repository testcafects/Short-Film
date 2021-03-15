import React from "react";
import style from "./PasswordTextbox.module.scss";
import { Input } from "antd";

const PasswordTextbox = (props) => {
  return (
    <div className={style["a-password-textbox"]}>
      <label>{props.labelName}</label>
      <Input.Password
        className={style["a-password-textbox__password"]}
        placeholder={props.placeholder}
        name={props.labelName}
        defaultValue={props.defaultValue}
        data-text={props.placeholder}
      />
    </div>
  );
};

export default PasswordTextbox;
