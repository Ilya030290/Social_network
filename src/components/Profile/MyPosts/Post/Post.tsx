import React from 'react';
import s from "./Post.module.css";
import {Avatar} from "@mui/material";
import {useDispatch} from "react-redux";
import {deletePost} from "../../../../redux/profile-reducer";

export type PostType = {
    message: string,
    likeCount: number,
    id: number
}

const Post = (props: PostType) => {

    const dispatch = useDispatch();

    const removePost = (postId: number) => {
        dispatch(deletePost(postId));
    }

    return (
        <>
            <div className={s.item}>
                <Avatar
                    src={"https://bipbap.ru/wp-content/uploads/2017/07/images-2-65.jpg"}
                    alt={"Avatar"}
                    sx={{width: 56, height: 56}}
                />
                {props.message}
                <button onClick={() => removePost(props.id)}>x</button>
            </div>
                <div>
                    <span> likes {props.likeCount}</span>
                </div>
        </>
    );
};

export default Post;