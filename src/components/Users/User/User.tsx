import React from 'react';
import s from "../Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import {Button} from "@mui/material";
import {UserType} from "../../../redux/users-reducer";

type UserPropsType = UserType & {
    followUsers: (userId: number) => void
    unFollowUsers: (userId: number) => void
    followingInProgress: Array<number>
}

export const User: React.FC<UserPropsType> = (props) => {
    return (
        <div className={s.user}>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.id}>
                        <img className={s.userPhoto}
                                 src={props.photos.small !== null ? props.photos.small : userPhoto}
                                 alt={'ava'}
                        />
                    </NavLink>
                </div>
                <div>
                    {
                        props.followed
                            ? <Button variant={"contained"}
                                      size={"small"}
                                      color={"secondary"}
                                      disabled={props.followingInProgress.some(id => id === props.id)}
                                      onClick={() => {
                                          props.unFollowUsers(props.id)
                                      }}>
                                Unfollow
                            </Button>
                            : <Button variant={"contained"}
                                      size={"small"}
                                      color={"success"}
                                      disabled={props.followingInProgress.some(id => id === props.id)}
                                      onClick={() => {
                                          props.followUsers(props.id)
                                      }}>
                                Follow
                            </Button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </span>
                <span>
                    <div>{"Location: Country"}</div>
                    <div>{"Location: City"}</div>
                </span>
            </span>
        </div>
    );
};

