import React from "react";
import { Divider } from "antd";

import Button from "../../atoms/Button/Button";
import style from "./Summary.module.scss";

const Summary = (props) => {
  return (
    <div className={style["m-summary"]}>
      <h1 className={style["m-summary__header-one"]}>Summary</h1>
      <div className={style["m-summary__header-two"]}>
        <p>Original Price</p>
        <p>₹2100</p>
      </div>
      <Divider className={style["m-summary__divider"]} />
      <div className={style["m-summary__content-one"]}>
        <p>Total</p>
        <p>₹2100</p>
      </div>
      <p>
        Udemy is required by law to collect applicable transaction taxes for
        purchases made in certain jurisdictions
      </p>
      <p className={style["m-summary__tc"]}>
        By completting your purchase you agree to these{" "}
        <span className={style["m-summary__tc-link"]}>Terms of service</span>
      </p>
      <Button value="Complete Payment" type="primary" />
    </div>
  );
};

export default Summary;
