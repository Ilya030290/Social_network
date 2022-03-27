import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css';


export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://avatarko.ru/img/kartinka/1/Brus.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://avatarko.ru/img/kartinka/12/znamenitost_11772.jpg',
                followed: true,
                fullName: 'Andrew',
                status: 'I am a champion',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://avatarko.ru/img/kartinka/5/znamenitost_4724.jpg',
                followed: false,
                fullName: 'Aleksandr',
                status: 'I like to play football',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }
    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto}
                             src={u.photoUrl}
                             alt={'avatar'}
                        />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
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
        </div>
    );
};

