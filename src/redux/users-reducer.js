const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg', followed: false, fullName: 'Nadya', status: 'Hello, im there', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg', followed: true, fullName: 'Mohhamad', status: 'Looks like it time to relax', location: {city: 'Almaty', country: 'Kazakhstan'}},
        // {id: 4, photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg', followed: false, fullName: 'Khong Yan', status: 'Howdy ho', location: {city: 'Pattaya', country: 'Thailand'}},
        // {id: 5, photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg', followed: false, fullName: 'Jhon', status: 'There is a ...', location: {city: 'New York', country: 'USA'}},
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
                return {...state, users: [...state.users, ...action.users]}
            }
        default:
            return state;
    };

}

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;