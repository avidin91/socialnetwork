let rerenderEntireTree;

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likesCount: '0'},
            {id: 2, message: 'It\'s my first post', likesCount: '19'},
            {id: 3, message: 'blablabla', likesCount: '11'},
            {id: 4, message: 'Hello World!', likesCount: '23'},
        ],
        newPostText: 'Try to text here'
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
    },
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newtext) => {
    state.profilePage.newPostText = newtext;
    rerenderEntireTree(state);

};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
    return rerenderEntireTree;
};

export default state;