import React from "react";
import DetailTemplate from "../../templates/DetailTemplate/DetailTemplate.js";
import style from "./Detail.module.scss";

const Detail = (props) => {
  return (
    <div className={style["p-detail"]} data-test="detail-page">
      <DetailTemplate />
    </div>
  );
};

export default Detail;
