import React from "react";
import style from "./SaveForLater.module.scss";
import { ClockCircleOutlined } from "@ant-design/icons";

const SaveForLater = (props) => {
  return (
    <div className={style["a-save-for-later"]}>
      <span className={style["a-save-for-later__text"]}> SaveForLater</span>
      <span className={style["a-save-for-later__Icon"]}>
        <ClockCircleOutlined />
      </span>
    </div>
  );
};

export default SaveForLater;
