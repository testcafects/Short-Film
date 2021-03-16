import ReactStars from "react-rating-stars-component";
import style from "./rating.module.scss";

const Rating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const getRandomArbitrary = () => {
    return Math.floor(Math.random() * (1 + 5) + 1);
  };

  return (
    <div className={style["a-rating"]}>
      <p>4.2</p>
      <ReactStars
        edit={false}
        count={5}
        value={getRandomArbitrary()}
        onChange={ratingChanged}
        size={16}
        activeColor="#f2be22"
      />
      <p>(418)</p>
    </div>
  );
};

export default Rating;
