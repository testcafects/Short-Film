import React from "react";
import { Button } from "antd";

import style from "./Button.module.scss";

const ButtonComp = (props) => {
  return (
    <div className={style["a-button"]}>
      <Button
        className={`${style[`a-button${props.buttonStyle}`]}`}
        type={props.type && props.type}
      >
        {props.value}
      </Button>
    </div>
  );
};

export default ButtonComp;
