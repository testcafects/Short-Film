import Dot from "../../atoms/dot/dot.js";
import style from "./card-meta-data.module.scss";

const CardMetaData = () => {
  return (
    <div className={style["m-card-meta-data"]}>
      <div className={style["m-card-meta-data__view"]}>1.5 M views </div>
      <Dot />
      <div className={style["m-card-meta-data__time"]}>2 months ago</div>
    </div>
  );
};

export default CardMetaData;
