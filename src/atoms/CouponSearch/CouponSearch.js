import React from 'react';
import style from './CouponSearch.module.scss'
import 'antd/dist/antd.css';
import { Input} from 'antd';
const { Search } = Input;

const onSearch = value => console.log(value);

const CouponSearch = props => {
return (
<div className={style['a-coupon-search']}>

<Search
placeholder="Enter Coupon Code"
allowClear
enterButton="Apply"
size="large"
onSearch={onSearch}
/>

</div>
);
};

export default CouponSearch;