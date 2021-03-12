import React, { useState } from "react";
import { Radio } from "antd";

import Radiobutton from "../../atoms/RadioButton/RadioButton";
import style from "./Radiogroup.module.scss";

const Radiogroup = (props) => {
  const [value, setValue] = useState(1);
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const radioOptions = [
    "Credit Card or Debit Card",
    "Pay with Net Banking",
    "Pay with UPI",
    "Pay with PayTM",
    "Paypal",
  ];

  const onChange = (e) => {
    setValue(e.target.value);
    props.onRadioChange(e.target.value);
  };
  return (
    <div className={style["m-radiogroup"]}>
      <Radio.Group
        className={style["m-radiogroup__group"]}
        onChange={(event) => onChange(event)}
        value={value}
      >
        {radioOptions.map((option, i) => (
          <div key={i}>
            <Radiobutton style={radioStyle} value={i + 1} option={option} />
          </div>
        ))}
      </Radio.Group>
      <Radiobutton />
    </div>
  );
};

export default Radiogroup;
