import React from "react";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import style from "./Checkout.module.scss";

const Checkout = (props) => {
  const options = [
    "Tamil Nadu",
    "Andra Pradesh",
    "Maharastra",
    "Delhi",
    "Pondicherry",
  ];
  return (
    <div className={style["m-checkout"]}>
      <h1 className={style["m-checkout__header-one"]}>Checkout</h1>
      <div className={style["m-checkout__header-two"]}>Billing Address</div>
      <div className={style["m-checkout__dropdown"]}>
        <Dropdown defaultValue="India" disable={true} />
        <Dropdown
          defaultValue="Please select"
          options={options}
          disable={false}
        />
      </div>
    </div>
  );
};

export default Checkout;
