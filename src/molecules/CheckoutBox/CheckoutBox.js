import React from 'react';
import style from './CheckoutBox.module.scss'
import Buttons from '../../atoms/Buttons/Buttons.js'
import CouponSearch from '../../atoms/CouponSearch/CouponSearch.js'

const CheckoutBox = props => {
return (
<div className={style['m-checkout-box']}>
    <div className={style['m-checkout-box__total']}>Total</div>
    <div className={style['m-checkout-box__price']}>₹2000</div>
    <CouponSearch />
    <Buttons id="btn" name="Checkout" />
</div>
);
};

export default CheckoutBox;