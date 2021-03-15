import React from 'react';
import style from './Recommended.module.scss'
import Cards from '../../molecules/Cards/Cards.js'
const Recommended = props => {
return (
<div className={style['o-recommended']}>
<div className={style['title']}>Recommended For You</div>
    <div className={style['card-list']}>    
    {
    [1, 2, 3, 4,5,6,7,8,9,10,11,12,13].map((det) => <Cards key={det}/>)
    }        
    </div>
</div>
);
};

export default Recommended;