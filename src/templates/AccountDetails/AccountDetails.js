import React from 'react';
import style from './AccountDetails.module.scss'
import TextboxWithLabel from '../../atoms/TextboxWithLabel/TextboxWithLabel.js';
import ProfileButton from '../../atoms/ProfileButton/ProfileButton.js';

const AccountDetails = props => {
return (
<div className={style['t-account-details']}>
<div className={style['t-account-details__bg-box']}>
        <span className={style['t-account-details__title']}>Account Details</span>
        <TextboxWithLabel labelName="Email"  placeholder="Email"/>    
        <TextboxWithLabel labelName="Reset Password" placeholder="Old password" />    
        <div className={style['t-account-details__buttons']}>
            <ProfileButton type="primary" name="Save" />
            <ProfileButton type="secondary" name="Cancel" />
        </div>
    </div>
</div>
);
};

export default AccountDetails;