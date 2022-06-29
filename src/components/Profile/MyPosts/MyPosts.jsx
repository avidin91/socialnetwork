import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.postData.map(currentValue => {
        return <Post message={currentValue.message} likesCount={currentValue.likesCount}/>
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let newVar = { newText: text, type: 'UPDATE-NEW-POST-TEXT',};
        props.dispatch(newVar);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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