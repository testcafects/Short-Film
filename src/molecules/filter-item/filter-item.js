import React from 'react';
import style from './filter-item.module.scss';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import FilterOption from '../../atoms/filter-option/filter-option.js';


const FilterItem = () => {
    return (
        <div className={style['m-filter-item']} >
            <nav>
                <div className="title">Demo Item</div>
                <Button type="text" icon={<DownOutlined />}></Button>
            </nav>
            <div>
                <FilterOption />
                <FilterOption />
            </div>
        </div >
    )
}

export default FilterItem;
