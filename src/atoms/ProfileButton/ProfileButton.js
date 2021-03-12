import React from 'react';
import style from './ProfileButton.module.scss';
import { Button } from 'antd';

const ProfileButton = props => {
return (
<div className={style['a-profile-button']}>
    <Button type={props.type}>{props.name} </Button>
</div>
);
};

export default ProfileButton;