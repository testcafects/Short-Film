import React from 'react';
import style from './filter-option.module.scss';
import { Checkbox } from 'antd';


const FilterOption = (props) => {
    const list = props.data;
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    return (
        <div className={style['a-filter-option']}>
            {
                list?.length > 0 ? list.map((el, idx) => <Checkbox key={idx} className={style['a-filter-option__checkbox']} onChange={onChange}>{el.name} ({el.totalItems})</Checkbox>) : 'Loading ...'
            }
        </div>
    )
}

export default FilterOption;
