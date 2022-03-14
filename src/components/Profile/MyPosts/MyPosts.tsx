import React from "react";
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import {ActionType, addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    const postElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
            props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current!.value;
            props.dispatch(updateNewPostTextActionCreator(text))
    }
        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>
                            Add post
                        </button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        );
    };


export default MyPosts;