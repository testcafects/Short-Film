import { Input } from "antd";
import React from "react";
import style from "./Textbox.module.scss";

const Textbox = (props) => {
  return (
    <div className={style["a-textbox"]} data-test={props.dataTest}>
      <Input placeholder={props.placeholder} suffix={props.suffix} />
    </div>
  );
};

export default Textbox;
