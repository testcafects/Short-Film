import React from 'react';
import CardCustom from '../../atoms/CardCustom/CardCustom';
import style from './CardCollection.module.scss';


const CardCollection = props => {
    const cards = [1,2,3,4,5,6,7,8,9]
return (
<div className={style['m-card-collection']} data-test="">
    {
        cards.map((card,index)=>{
            return <CardCustom key={index}/>
        })
    }
    
</div>
);
};

export default CardCollection;