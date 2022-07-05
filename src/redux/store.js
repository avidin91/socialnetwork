// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
// export let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: '0'},
//                 {id: 2, message: 'It\'s my first post', likesCount: '19'},
//                 {id: 3, message: 'blablabla', likesCount: '11'},
//                 {id: 4, message: 'Hello World!', likesCount: '23'},
//             ],
//             newPostText: '',
//         },
//         dialogsPage: {
//             messagesData: [
//                 {id: 1, message: 'Hi',},
//                 {id: 2, message: 'How is your bench-press?',},
//                 {id: 3, message: 'You',},
//                 {id: 4, message: 'Yo',},
//                 {id: 5, message: 'Yo',},
//             ],
//             dialogsData: [
//                 {id: 1, name: 'Dimych',},
//                 {id: 2, name: 'Andrey',},
//                 {id: 3, name: 'Sveta',},
//                 {id: 4, name: 'Sasha',},
//                 {id: 5, name: 'Victor',},
//                 {id: 6, name: 'Valera',},
//             ],
//             newMessageText: '',
//         },
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//         return this._callSubscriber;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//
//         this._callSubscriber(this._state);
//
//
//     },
// }
//
//
//
//
//
// window.store = store;