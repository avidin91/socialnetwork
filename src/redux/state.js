const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: '0'},
                {id: 2, message: 'It\'s my first post', likesCount: '19'},
                {id: 3, message: 'blablabla', likesCount: '11'},
                {id: 4, message: 'Hello World!', likesCount: '23'},
            ],
            newPostText: 'Try to text here',
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hi',},
                {id: 2, message: 'How is your bench-press?',},
                {id: 3, message: 'You',},
                {id: 4, message: 'Yo',},
                {id: 5, message: 'Yo',},
            ],
            dialogsData: [
                {id: 1, name: 'Dimych',},
                {id: 2, name: 'Andrey',},
                {id: 3, name: 'Sveta',},
                {id: 4, name: 'Sasha',},
                {id: 5, name: 'Victor',},
                {id: 6, name: 'Valera',},
            ],
            newMessageText: 'Text here...',
        },
    },
    _callSubscriber() {},

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
        return this._callSubscriber;
    },

    dispatch(action) {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE){
        let newMessage = {
            id: 0,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
        this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber(this._state);
    }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST,});

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    });

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
});

window.store = store;