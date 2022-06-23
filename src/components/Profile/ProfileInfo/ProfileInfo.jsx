import React from 'react';
import s from './Profileinfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.main}>
                <img src='https://i.pinimg.com/originals/ec/b0/bc/ecb0bc4f76a0bc7e94e4d0e7c2c40e00.jpg' alt='test'/>
            </div>
            <div className={s.description_block}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;