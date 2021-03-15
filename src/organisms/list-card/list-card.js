import style from "./list-card.module.scss";
import Rating from "../../atoms/rating/rating.js";
import CardMetaData from "../../molecules/card-meta-data/card-meta-data.js";

const ListCard = () => {
  return (
      <div className={style["o-list-card"]}>
      <img src="https://picsum.photos/128" alt="card" />
      <div className={style["o-list-card__content"]}>
        <h1>Next on Impulse | The Dark Theory</h1>
        <div className={style["author"]}>Brain Ombers</div>
        <div className={style["rating"]}>
          <Rating />
        </div>
        <div className={style["rating"]}>
          <CardMetaData />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
