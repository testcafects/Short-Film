import React from 'react';
import style from './Buttons.module.scss'
import { Button } from 'antd';


const Buttons = props => {
return (
<div className={style['a-buttons']} data-test="common_button">
    <Button className={style['m-checkout-box__btn']} 
    id={props.id} type="primary" style={{width:props.width, height:props.height}}>{props.name}</Button>
</div>
);
};

export default Buttons;