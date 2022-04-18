import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Button, Pagination} from "@mui/material";
import {follow, unFollow} from "../../api/api";


type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UserType>,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.usersBlock}>
            <div className={s.pagination}>
                <Pagination count={pages.length}
                            page={props.currentPage}
                            onChange={(e, num) => props.onPageChanged(num)}
                            color="secondary"
                />
            </div>
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
                                    ? <Button variant={"contained"} size={"small"} color={"secondary"} onClick={() => {
                                        unFollow(u.id)
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.unFollow(u.id);
                                                }
                                            });
                                    }}>
                                        Unfollow
                                    </Button>
                                    : <Button variant={"contained"} size={"small"} color={"success"} onClick={() => {
                                        follow(u.id)
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                            });
                                    }}>
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
        </div>
    );
}