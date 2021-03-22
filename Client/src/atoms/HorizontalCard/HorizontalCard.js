import React from "react";
import style from "./HorizontalCard.module.scss";

const HorizontalCard = (props) => {
  return (
    <div className={style["a-horizontal-card"]}>
      <span className={style["a-horizontal-card__title"]}>{props.title}</span>
    </div>
  );
};

export default HorizontalCard;
