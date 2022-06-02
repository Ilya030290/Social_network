import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../../common/Paginator/Paginator";
import {User} from "./User/User";

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
                props.users.map(u => <User id={u.id}
                                           photos={u.photos}
                                           followed={u.followed}
                                           name={u.name}
                                           status={u.status}
                                           uniqueUrlName={u.uniqueUrlName}
                                           followUsers={props.followUsers}
                                           unFollowUsers={props.unFollowUsers}
                                           followingInProgress={props.followingInProgress}
                                           key={u.id}
                                        />)
            }
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
        </div>
    );
}