import React from 'react';
import style from './search-bar.module.scss';

import { AutoComplete } from 'antd';

const options = [
    {
        value: 'Burns Bay Road',
    },
    {
        value: 'Downing Street',
    },
    {
        value: 'Wall Street',
    },
];

function SearchBar() {
    return (
        <div className={style['a-search-bar']}>
            <AutoComplete
                style={{
                    width: 300
                }}
                options={options}
                placeholder="Search for anything"
                filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            />
        </div>
    )
}

export default SearchBar;
