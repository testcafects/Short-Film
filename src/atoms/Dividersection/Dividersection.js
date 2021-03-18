import { Divider } from 'antd';
import React from 'react';
import style from './Dividersection.module.scss';

const Dividersection = props => {
return (
<div className={style['a-dividersection']}>
<Divider >Or</Divider>
</div>
);
};

export default Dividersection;