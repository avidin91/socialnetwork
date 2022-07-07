import React from "react";
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg',
                followed: false,
                fullName: 'Nadya',
                status: 'Hello, im there',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg',
                followed: true,
                fullName: 'Mohhamad',
                status: 'Looks like it time to relax',
                location: {city: 'Almaty', country: 'Kazakhstan'}
            },
            {
                id: 4,
                photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg',
                followed: false,
                fullName: 'Khong Yan',
                status: 'Howdy ho',
                location: {city: 'Pattaya', country: 'Thailand'}
            },
            {
                id: 5,
                photoUrl: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg',
                followed: false,
                fullName: 'Jhon',
                status: 'There is a ...',
                location: {city: 'New York', country: 'USA'}
            },
        ])
    }


    return (<div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>);
}

export default Users;