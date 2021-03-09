import React from 'react';
import style from './ButtonCustom.module.scss';
import { Button } from 'antd';

const ButtonCustom = ({text}) => {
    return (
        <div className='colors-4-hex'>
           <Button type="text">
               <p>{text}</p>
           </Button>
        </div>
    );
};

export default ButtonCustom;