import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postElements = props.postData.map(currentValue =>{
        return <Post message={currentValue.message} likesCount={currentValue.likesCount}/>
    });

    let newPostElement = React.createRef();

    let addPost = function () {
    let text = newPostElement.current.value;
    console.log(text)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;