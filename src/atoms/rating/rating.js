import ReactStars from "react-rating-stars-component";
import style from './rating.module.scss';


const Rating = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (

        <div className={style['a-rating']}>
            <p>4.2</p>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={16}
                activeColor="#f2be22"
            />
            <p>(418)</p>
        </div>
    )
}

export default Rating;
