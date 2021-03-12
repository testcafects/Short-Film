import React from 'react';
import style from './SaveForLater.module.scss'
import {ClockCircleOutlined} from '@ant-design/icons'

const SaveForLater = props => {
return (
<div className={style['a-save-for-later']}>
   <span className={style['saveLater']}> SaveForLater</span>
   <span className={style['saveLaterIcon']}> <ClockCircleOutlined /></span>
</div>
);
};

export default SaveForLater;