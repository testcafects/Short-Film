import React from "react";
import style from "./RemoveIcon.module.scss";
import { CloseCircleOutlined } from "@ant-design/icons";
import Buttons from "../Buttons/Buttons";

const RemoveIcon = (props) => {
  return (
    <div className={style["a-remove-icon"]}>
      <span className={style["a-remove-icon__amount"]}>₹{props.price} </span>
      <Buttons
        className={style["a-remove-icon__delete"]}
        icon={<CloseCircleOutlined style={{ fontSize: '1.5rem' }}/>}
        color="red"
        bgcolor="white"
        border="none"
      ></Buttons>
    </div>
  );
};

export default RemoveIcon;
