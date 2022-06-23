import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: '0'},
        {id: 2, message: 'It\'s my first post', likesCount: '19'},
    ]

    let postElements = postData.map(currentValue =>{
        return <Post message={currentValue.message} likesCount={currentValue.likesCount}/>
    });

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;