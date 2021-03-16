import React from "react";
import Navbar from "../../molecules/Header/Header";
import PaymentTemplate from "../../templates/PaymentForm/PaymentForm";
import style from "./Payment.module.scss";

const Payment = (props) => {
  return (
    <div className={style["p-payment"]}>
      <Navbar />
      <PaymentTemplate />
    </div>
  );
};

export default Payment;
