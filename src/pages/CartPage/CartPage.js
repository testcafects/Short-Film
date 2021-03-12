import React from 'react';
import CartTemplate from '../../templates/CartTemplate/CartTemplate';
import style from './CartPage.module.scss'

const CartPage = props => {
return (
<div className={style['p-cart-page']}>
    <CartTemplate />
</div>
);
};

export default CartPage;