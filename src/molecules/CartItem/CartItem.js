import React from 'react';
import style from './CartItem.module.scss'
import HorizontalCard from '../../atoms/HorizontalCard/HorizontalCard'
import SaveForLater from '../../atoms/SaveForLater/SaveForLater'
import RemoveIcon from '../../atoms/RemoveIcon/RemoveIcon'

const CartItem = props => {
return (
<div className={style['m-cart-item']}>
    <HorizontalCard title='Complete NodeJS'/>
    <div className={style['remove']}>
    <RemoveIcon price="1200"/>
    <div className={style['saveforlater']}>
    <SaveForLater/>
    </div>
    </div>
</div>
);
};

export default CartItem;