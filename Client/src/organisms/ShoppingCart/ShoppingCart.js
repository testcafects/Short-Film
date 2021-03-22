import React, { useState } from "react";
import style from "./ShoppingCart.module.scss";
import CartItem from "../../molecules/CartItem/CartItem";
import {client} from "../../server/server.js";
import { gql,useQuery } from '@apollo/client';
const POST_BY_ID = gql
` {
  cart(userId: 1) {
   Post{
     title
     price
     rating
   }
}
}
`
const ShoppingCart = (props) => {
  const { loading, error, data } = useQuery(POST_BY_ID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div className={style["o-shopping-cart"]} data-test="shopping-cart">
      <div className={style["o-shopping-cart__title"]}> ShoppingCart</div>
      <div>
        {data.cart.map((value,el) => (
          <div className={style["o-shopping-cart__cartItems"]}>
            <CartItem key={el} value={value}/>
          </div>
        ))}
        {console.log(data.cart) }
      </div>
    </div>
  );
};

export default ShoppingCart;
