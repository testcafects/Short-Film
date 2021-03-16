import React from "react";
import style from "./Detail.module.scss";
import DetailTemplate from "../../templates/DetailTemplate/DetailTemplate.js";

const Detail = (props) => {
  return (
    <div className={style["p-detail"]} data-test="detail-page">
      <DetailTemplate />
    </div>
  );
};

export default Detail;
