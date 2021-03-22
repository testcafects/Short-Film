import style from "./rating.module.scss";
import ReactStars from "react-rating-stars-component";

const Rating = (props) => {

  return (
    <div className={style["a-rating"]} data-test="rating">
      <p data-test="rating_count">{props.value}</p>
      <ReactStars
        count={5}
        size={16}
        activeColor="#f2be22"
        value={props.value}
        isHalf={true}
      />
      
    </div>
  );
};

export default Rating;
