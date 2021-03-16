import React from 'react';
import { Input } from 'antd';
import style from './InputCustom.module.scss';

const InputCustom = ({data}) => {
    return (
        <div className={style['color-4-hex']} >
            <label className={style['label']} for={data}>{data}</label>        
                <Input className={style['input']}
                    id={data} 
                    type="text"
                    label={data}
                    name={data}
                    data-test="text-box"
                    placeholder= {data}
                ></Input>
        </div>
    );
};

export default InputCustom;