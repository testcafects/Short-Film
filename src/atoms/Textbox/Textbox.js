import React from "react";
import { Input } from "antd";

import style from "./Textbox.module.scss";

const Textbox = (props) => {
  return (
    <div className={style["a-textbox"]}>
      <Input placeholder={props.placeholder} suffix={props.suffix} />
    </div>
  );
};

export default Textbox;
