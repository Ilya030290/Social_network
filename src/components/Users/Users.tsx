import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';


export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto}
                             src={u.photos.small !== null ? u.photos.small : userPhoto}
                             alt={'ava'}
                        />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>
            )}
        </div>
    );
};

