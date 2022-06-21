import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.main}>
                <img src='https://i.pinimg.com/originals/ec/b0/bc/ecb0bc4f76a0bc7e94e4d0e7c2c40e00.jpg' alt='test'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;