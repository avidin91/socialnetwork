import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://www.1zoom.ru/big2/946/289597-frederika.jpg" alt="My avatar"/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;