import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


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
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>
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