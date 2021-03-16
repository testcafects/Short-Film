import { Button } from "antd";
import React from "react";
import style from "./Purchase.module.scss";

const Purchase = (props) => {
  return (
    <div className={style["a-purchase"]} data-test="">
      <div className={style["a-purchase__price"]}>₹ {props.price}</div>
      <div className={style["a-purchase__actions"]}>
        <Button type="primary">Buy </Button>
        <Button>Add to Cart </Button>
      </div>
    </div>
  );
};

export default Purchase;
