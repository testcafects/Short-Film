import React, { useState } from "react";
import style from "./PaymentMethod.module.scss";

import Radiogroup from "../../molecules/Radiogroup/Radiogroup";
import CardDetails from "../../molecules/CardDetails/CardDetails";
import Paypal from "../../molecules/Paypal/Paypal";

const PaymentMethod = (props) => {
  const [radioVal, setRadioVal] = useState(1);

  const renderDynamic = (value) => {
    setRadioVal(value);
  };

  return (
    <div className={style["o-payment-method"]}>
      <Radiogroup onRadioChange={renderDynamic} />
      {radioVal === 1 ? <CardDetails /> : <Paypal />}
    </div>
  );
};

export default PaymentMethod;
