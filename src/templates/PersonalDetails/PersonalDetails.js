import React from 'react';
import style from './PersonalDetails.module.scss';
import TextboxWithLabel from '../../atoms/TextboxWithLabel/TextboxWithLabel.js';
import ProfileButton from '../../atoms/ProfileButton/ProfileButton.js';

const PersonalDetails = props => {
return (
<div className={style['t-personal-details']}>
    <div className={style['t-personal-details__bg-box']}>
        <span className={style['t-personal-details__title']}>Personal Details</span>
        <TextboxWithLabel labelName="First Name" placeholder="First Name" />
        <TextboxWithLabel labelName="Last Name" placeholder="Last Name" />
        <div className={style['t-personal-details__email-dob']}>
            <TextboxWithLabel labelName="Email" placeholder="Email" />
            <TextboxWithLabel labelName="Date of Birth" placeholder="Date of Birth" />
        </div>
        <TextboxWithLabel labelName="Genres" placeholder="Genres" />
        <TextboxWithLabel labelName="Social Media Link" placeholder="Facebook Link" />
        <div className={style['t-personal-details__buttons']}>
            <ProfileButton type="primary" name="Save" />
            <ProfileButton type="secondary" name="Cancel" />
        </div>
    </div>
</div>
);
};

export default PersonalDetails;