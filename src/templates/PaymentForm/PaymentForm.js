import React from "react";
import Checkout from "../../molecules/Checkout/Checkout";
import OrderDetails from "../../molecules/OrderDetails/OrderDetails";
import Summary from "../../molecules/Summary/Summary";
import PaymentMethod from "../../organisms/PaymentMethod/PaymentMethod";
import style from "./PaymentForm.module.scss";

const PaymentForm = (props) => {
  return (
    <div className={style["t-payment-form"]}>
      <div className={style["t-payment-form__left"]}>
        <Checkout />
        <PaymentMethod />
        <OrderDetails />
      </div>
      <div className={style["t-payment-form__right"]}>
        <Summary
          onClick={() => {
            alert("Hello");
          }}
        />
      </div>
    </div>
  );
};

export default PaymentForm;
