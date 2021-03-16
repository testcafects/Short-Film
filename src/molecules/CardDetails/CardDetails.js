import { LockFilled, QuestionCircleFilled } from "@ant-design/icons";
import React from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Input from "../../atoms/Textbox/Textbox";
import style from "./CardDetails.module.scss";

const CardDetails = (props) => {
  const monthOptions = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const yearOptions = [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
  ];

  return (
    <div className={style["m-card-details"]}>
      <div className={style["m-card-details__line1"]}>
        <Input placeholder="Name on Card" dataTest={"card-name"} />
      </div>
      <div className={style["m-card-details__line2"]}>
        <Input
          placeholder="card Number"
          suffix={<LockFilled />}
          dataTest={"card-number"}
        />
      </div>
      <div className={style["m-card-details__line3"]}>
        <span className={style["m-card-details__line3__expiry"]}>
          <Dropdown
            defaultValue="MM"
            disable={false}
            options={monthOptions}
            dataTest={"card-expiry-month"}
          />
          <Dropdown
            defaultValue="YYYY"
            disable={false}
            options={yearOptions}
            dataTest={"card-expiry-year"}
          />
        </span>
        <div className={style["m-card-details__line3__security"]}>
          <Input
            placeholder="Security Code"
            suffix={<QuestionCircleFilled />}
            dataTest={"card-security-code"}
          />
        </div>
      </div>
      <div className={style["m-card-details__line4"]}>
        <Checkbox
          checked={true}
          label={"Remember this Card"}
          dataTest={"remember-me"}
        />
      </div>
      <div className={style["m-card-details__line5"]}>
        <div className={style["m-card-details__line5__secure-connect"]}>
          <div className={style["m-card-details__line5__secure-connect__lock"]}>
            <LockFilled />
          </div>
          <div className={style["m-card-details__line5__secure-connect__text"]}>
            <div>Secure</div>
            <div>Connection</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
