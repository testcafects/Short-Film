import style from "./card-meta-data.module.scss";
import Dot from "../../atoms/dot/dot.js";

const CardMetaData = (props) => {
  return (
    <div className={style["m-card-meta-data"]}>
      <div className={style["m-card-meta-data__view"]}>{props.views} </div>
      <Dot />
      <div className={style["m-card-meta-data__time"]}>{props.postedOn}</div>
    </div>
  );
};

export default CardMetaData;
