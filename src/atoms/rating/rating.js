import style from './rating.module.scss';
import ReactStars from "react-rating-stars-component";


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
            
        </div>
    )
}

export default Rating;
