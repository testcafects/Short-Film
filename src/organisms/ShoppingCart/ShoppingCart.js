import React from 'react';
import style from './ShoppingCart.module.scss'
import CartItem from '../../molecules/CartItem/CartItem'

const ShoppingCart = props => {
return (
<div className={style['o-shopping-cart']}>
   <div className={style['title']}> ShoppingCart</div>
    <section >
                        {
                            [1, 2].map((el) =><div className={style['cartItems']}> 
                                <CartItem  key={el} /></div>)
                        }
                    </section>
   
</div>
);
};

export default ShoppingCart;