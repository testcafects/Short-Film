import React, { useState } from "react";
import style from "./CouponSearch.module.scss";
import "antd/dist/antd.css";
import { Input } from "antd";
const { Search } = Input;
const codes = ["1234", "5678"];

const CouponSearch = (props) => {
  const [coupon, setCoupon] = useState("");
  const [colors, setColors] = useState("red");
  var inputCodes = "";

  const onApply = (e) => {
    if (e !== "") {
      if (codes.some((code) => e === code)) {
        setCoupon("Applied");
        setColors("green");
      } else {
        setCoupon("Not Applied");
        setColors("red");
      }
    } else {
      setCoupon("Please Enter some code");
      setColors("red");
    }
  };

  const onChange = (e) => {
    inputCodes = e.target.value;
    if (inputCodes === "") {
      setCoupon("");
    }
  };

  return (
    <div className={style["a-coupon-search"]} data-test="coupon-search">
      <Search
        placeholder="Enter Coupon Code"
        enterButton="Apply"
        size="large"
        onChange={onChange}
        onSearch={onApply}
      />
      <div style={{ color: colors }}>{coupon}</div>
    </div>
  );
};

export default CouponSearch;
