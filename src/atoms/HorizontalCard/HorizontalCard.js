import React from 'react';
import style from './HorizontalCard.module.scss'


const HorizontalCard = props => {
    return (
        <div className={style['a-horizontal-card']}>
            <img className={style['image']} src="https://picsum.photos/240" alt="banner" />
            <div className={style['title']}>
                {props.title}
            </div>
        </div>
    );
};

export default HorizontalCard;