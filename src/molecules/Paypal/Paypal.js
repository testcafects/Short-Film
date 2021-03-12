import React from "react";
import { LockFilled } from "@ant-design/icons";

import style from "./Paypal.module.scss";

const Paypal = (props) => {
  return (
    <div className={style["m-paypal"]}>
      <div className={style["m-paypal__content"]}>
        In order to complete your transaction, we will transfer you over to
        Adyen's secure servers.
      </div>
      <div className={style["m-paypal__lock"]}>
        <div className={style["m-paypal__lock__secure-connect"]}>
          <div className={style["m-paypal__lock__secure-connect__lock"]}>
            <LockFilled />
          </div>
          <div className={style["m-paypal__lock__secure-connect__text"]}>
            <div>Secure</div>
            <div>Connection</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paypal;
