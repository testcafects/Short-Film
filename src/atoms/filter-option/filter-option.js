import React from 'react';
import style from './filter-option.module.scss';
import { Checkbox } from 'antd';


const FilterOption = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    return (
        <div className={style['a-filter-option']}>
            <Checkbox onChange={onChange}>Option 1</Checkbox>
        </div>
    )
}

export default FilterOption;
