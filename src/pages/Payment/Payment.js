import React from "react";
// import Summary from "../../molecules/Summary/Summary.js";
// import Checkout from "../../molecules/Checkout/Checkout";
// import PaymentMethod from "../../organisms/PaymentMethod/PaymentMethod";
// import OrderDetails from "../../molecules/OrderDetails/OrderDetails";
import PaymentTemplate from "../../templates/PaymentForm/PaymentForm";
import Navbar from "../../molecules/Header/Header";

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
