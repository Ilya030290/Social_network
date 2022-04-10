import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Button, TextareaAutosize, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


const MyPosts = (props: MyPostsPropsType) => {
    const postElements = props.profilePage.posts.map((p, index) =>
        <Post key={index} id={p.id} message={p.message} likeCount={p.likeCount}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current!.value;
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextareaAutosize
                        aria-label={"minimum height"}
                        minRows={5}
                        placeholder={"Add new post"}
                        style={{ width: 250 }}
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                    />
                </div>
                <div>
                    <Button variant={"contained"}
                            endIcon={<SendIcon />}
                            onClick={onAddPost}
                            size={"small"}
                            color={"secondary"}
                    >
                        Add post
                    </Button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};


export default MyPosts;