import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img src='http://bgfons.com/uploads/waves/waves_texture2412.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + descrition
        </div>

    </div>
}

export default ProfileInfo;