import React from 'react';
import style from './ShoppingCart.module.scss'
import CartItem from '../../molecules/CartItem/CartItem'

const ShoppingCart = props => {
return (
<div className={style['o-shopping-cart']}>
   <div className={style['o-shopping-cart__title']}> ShoppingCart</div>
    <div >
                        {
                            [1, 2].map((el) =><div className={style['o-shopping-cart__cartItems']}> 
                                <CartItem  key={el} /></div>)
                        }
                    </div>
   
</div>
);
};

export default ShoppingCart;