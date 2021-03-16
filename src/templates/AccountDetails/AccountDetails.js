import React from "react";
import AccountForm from "../../molecules/AccountForm/AccountForm.js";
import style from "./AccountDetails.module.scss";

const AccountDetails = (props) => {
  return (
    <div className={style["t-account-details"]}>
      <div className={style["t-account-details__bg-box"]}>
        <span className={style["t-account-details__title"]}>
          Account Details
        </span>
        <AccountForm />
      </div>
    </div>
  );
};

export default AccountDetails;
