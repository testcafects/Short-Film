import React from "react";
import style from "./RadioButton.module.scss";

import { Radio } from "antd";

const RadioButton = (props) => {
  return (
    <div className={style["a-radio-button"]}>
      <Radio style={props.style} value={props.value}>
        {props.option}
      </Radio>
    </div>
  );
};

export default RadioButton;
