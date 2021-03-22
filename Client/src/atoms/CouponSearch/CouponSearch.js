import React, { useState } from "react";
import style from "./CouponSearch.module.scss";
import "antd/dist/antd.css";
import { Input } from "antd";
import { gql, useLazyQuery } from "@apollo/client";

const { Search } = Input;

const CouponSearch = (props) => {
  const [coupon, setCoupon] = useState("");
  const [colors, setColors] = useState("red");
  var inputCodes = "";

  const GET_POST = gql`
    query validate($value: String!) {
      validate(title: $value)
    }
  `;
  const coupounResponse = (data) => {
    console.log(data);

    if (data.validate) {
      setCoupon("Coupon Applied");
      setColors("green");
    } else {
      setCoupon("Enter Valid Coupon");
      setColors("red");
    }
  };
  const [onApply, { loading, error }] = useLazyQuery(
    GET_POST,
    {
      onCompleted: coupounResponse,
    },
    { errorPolicy: "all" }
  );

  const validate = (value) => {
    onApply({ variables: { value } });
    if (error) {
      alert(error.networkError);
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
        onSearch={validate}
        loading={loading}
      />

      <div style={{ color: colors }}>{coupon}</div>
    </div>
  );
};

export default CouponSearch;
