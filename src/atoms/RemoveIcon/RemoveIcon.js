import React from 'react';
import style from './RemoveIcon.module.scss'
import {CloseCircleOutlined} from '@ant-design/icons'

const RemoveIcon = props => {

return (
<div className={style['a-remove-icon']}>
 <span className={style['a-remove-icon__amount']}>₹{props.price} </span> 
 <span className={style['a-remove-icon__delete']}><CloseCircleOutlined /></span>
</div>
);
};

export default RemoveIcon;