import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.main}>
                <img src='https://i.pinimg.com/originals/ec/b0/bc/ecb0bc4f76a0bc7e94e4d0e7c2c40e00.jpg' alt='test' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;