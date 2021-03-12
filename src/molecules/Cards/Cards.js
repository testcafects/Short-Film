import React from 'react';
import style from './Cards.module.scss'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import Rating from '../../atoms/rating/rating.js'
import Buttons from '../../atoms/Buttons/Buttons.js'
const { Meta } = Card;

const Cards = props => {
return (
<div className={style['m-cards']}>
<Card
hoverable
style={{ width: 175 }}
cover={<img alt="example" src="https://source.unsplash.com/random/150x125" />}
>
<Meta title="The Complete Node.js Tutorial" description="Director : Nolan" />
<Rating/>
<Buttons id="btn" name="Add to Cart" width="112px" height="32px"/>
</Card>
</div>
);
};

export default Cards;