import React, { useState } from 'react';
import style from './CouponSearch.module.scss'
import 'antd/dist/antd.css';
import { Input} from 'antd';
const { Search } = Input;
const codes=['1234','5678']

const CouponSearch = props => {
    const [coupon,setCoupon]=useState(false)
    const [style,setStyle]=useState("red")
    // const inputCodes
    var inputCodes
    const onApply=()=>{
        // console.log(codes)
        // console.log(inputCodes)
        if(codes.some((det)=>inputCodes===det)){
            setCoupon("Applied")
            setStyle("green")
        }
        else{
            setCoupon("Not Applied")
            setStyle("red")
        }
    
    }
    const onChange=(e)=>{
         inputCodes= e.target.value
    }
return (
<div className={style['a-coupon-search']} data-test="coupon-search">

<Search
placeholder="Enter Coupon Code"
allowClear
enterButton="Apply"
size="large"
onChange={onChange}
onSearch={onApply}

/>
<div style={{color:style}}>{coupon}</div>
</div>
);
};

export default CouponSearch;