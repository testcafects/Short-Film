import React from "react";
import style from "./SaveForLater.module.scss";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Buttons from "../Buttons/Buttons.js";
const { Link } = Typography;

const SaveForLater = (props) => {
  return (
    <div className={style["a-save-for-later"]}>
      <Link className={style["a-save-for-later__text"]}> SaveForLater</Link>
      <Buttons
        className={style["a-save-for-later__Icon"]}
        icon={<ClockCircleOutlined style={{ fontSize: "1.5rem" }} />}
        color="#6290ff"
        bgcolor="white"
        border="none"
      ></Buttons>
    </div>
  );
};

export default SaveForLater;
