import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";
import {Paginator} from "../../common/Paginator/Paginator";



type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UserType>,
    followUsers: (userId: number) => void,
    unFollowUsers: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void,
    followingInProgress: Array<number>
}

export const Users = (props: UsersPropsType) => {



    return (
        <div className={s.usersBlock}>
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img className={s.userPhoto}
                                 src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 alt={'ava'}
                            />
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <Button variant={"contained"}
                                              size={"small"}
                                              color={"secondary"}
                                              disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {props.unFollowUsers(u.id)}}>
                                        Unfollow
                                    </Button>
                                    : <Button variant={"contained"}
                                              size={"small"}
                                              color={"success"}
                                              disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {props.followUsers(u.id)}}>
                                        Follow
                                    </Button>
                            }
                        </div>
                    </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"Location: Country"}</div>
                                <div>{"Location: City"}</div>
                            </span>
                    </span>
                    </div>
                )
            }
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
        </div>
    );
}