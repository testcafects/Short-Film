import { DatePicker } from "antd";
import React from "react";
import style from "./DatePickers.module.scss";

const DatePickers = (props) => {
  return (
    <div className={style["a-date-picker"]}>
      <label>{props.labelName}</label>
      <DatePicker
        className={style["a-date-picker__dob"]}
        placeholder={props.placeholder}
        name={props.labelName}
        data-text={props.placeholder}
      />
    </div>
  );
};

export default DatePickers;
