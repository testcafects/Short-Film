import style from './list-menu-bar.module.scss';

import React from 'react';
import { Button } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import ResultCount from '../../atoms/result-count/result-count.js';

function ListMenuBar() {
    return (
        <div className={style['m-list-menu-bar']}>
            <Button type="text" icon={<FilterFilled />}><b>Filter</b></Button>
            <ResultCount />
        </div>
    )
}

export default ListMenuBar;
