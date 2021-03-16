import React from 'react';
import style from './ButtonCustom.module.scss';
import { Button } from 'antd';

const ButtonCustom = ({text}) => {
    return (
        <div className={style['button']} data-test="button">
           <Button >
               <p>{text}</p>
           </Button>
        </div>
    );
};

export default ButtonCustom;