import React from "react";
import style from "./AccountDetails.module.scss";
import AccountForm from "../../molecules/AccountForm/AccountForm.js";

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
