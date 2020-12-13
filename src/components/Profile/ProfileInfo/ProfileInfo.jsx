import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
//{Object.values(props.profile)}
/*<div>{Object.entries(props.profile.contacts)}</div>*/
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let contacts = '';
    for (let key in props.profile.contacts){contacts = contacts + key+':'+props.profile.contacts[key]+'     '}
    return <div>

        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{contacts}{'3\nw'}</div>

        </div>

    </div>
}

export default ProfileInfo;