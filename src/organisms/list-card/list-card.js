import style from './list-card.module.scss';
import Rating from '../../atoms/rating/rating.js';
import CardMetaData from '../../molecules/card-meta-data/card-meta-data.js';

const ListCard = () => {
    return (
        <div className={style['o-list-card']}>
            <img src="https://picsum.photos/128" alt="card" />
            <div className={style['o-list-card__content']}>
                <h1>The complete Node.js Developer Course</h1>
                <div className={style['description']}>
                    e-commerce project with Asp Net Core,Angular 2,
                    bootstrap 4,Paypal,Identity Core,C#,
                                </div>
                <div className={style['author']}>
                    Hari Hara kumar
                                </div>
                <Rating />
                <CardMetaData />
            </div>
        </div>
    )
}

export default ListCard;