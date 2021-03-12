import React from 'react'
import style from './profile-icon.module.scss';

import { Avatar } from 'antd';

const ProfileIcon = () => {
    return (
        <div className={style['a-profile-icon']}>
            <Avatar size={45} src="https://picsum.photos/60" />
        </div>
    )
}

export default ProfileIcon;
