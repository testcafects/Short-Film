import React from 'react';
import style from './Detail.module.scss'
import DetailTemplate from '../../templates/DetailTemplate/DetailTemplate';

const Detail = props => {
    return (
        <div className={style['p-detail']} data-test="">
            <DetailTemplate />
        </div>
    );
};

export default Detail;