import { Rate } from "antd";
import style from "./rating.module.scss";

const Rating = () => {
  const getRandomArbitrary = () => {
    return Math.floor(Math.random() * (1 + 5) + 1);
  };

  return (
    <div className={style["a-rating"]}>
      <p>4.2</p>
      <Rate
        disabled
        className={style["a-rating__star"]}
        value={getRandomArbitrary()}
      />
      <p>(418)</p>
    </div>
  );
};

export default Rating;
