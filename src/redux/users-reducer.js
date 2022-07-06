const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: '0'},
        {id: 2, message: 'It\'s my first post', likesCount: '19'},
        {id: 3, message: 'blablabla', likesCount: '11'},
        {id: 4, message: 'Hello World!', likesCount: '23'},
    ],
    newPostText: '',
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    };

}

export const addPostActionCreator = () => ({type: ADD_POST,});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default usersReducer;