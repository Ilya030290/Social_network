import React from 'react';
import s from "./Post.module.css";
import {Avatar} from "@mui/material";

export type PostType = {
    message: string,
    likeCount: number,
    id: number
}

const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            <Avatar
                src={"https://bipbap.ru/wp-content/uploads/2017/07/images-2-65.jpg"}
                alt={"Avatar"}
                sx={{ width: 56, height: 56 }}
            />
            {props.message}
            <div>
                <span> likes {props.likeCount}</span>
            </div>
        </div>
    );
};

export default Post;