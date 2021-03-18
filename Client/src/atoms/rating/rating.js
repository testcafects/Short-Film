import style from "./rating.module.scss";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState("");
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };
  return (
    <div className={style["a-rating"]} data-test="rating">
      <p data-test="rating_count">{rating}</p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={16}
        activeColor="#f2be22"
      />
    </div>
  );
};

export default Rating;
