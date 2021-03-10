import React, { useState } from "react";
import { Checkbox } from "antd";

import style from "./Checkbox.module.scss";

const CheckboxAtom = (props) => {
  const check = props.checked;
  const [checked, setChecked] = useState(check);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={style["a-checkbox"]}>
      <Checkbox checked={checked} disabled={props.disabled} onChange={onChange}>
        {props.label}
      </Checkbox>
    </div>
  );
};

export default CheckboxAtom;
