import style from './categoryCard.module.scss';
import Rating from '../../atoms/rating/rating.js';
import CardMetaData from '../../molecules/card-meta-data/card-meta-data.js';

const CategoryCard = () => {
    return (
        <div className={style['o-list-card']}>
            <img src="https://picsum.photos/128" alt="card" />
            <div className={style['o-list-card__content']}>
                <h1>The complete Node.js Developer Course</h1>
                
                <div className={style['author']}>
                    Hari Hara kumar
                                </div>
                <Rating />
                <CardMetaData />
            </div>
        </div>
    )
}

export default CategoryCard;