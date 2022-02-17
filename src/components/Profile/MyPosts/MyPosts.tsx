import React from "react";
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostPropsType>,
    newPostText: string,
    addPost: (postMessage: string) => void,
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    const postElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>);

    const newPostElement = React.useRef<HTMLTextAreaElement | null>(null);

    const addPost = () => {
        let text = newPostElement.current?.value;
        if (text) {
            props.addPost(text)
        }
        /*if (newPostElement.current) newPostElement.current.value = '';*/
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) {
            props.updateNewPostText(text)
        }
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