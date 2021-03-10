import React from 'react';
import ButtonCustom from '../../atoms/ButtonCustom/ButtonCustom';
import style from './ActionBar.module.scss'

const ActionBar = ({ listData }) => {
    return (
        <div className={style['o-action-bar']}>
            {listData.length  &&
                listData.map((buttonName, index) => <div key={index} className="buttonOuter"> <ButtonCustom text={buttonName}></ButtonCustom></div>)
            }
        </div>
    );
};

export default ActionBar;